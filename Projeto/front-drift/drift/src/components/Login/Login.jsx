import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import styles from './Login.module.css'
import NotFound from '../NotFound';
import LoginPassLost from './LoginPassLost';

const Login = () => {

    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                <Route  path='/' element={<LoginForm/>}/>
                <Route  path='/criar' element={<LoginCreate/>}/>
                <Route  path='/perdeu' element={<LoginPassLost/>}/>
                <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
        </section>
    )

}

export default Login