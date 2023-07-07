import {useState} from 'react';

import Perfil from './components/Perfil/Perfil';
// import Formulario from './components/Formulario/Formulario';
import ReposList from './components/ReposList/ReposList';

import './global.css';


function App() {
  // const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type='text' onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>Toggle Form</button>
      */}
    </>
  )
}

export default App
