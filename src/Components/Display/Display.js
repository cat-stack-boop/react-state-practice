import React from 'react';
import styles from './Display.module.css';

const Display = ({counter}) => { 

        return ( 
            <div className={styles.CounterDisplay}> 
            {counter} 
            </div>
            
        )

}


export default Display;