function App() {
  
  const banda1 ='Spiritbox'
  const banda2 = 'Jinjer'

  function retornaBanda() {
    return banda1;
  }

  const pessoa = {
    nome: 'Rafael'
  }

  let estaDeDia = false;

  return (
    <>
      <h1>Olá, {retornaBanda()}</h1>
      <h2>{banda2}</h2>
      <h3>Olá, eu sou {pessoa.nome}. Desejo um {estaDeDia ? 'Bom dia' : 'Boa tarde'} para todos.</h3>
    </>
  )
}

export default App
