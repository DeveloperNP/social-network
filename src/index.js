import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ALL DATA FOR THE APP
let posts = [
  { id: 1, message: 'Forza Milan!!!', likesCount: 1899 },
  { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 508 },
  { id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!', likesCount: 287 },
  { id: 4, message: 'The weather is fine today', likesCount: 35 },
  { id: 5, message: 'How are you?', likesCount: 58 },
  { id: 6, message: 'Hello, World! This is my first post ^.^', likesCount: 104 }
];

let dialogs = [
  { id: 1, name: 'Nickolai' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Kristina' },
  { id: 4, name: 'Lyonya' },
  { id: 5, name: 'Irina' },
  { id: 6, name: 'Tania' },
  { id: 7, name: 'Julia' },
  { id: 8, name: 'Diana' },
  { id: 9, name: 'Henry' }
];

let messages = [
  { id: 1, message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste maiores error? Suscipit quo, maiores dolores quidem odit ducimus nulla voluptas atque.' },
  { id: 2, message: 'Hi, how are you?' },
  { id: 3, message: 'I\'m bored :c' },
  { id: 4, message: 'The weather is cloudy today' },
  { id: 5, message: 'Let\'s play together!!!' },
  { id: 6, message: 'Good luck to everyone :)' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
