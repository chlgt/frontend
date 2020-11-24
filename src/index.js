 
import React from 'react';
import ReactDOM from 'react-dom';

import data from './testData2.json';
//console.log(data);

import App from './components/App';


ReactDOM.render(
  // <App envios={[]} />,
  <App/>,
  document.getElementById('root')
);

/**ReactDOM.render(
  <App envios={data.envios} />,
  document.getElementById('root')
);*/