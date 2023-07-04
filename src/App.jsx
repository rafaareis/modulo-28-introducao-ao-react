import Perfil from './components/Perfil/Perfil';
import Formulario from './components/Formulario/Formulario';

function App() {
  
  return (
    <>
      <Perfil 
        nome="Spiritbox" 
        avatar="https://upload.wikimedia.org/wikipedia/commons/d/db/Spiritbox_-_Rock_am_Ring_2022-2717.jpg"
      />
      <Formulario />
    </>
  )
}

export default App
