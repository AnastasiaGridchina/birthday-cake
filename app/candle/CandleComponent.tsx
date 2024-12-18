import styles from './Candle.module.css';

import React from "react";
import {CandlePositions} from "@/app/page";

type CandleComponentProps = {
    elementPositions: CandlePositions[],
    isSoundDetected: boolean;
}

//Todo: remove blown candle
//Todo: start from 0 candles

//Todo:Find middle of the cake

export const CandleComponent: React.FC<CandleComponentProps> = ({elementPositions, isSoundDetected}) => {

    return (
        <>
            {elementPositions.map((position, i) => (
                <div
                    className={styles.candle}
                    style={{
                        position: "absolute",
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                    }}
                    key={i}
                >
                    <div className={styles.stick}></div>
                    <div className={`${styles.flame} ${isSoundDetected ? styles.hidden : ""}`}/>
                </div>
            ))}
        </>
    )

}