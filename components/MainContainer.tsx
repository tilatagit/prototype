import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainContainer({children, activePage}: any){
    return(
        <>
            <Sidebar activePage={activePage}/>
            <Header />
            <div className="main-content">
                {children}
            </div>
        </>
    )
}