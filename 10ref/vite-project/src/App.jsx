import React from 'react';
import { Container } from 'react-bootstrap';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.btnRef = React.createRef();
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
    this.btnRef.current.value = "Salam"
  }

 

  componentDidUpdate() {
    console.log(this.myRef.current.value);
  }

  getChange = e => {
    this.setState(({ value: e.target.value }))
  }

  render() {
    return (
      <div className="App">
        <Container>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                ref={this.myRef}
                value={this.state.value}
                type="email"
                onChange={this.getChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button ref={this.btnRef} type="submit" className="btn btn-primary">Submit</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Container>
      </div>
    )
  }
}

function App() {

  return (
    <Form />
  )
}

export default App
