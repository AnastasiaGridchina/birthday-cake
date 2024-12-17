"use client";


import React, {useState} from 'react'

import Head from "next/head";
import CakeComponent from "@/app/cake/CakeComponent";
import {AgeInput} from "@/app/age/AgeInput";

export default function Home() {
    const [age, setAge] = useState([]);
    const [elementPositions, setElementPositions] = useState([]);
    const [isBlowing, setIsBlowing] = useState(false);

    return (
        <div className="container">
            <Head>
                <title>Interactive Birthday Card</title>
                <meta name="description" content="Blow out candles on a virtual birthday card!"/>
            </Head>

            <main className="main">
                <AgeInput age={age} setAge={setAge} isBusy={isBlowing}/>

                <CakeComponent/>
            </main>


        </div>
    );
}


//Review project drafts
// import {FaStar, FaStarHalfAlt} from "react-icons/fa";
// import {CiStar} from "react-icons/ci";

{/*<FaStar/>*/
}
{/*<FaStarHalfAlt/>*/
}
{/*<CiStar/>*/
}

