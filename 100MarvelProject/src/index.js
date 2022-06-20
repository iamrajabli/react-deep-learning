import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';

// const MarvelService = new MarvelServices();

// MarvelService.getAllCharacters()
//   .then(data => console.log(data))

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

