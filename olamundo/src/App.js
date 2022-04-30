import './App.css';

function App() {
  const name = "Rubem"
  let date = new Date()
  let dia = date.getDate()
  let mes = date.getMonth()
  let ano = date.getFullYear()
  function idade(d, n){
    n = 1983
    d = ano
    return d - n
  }

  return (
    <div className="App">
      <h2>Estudando JSX</h2>
      <p>Ola! Meu nome é {name}</p>
      <p>Data: {dia}/{mes + 1}/{ano}</p>
      <p>Eu faço {idade()} anos de idade esse ano.</p>
    </div>
  );
}

export default App;
