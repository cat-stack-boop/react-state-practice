import React from 'react';
import styles from './Button.module.css'; 



const Button = ({text,handleClick}) => { 
    return ( 
        <button onClick={handleClick} className={styles.But}>
            {text}
        </button>
    );
}


export default Button;

/*const Button = (props) => { 
            return ( 
                <button onClick={props.handleClick} className={styles.But}>
                    {props.text}
                </button>
            );
        }
        refactoring. 
*/
