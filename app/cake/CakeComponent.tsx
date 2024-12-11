import React from "react";
import styles from "./Cake.module.css"
import {CandleComponent} from "@/app/candle/CandleComponent";

const CakeComponent = () => {
    const numberOfCandles = 1;

    const candlesArray: number[] = Array.from({length: numberOfCandles}, (_, index) => index);
     
    return (
        <div className={styles.cake}>
            <div className={styles.cakeBase}>
                <div className={styles.candle}>
                    {candlesArray.map((index) => <CandleComponent key={index}/>)}
                </div>
            </div>
        </div>
    );
};

export default CakeComponent;
