import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../Assets/logo-menor.svg';
import { UserContext } from '../UserContext';

const Header = () => {

    const {date} = React.useContext(UserContext)

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/conta" aria-label='Drifter - Home'>
                    <Logo/>
                </Link>
                {date ? (
                <Link className={styles.login} to="/conta/conta">   
                {date.nome}
                </Link>) : (
                <Link className={styles.login} to="/login">   
                Login / Criar 
                </Link>
                )}
            </nav>
        </header>
    )

}

export default Header