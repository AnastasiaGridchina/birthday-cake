import React from "react";
import styles from "./Cake.module.scss"
import {CandleComponent} from "@/app/candle/CandleComponent";
import {AgeInput} from "@/app/age/AgeInput";

const CakeComponent = () => {
    const numberOfCandles = 1;

    const candlesArray: number[] = Array.from({length: 10}, (_, index) => index);
    return (
        <div className={styles.cake}>
            <div className={styles.plate}></div>
            <div className={styles.layer + " " + styles.layerTop}></div>
            <div className={styles.layer + " " + styles.layerMiddle}></div>
            <div className={styles.layer + " " + styles.layerBottom}></div>
            <div className={styles.icing}></div>
            <div className={styles.drip + " " + styles.drip1}></div>
            <div className={styles.drip + " " + styles.drip2}></div>
            <div className={styles.drip + " " + styles.drip3}></div>
            <div className={styles.candleHolder}>
                {candlesArray.map((index) => <CandleComponent key={index}/>)}
            </div>
        </div>
    );
};

export default CakeComponent;

//input component
