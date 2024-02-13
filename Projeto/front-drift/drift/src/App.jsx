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
import NotFound from './components/NotFound';

const App = () => {
  return <div className='App'>
    
    <BrowserRouter>
    <UserStorage>
      

        <Header/>
          <main className='AppBody'>
            <Routes>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/login/*' element={<Login/>}/>
              <Route path='/conta/*' element={
              <ProtectedRouter>
                <User/>
              </ProtectedRouter>}/>
            </Routes>
          </main>
        <Footer/>

      
    </UserStorage>
    </BrowserRouter>
    
    </div>;
};

export default App;
