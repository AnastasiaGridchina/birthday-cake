"use client";

import React from 'react';

type AgeInputProps = {
    age: number;
    setAge: (age: number) => void;
    isBusy: boolean;
}


export const AgeInput: React.FC<AgeInputProps> = ({age, setAge, isBusy}) => {

    return (
        <div className="input">
            <p>Enter your age</p>
            <input
                type="number"
                value={age}
                onChange={e => {
                    setAge(e.target.value);
                }}/>
            <div>
                {isBusy ? (<h1 className="title">Happy Birthday!</h1>)
                    :
                    (<p>Blow out the candles below:</p>)}
            </div>
        </div>
    )

}
