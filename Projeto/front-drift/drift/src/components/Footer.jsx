import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Drift} from '../Assets/logo-menor.svg';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <Drift/>
            <p>Drifters. Alguns direitos reservados</p>
        </footer>
    )

}

export default Footer