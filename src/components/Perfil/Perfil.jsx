import './perfil.css'


const Perfil = ({ avatar, nome }) => {
    return (
        <div>
            <img className="perfil-avatar" src={avatar} alt={`Foto de ${nome}`} />
            <h1 className='perfil-titulo'>{nome}</h1>
        </div>
    )
}

export default Perfil