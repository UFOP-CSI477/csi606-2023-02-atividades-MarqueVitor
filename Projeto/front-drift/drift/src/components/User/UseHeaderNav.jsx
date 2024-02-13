import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css'
import UserMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
    const {userLogout} = React.useContext(UserContext)
    
    const mobile = UserMedia('(max-width: 50rem')

    const [mobileMenu,setMobileMenu] = React.useState(false)

    const {pathname} = useLocation();

    React.useEffect(()=>{
        setMobileMenu(false)
    },[pathname])

    return(
        <>
        {mobile &&   <button aria-label="Menu" className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}onClick={() => setMobileMenu(!mobileMenu)}></button>}

        <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
            <NavLink to='conta' end>
            <MinhasFotos/> 
            {mobile && 'Minhas fotos'}
            </NavLink>
            <NavLink to='postar'>
                <AdicionarFoto/>
                {mobile && 'Adicionar Foto'}
            </NavLink>
            <button onClick={userLogout}><Sair/> {mobile && 'Sair'}</button>
        </nav>
       </>
    )
}

export default UserHeaderNav