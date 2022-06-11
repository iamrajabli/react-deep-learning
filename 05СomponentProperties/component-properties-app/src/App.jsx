import { useState } from 'react'
import './App.css'

function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>My name is {name()}, surname - {surname} </h1>
      <a href={link}>My profile</a>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <WhoAmI name={() => { return 'Hikmat'}} surname="Rajabli" link="github.com/iamrajabli" />
      <WhoAmI name={() => { return 'Ali'}} surname="Rajabli" link="github.com/iamrajabli" />
    </div>
  )
}

export default App
