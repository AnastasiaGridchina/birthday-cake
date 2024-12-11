"use client";

import styles from './Candle.module.css';

import React from "react";


export const CandleComponent = () => {
    const [isBlownOut, setIsBlownOut] = React.useState(false);


    const blowOutCandle = () => {
        setIsBlownOut((prevState) => !prevState);
    }


    return (
        <div className={styles.candle}>
            <div className={styles.stick}></div>
            <div className={`${styles.flame} ${isBlownOut ? styles.hidden : ""}`}/>
            <button onClick={blowOutCandle} className={styles.blowButton}>
                Blow Out
            </button>
        </div>
    )

}