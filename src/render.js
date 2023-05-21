import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, addMessage, updateNewPostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} />
    </React.StrictMode>
  );
}