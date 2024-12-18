import React from "react";
import styles from "./Cake.module.scss"
import {CandleComponent} from "@/app/candle/CandleComponent";
import {CandlePositions} from "@/app/page";

type CakeComponentProps = {
    isSoundDetected: boolean,
    elementPositions: CandlePositions[]
}

const CakeComponent: React.FC<CakeComponentProps> = ({isSoundDetected, elementPositions}) => {
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
                <CandleComponent isSoundDetected={isSoundDetected} elementPositions={elementPositions}/>
            </div>
        </div>
    );
};

export default CakeComponent;

