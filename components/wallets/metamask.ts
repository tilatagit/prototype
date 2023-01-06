import {ethers} from "ethers"
import { useState } from "react";



async function connectMetaMask(setAccount: any, setProvider: any){
    if(typeof window.ethereum !== 'undefined'){
        const mm: any =  window.ethereum
    const provider = new ethers.providers.Web3Provider(mm)
        const accounts = await provider.send("eth_requestAccounts", []);
        setProvider(provider),
        setAccount(accounts)
    }
    }
export {connectMetaMask}
