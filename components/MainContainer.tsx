import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Head from "next/head";

export default function MainContainer({children, activePage}: any){
    return(
        <>
            <Head>
            <title>Tilata</title>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"/>
        </Head>
            <Sidebar activePage={activePage}/>
            <Header />
            <div className="main-content">
                {children}
            </div>
        </>
    )
}