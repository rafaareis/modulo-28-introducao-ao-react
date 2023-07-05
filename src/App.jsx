import {useState} from 'react';

import Perfil from './components/Perfil/Perfil';
import Formulario from './components/Formulario/Formulario';

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <>
      <Perfil 
        nome="Spiritbox" 
        avatar="https://upload.wikimedia.org/wikipedia/commons/d/db/Spiritbox_-_Rock_am_Ring_2022-2717.jpg"
      />
      {formularioEstaVisivel && (
        <Formulario />
      )}
      

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>Toggle Form</button>
    </>
  )
}

export default App
