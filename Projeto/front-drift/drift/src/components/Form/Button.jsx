import React from "react";
import styles from './Button.module.css'

const ButtonComponent = ({children,...props}) =>{

    return(

        <button {...props} className={styles.button}>{children}</button>

    )

}

export default ButtonComponent