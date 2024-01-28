import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
  componentDidMount() {
    const {initializeApp} = this.props;
    initializeApp();
  }
  
  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <SidebarContainer />
          <div className='app-wrapper-content'>
            <Routes>            
              <Route path='/profile/:userID?' element={<ProfileContainer />} />            
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<UsersContainer /> } />
              <Route path='/login' element={<LoginPage /> } />    
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);