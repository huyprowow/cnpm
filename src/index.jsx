import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const DATA=[{
  id: "item-0",
  name: "ăn",
  completed: true,
 
}, {
  id: "item-1",
  name: "ngủ",
  completed: false,
 
}, {
  id: "item-2",
  name: "chơi game",
  completed: false,
}];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);
