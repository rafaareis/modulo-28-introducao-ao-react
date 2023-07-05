import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true); 

    useEffect(() => {
        fetch('https://api.github.com/users/rafaareis/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000);            
        })
    }, [])

    return (
        <>
            <h2>Repositórios</h2>
            {estaCarregando && (
                <h1>Carregando...</h1>
            )}
            <ul>
            {repos.map(({ id, name, language, html_url }) => (
                <li key={id}>
                    <b>Nome:</b> {name}
                    <b>Linguagem:</b> {language}
                    <a href={html_url} target="_blank">Visitar no Github</a>
                </li>
            ))}
            </ul>
        </>

    )
}

export default ReposList;