import { useState } from 'react'
import './App.css'

function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>My name is {name}, surname - {surname} </h1>
      <a href={link}>My profile</a>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0)
  const data = [
    { name: 'Hikmat', surname: 'Rajabli', link: 'github.com/iamrajabli' },
    { name: 'Ali', surname: 'Rajabli', link: 'github.com/iamrajabli' },
  ];

  const elem = data.map((item, key) => {
    return (
      <WhoAmI {...item} key={key} />
    )
  })
  return (
    <div className="App">
      {elem}
    </div>
  )
}

export default App
