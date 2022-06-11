import { Component } from 'react';
import './App.css';

// This is component [function]
const Header = () => {
  const text = 'This is header!';
  return <h2>{text}</h2>
}

function NewComp() {
  return (
    <div>
      <h2>Salam</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sunt odit necessitatibus quidem optio quia maxime excepturi temporibus provident numquam in ratione ipsum corrupti illo voluptatibus, cum explicabo placeat tempora.</p>
    </div>
  )
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
      <NewComp />
    </div>
  );
}

export default App;
export { Header };
