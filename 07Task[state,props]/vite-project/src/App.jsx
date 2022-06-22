import React from "react";
import { useState } from "react";
const App = () => {


  const [currently, setCurrentyl] = useState(0)
  const change = (i) => {
    setCurrentyl(currently => currently + i)
  }

  const random = () => {
    setCurrentyl(Math.floor(Math.random() * (50 - - 50) + -50))
  }

  const reset = () => {
    setCurrentyl(0)
  }

  return (
    <div class="app">
      <div class="counter">{currently}</div>
      <div class="controls">
        <button onClick={() => change(1)}>INC</button>
        <button onClick={() => change(-1)}>DEC</button>
        <button onClick={random}>RND</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  )
}

export default App
// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов