import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login/Login';
import './App.css'
import { UserStorage } from './UserContext';
import User from './components/User/User';
import ProtectedRouter from './components/Help/ProtectedRouter';

const App = () => {
  return <div>
    
    <BrowserRouter>
    <UserStorage>
      

        <Header/>

          <Routes>
            <Route path='/login/*' element={<Login/>}/>
            <Route path='/conta/*' element={
            <ProtectedRouter>
              <User/>
            </ProtectedRouter>}/>
          </Routes>

        <Footer/>

      
    </UserStorage>
    </BrowserRouter>
    
    </div>;
};

export default App;
