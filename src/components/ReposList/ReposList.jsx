import { useEffect, useState } from "react";

import styles from './reposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true); 

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000);            
        })
    }, [nomeUsuario])

    return (
        <div className="container">
            <h2>Repositórios</h2>
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                {repos.map(({ id, name, language, html_url }) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> {language}
                        </div>
                        <div>
                            <a className={styles.itemLink} href={html_url} target="_blank">Visitar no Github</a>
                        </div>
                        
                        
                    </li>
                ))}
                </ul>
            )}    
        </div>

    )
}

export default ReposList;