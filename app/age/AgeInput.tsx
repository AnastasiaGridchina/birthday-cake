import React from 'react';

type AgeInputProps = {
    age: number;
    setAge: (age: number) => void;
    isSoundDetected: boolean;
}

export const AgeInput: React.FC<AgeInputProps> = ({age, setAge, isSoundDetected}) => {


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (!isNaN(value) && value >= 0 && value <= 122) {
            setAge(value);
        }
    };

    return (
        <div className="mt-[5%] text-center space-y-4">
            <p>Enter age</p>
            <p className="text-lg">And make a wish</p>
            <input
                type="number"
                value={age === 0 ? "" : age}
                onChange={handleInputChange}
                min="0"
                max="122"
                className="w-full sm:w-52 px-3 py-2 border rounded"/>
            <div>
                {age > 0 ? (
                    (<p>Blow out the candles below:</p>)) : null}
                {isSoundDetected ? (
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">🎉 Happy Birthday! 🎉</h1>
                            <p className="text-lg">Your wish has been made!</p>
                        </div>
                    )
                    : null
                }
            </div>
        </div>
    )

}
