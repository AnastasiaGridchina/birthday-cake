import React from 'react'
// import {FaStar, FaStarHalfAlt} from "react-icons/fa";
// import {CiStar} from "react-icons/ci";
import Head from "next/head";
import CakeComponent from "@/app/cake/CakeComponent";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Interactive Birthday Card</title>
                <meta name="description" content="Blow out candles on a virtual birthday card!"/>
            </Head>
            {/*<FaStar/>*/}
            {/*<FaStarHalfAlt/>*/}
            {/*<CiStar/>*/}

            <main className="main">
                <h1 className="title">Happy Birthday!</h1>
                <p>Blow out the candles below:</p>
                <CakeComponent/>
            </main>


        </div>
    );
}
