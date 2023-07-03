import './perfil.css'


const Perfil = () => {
    const usuario = {
        nome: 'Spiritbox',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Spiritbox_-_Rock_am_Ring_2022-2717.jpg'
    }

    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatar} alt={`Foto de ${usuario.nome}`} />
            <h1 className='perfil-titulo'>{usuario.nome}</h1>
        </div>
    )
}

export default Perfil