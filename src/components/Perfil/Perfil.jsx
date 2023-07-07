import { useEffect, useState } from "react";

import styles from './perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    const [perfila, setPerfila] = useState({});
    const [estaCarregando, setEstaCarregando] = useState(true); 

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setPerfila(resJson);
            })
        }, 3000)
    }, [nomeUsuario])

    return(
        <header className={styles.header}>
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <>
                    <img className={styles.avatar} src={perfila.avatar_url} alt={`Foto de ${perfila.name}`} />
                    <h1>{perfila.name}</h1>
                </>
            )}
        </header>
    )
}

export default Perfil