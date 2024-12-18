import React from 'react';

type AgeInputProps = {
    age: number;
    setAge: (age: number) => void;
    isSoundDetected: boolean;
}

export const AgeInput: React.FC<AgeInputProps> = ({age, setAge, isSoundDetected}) => {

    return (
        <div className="input">
            <p>Enter your age</p>
            <input
                type="number"
                value={age === 0 ? "" : age}
                onChange={(e) => {
                    const value = Number(e.target.value);
                    if (!isNaN(value) && value >= 0) {
                        setAge(value);
                    }
                }}/>
            <div>
                {isSoundDetected ? (<h1 className="title">Happy Birthday!</h1>)
                    :
                    (<p>Blow out the candles below:</p>)}
            </div>
        </div>
    )

}
