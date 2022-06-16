import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currently: props.counter
    }
  }

  prev = () => {
    this.setState({ currently: this.state.currently -= 1 });
  }

  next = () => {
    this.setState({ currently: this.state.currently += 1 });
  }

  random = () => {
    this.setState({ currently: Math.floor(Math.random() * (50 - - 50) + -50) });
  }

  reset = () => {
    this.setState({ currently: this.state.currently = 0 });
  }

  render() {
    return (
      <div class="app">
        <div class="counter">{this.state.currently}</div>
        <div class="controls">
          <button onClick={this.prev}>INC</button>
          <button onClick={this.next}>DEC</button>
          <button onClick={this.random}>RND</button>
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    )
  }
}

export default App
// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов