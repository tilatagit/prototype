import {ethers} from "ethers"
import { useState } from "react";



async function connectMetaMask(setAccount, setProvider){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);
        setProvider(provider),
        setAccount(accounts)
        
    }
export {connectMetaMask}
