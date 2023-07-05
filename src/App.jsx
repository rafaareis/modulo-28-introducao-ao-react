import {useState} from 'react';

import Perfil from './components/Perfil/Perfil';
// import Formulario from './components/Formulario/Formulario';
import ReposList from './components/ReposList/ReposList';


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <>
      
      <Perfil />
      <ReposList />

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>Toggle Form</button>
      */}
    </>
  )
}

export default App
