import React from 'react'

const DynamicGreating = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}


const DynamicGreatingSecond = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

const DynamicGreatingThird = (props) => {
  return (
    <div>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, { style: { 'border': '1px solid red' } })
        })
      }
    </div>
  )
}

const Navbar = () => {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Price</li>
    </ul>
  )
}

// React.Children.map | React.cloneElement
const ReactChildrenProps = (props) => {
  return (
    <div style={{ "border": "1px solid green", "display" : "flex", "gap" : "20px" }}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {
            style:
            {
              "fontSize": "50px",
              "border": "1px solid green"
            }
          })
        })
      }
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <ReactChildrenProps>

        <h1>salam</h1>
        <h1>salam</h1>

      </ReactChildrenProps>
      <DynamicGreating>
        <h2>This is weel was hard DynamicGreating</h2>
        <Navbar />
      </DynamicGreating>

      <DynamicGreatingSecond>
        <h2>This is weel was hard DynamicGreatingSecond</h2>
        <Navbar />
      </DynamicGreatingSecond>

      <DynamicGreatingThird>
        <h2>This is weel was hard DynamicGreatingThird</h2>
        <Navbar />
      </DynamicGreatingThird>


    </div>
  )
}

export default App
