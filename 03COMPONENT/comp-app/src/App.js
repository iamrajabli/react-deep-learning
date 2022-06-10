import { Component } from 'react';
import './App.css';

// This is component [function]
const Header = () => {
  const text = 'This is header!';
  return <h2>{text}</h2>
}

// This is component [function]
const Login = () => {
  const text = 'Login';
  const holder = 'Please...';
  let loginStatus = true;
  return (
    <div className="container">
      <input type="text" placeholder={holder} />
      <button>{loginStatus ? 'Enter' : text}</button>
    </div>
  );
}

// This is component [class]
class Field extends Component {
  render() {
    const text = 'Login';
    const holder = 'Please...';
    let loginStatus = true;

    return (
      <div className="container">
        <input type="text" placeholder={holder} />
        <button>{loginStatus ? 'Enter' : text}</button>
      </div>
    );
  };

}

// This is component
function App() {
  return (
    <div className="App">
      <Header />
      <Field />
    </div>
  );
}

export default App;
export { Header };
