import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer.ts';
import './App.css';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer.tsx';
import LoginPage from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer.tsx'));

const ProfileContainerWithSuspense = withSuspense(ProfileContainer);
const DialogsContainerWithSuspense = withSuspense(DialogsContainer);

class App extends React.Component {
  catchAllUnhandledErrors(promiseRejectionEvent) {
    alert(`ERROR\ntype: ${promiseRejectionEvent.type}, reason: ${promiseRejectionEvent.reason}`);
  }
  
  componentDidMount() {
    const {initializeApp} = this.props;
    initializeApp();

    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  
  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    
    // return <HashRouter> - for deploy on Github Pages
    // return <BrowserRouter basename={process.env.PUBLIC_URL}> - for localhost
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className='app-wrapper'>
          <HeaderContainer />
          <SidebarContainer />
          <div className='app-wrapper-content'>
            <Routes>            
              <Route exact path='/' element={<Navigate to={'/profile'} />} />            
              <Route path='/profile/:userID?' element={<ProfileContainerWithSuspense />} />            
              <Route path='/dialogs/*' element={<DialogsContainerWithSuspense />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<UsersContainer /> } />
              <Route path='/login' element={<LoginPage /> } />    
              <Route path='*' element={<div>404 NOT FOUND</div> } />    
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