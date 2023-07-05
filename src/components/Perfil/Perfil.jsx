import { useEffect, useState } from "react";

import './perfil.css'

const Perfil = () => {
    const [perfila, setPerfila] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/rafaareis')
        .then(res => res.json())
        .then(resJson => {
            setPerfila(resJson);          
        })
    }, [])

    return(
        <div>
            <img className="perfil-avatar" src={perfila.avatar_url} alt={`Foto de ${perfila.name}`} />
            <h1>{perfila.name}</h1>
        </div>
    )
}

export default Perfil