import { useEffect, useState } from "react";

import styles from './perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    const [perfila, setPerfila] = useState({});

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}`)
        .then(res => res.json())
        .then(resJson => {
            setPerfila(resJson);          
        })
    }, [])

    return(
        <header className={styles.header}>
            <img className={styles.avatar} src={perfila.avatar_url} alt={`Foto de ${perfila.name}`} />
            <h1>{perfila.name}</h1>
        </header>
    )
}

export default Perfil