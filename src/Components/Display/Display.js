import React from 'react';
import styles from './Display.module.css';

const Display = (props) => { 

        return ( 
            <div className={styles.CounterDisplay}> 
            {props.counter} 
            </div>
            
        )

}


export default Display;