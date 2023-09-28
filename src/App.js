import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <SidebarContainer />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersContainer /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;