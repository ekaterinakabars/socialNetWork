import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './login/login';

const App = () => {

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/dialogs' element={<DialogsContainer />} />

          <Route path='/profile' element={<ProfileContainer />} />

          <Route path='/users' element={< UsersContainer />} />
          <Route path='/login' element={< Login />} />


        </Routes>
      </div>
    </div>

  );
}

export default App;
