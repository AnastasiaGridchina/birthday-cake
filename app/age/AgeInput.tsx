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
        <div className="mt-10 text-center space-y-6">
            {isSoundDetected ? (
                <div className="space-y-2 pb-2 pt-12">
                    <h1 className="text-3xl font-extrabold text-white">🎉 Happy Birthday! 🎉</h1>
                </div>
            ) : (
                <div>
                    <div className="pb-2">
                        <p className="text-xl font-medium text-white">Enter Your Age</p>
                        <p className="text-xl font-medium text-white">&</p>
                        <p className="text-lg font-semibold text-white">Make a Wish 🎂</p>
                    </div>
                    <input
                        type="number"
                        value={age === 0 ? "" : age}
                        onChange={handleInputChange}
                        min="0"
                        max="122"
                        className="w-64 sm:w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"/>
                    <div className="mt-4 space-y-4">
                        {age > 0 && <p className="text-white text-base">Blow out the candles below:</p>}
                    </div>
                </div>

            )}


        </div>
    )

}
