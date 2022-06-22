import { Component, useState, useEffect, useMemo } from 'react'
import './App.css'

// class Slider extends Component {
//   state = {
//     slide: 0
//   }


//   click = () => {
//     console.log('click');
//   }

//   componentDidMount() {
//     document.title = this.state.slide;
//     window.addEventListener('click', this.click);

//   }

//   componentWillUnmount() {
//       window.removeEventListener('click', this.click)
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.slide !== this.state.slide) {
//       document.title = this.state.slide;
//       console.log('sa');

//     }
//   }

//   changeSlide = (i) => {
//     this.setState(({ slide }) => ({ slide: slide + i }))

//   }

//   render() {
//     return (
//       <>
//         <div>
//           <h1>Number: {this.state.slide}</h1>
//           <button onClick={() => this.changeSlide(1)}>+</button>
//           <button onClick={() => this.changeSlide(-1)}>-</button>
//         </div>
//       </>
//     )
//   }
// }

// class App extends Component {

//   state = {
//     auto: true
//   }

//   changeAuto = () => {
//     this.setState(({ auto }) => ({ auto: !auto }))
//   }

//   render() {
//     return (
//       <div className="App" >
//         <button onClick={this.changeAuto}>Show</button>
//         {this.state.auto ? <Slider /> : null}
//       </div>
//     )
//   }
// }


// function Slider() {
//   const [slide, setSlide] = useState(0);

//   const click = () => {
//     console.log('click');
//   }
//   useEffect(() => {
//     document.title = slide;

//     window.addEventListener('click', click)
//     return () => {
//       window.removeEventListener('click', click);
//     }


//   }, [slide])


//   const changeSlide = (i) => {
//     setSlide(slide => i + slide);
//   }


//   return (

//     <>
//       <div>
//         <h1>Number: {slide}</h1>
//         <button onClick={() => changeSlide(1)}>+</button>
//         <button onClick={() => changeSlide(-1)}>-</button> <br /><br />
//       </div>
//     </>
//   )
// }


// function App() {
//   const [auto, setAuto] = useState(true);

//   const changeAuto = () => {
//     setAuto(auto => !auto)
//   }

//   return (
//     <div className="App">
//       <button onClick={changeAuto}>Show</button>
//       {auto ? <Slider /> : null}
//     </div>
//   )
// }



function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const changeCount = (i) => {
    setCount(count => count + i);

  }

  // const rend = () => {
  //   [...new Array(10000000)].forEach((item) => { })

  //   return count * 2;
  // }

  // const dublicateCount = rend();


  const dublicateCount = useMemo(() => {
    [...new Array(10000000)].forEach((item) => { })

    return count * 2;
  }, [count])

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => changeCount(1)}>Plus</button>
      <p>{dublicateCount}</p>
      <hr />
      <input onChange={(e) => setText(e.target.value)} type="text" />
    </div>
  )
}

export default App
