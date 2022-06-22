import { useState } from 'react'
import './App.css'

function App() {
  const [slide, setSlide] = useState(0);

  const changeSlide = (i) => {
    setSlide(slide => i + slide);
    setSlide(slide => i + slide);
  }


  return (
    <div className="App">
      <h1>Number: {slide}</h1>
      <button onClick={() => changeSlide(1)}>+</button>
      <button onClick={() => changeSlide(-1)}>-</button>
    </div>
  )
}

export default App
