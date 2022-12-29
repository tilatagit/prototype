import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainContainer({children, activePage}: any){
    const [provider, setProvider] = useState({});
    const [account, setAccount] = useState();
    console.log(provider, account)
    return(
        <>
            <Sidebar activePage={activePage}/>
            <Header setAccount={setAccount} setProvider={setProvider} account={account}/>
            <div className="main-content">
                {children}
            </div>
        </>
    )
}