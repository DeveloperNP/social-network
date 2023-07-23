import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar sidebarData={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={
              <Profile
                pageData={props.state.profilePage}
                dispatch={props.dispatch}
              />}
            />
            <Route path='/dialogs/*' element={
              <Dialogs
                pageData={props.state.dialogsPage}
                dispatch={props.dispatch}
              />}
            />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;