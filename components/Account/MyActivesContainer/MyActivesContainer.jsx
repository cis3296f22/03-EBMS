import React from 'react'
import styles from './MyActivesContainer.module.css'


const MyActivesContainer = () => {
    return (
    <div className={styles.activesContainer}>
        <div className={styles.activesHeader}>
            <div className={styles.activesHeaderLeft}>
                <p>left</p>
            </div>
            <div className={styles.activesHeaderRight}>
                <p>right</p>
            </div>
        </div>
        <div className={styles.activesBody}>
            <p>test</p>
        </div>
    </div>
    
    )
}

export default MyActivesContainer;
