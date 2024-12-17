"use client";

import styles from './Candle.module.css';

import React, {useEffect} from "react";

type CandleComponentProps = {
    left: number;
    top: number;
    out: number;
    key: number;
}

export const CandleComponent: React.FC<CandleComponentProps> = ({left, top, out, key}) => {
    const [isBlownOut, setIsBlownOut] = React.useState(false);

    const startListening = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({audio: true});
            const audioContext = new AudioContext();
            const analyser = audioContext.createAnalyser();
            const source = audioContext.createMediaStreamSource(stream);

            source.connect(analyser);

            const dataArray = new Uint8Array(analyser.frequencyBinCount);

            function detectBlow() {
                analyser.getByteFrequencyData(dataArray);
                const volume =
                    dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

                if (volume > 30) {
                    // Trigger candle blowing out
                    setIsBlownOut(true);
                }
            }

            // Check for blowing sound at intervals
            setInterval(detectBlow, 100);
        } catch (err) {
            console.error("Error accessing microphone:", err);
        }
    };

    useEffect(() => {
        startListening();
    }, []);


    return (
        <div className={styles.candle} key={key}>
            <div className={styles.stick}></div>
            <div className={`${styles.flame} ${isBlownOut ? styles.hidden : ""}`}/>
        </div>
    )

}