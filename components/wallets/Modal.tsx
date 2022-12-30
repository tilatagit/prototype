import { useContext, useEffect } from "react";
import { useAccount } from "wagmi";
import AppContext from "../AppContexst";
import { connectMetaMask, provider } from "./metamask";
import WalletConnect from "./WalletConnect";
import { Web3Button } from "@web3modal/react";
import { Web3Modal } from "@web3modal/react";
import { useWeb3Modal } from "@web3modal/react";
import { ethers } from "ethers";
import detectEthereumProvider from '@metamask/detect-provider';

interface IModalProps {
  active: boolean;
  setActive: Function;
}
export default function Modal({ active, setActive }: IModalProps) {
  const context = useContext(AppContext);
  const { address, isConnected } = useAccount();
  const { isOpen, open, close } = useWeb3Modal();



  useEffect(() => {
    if (isConnected) {
      context.setAccount([address]);
    }
  }, [isOpen, active]);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <p>Connect a Wallet</p>
          <button onClick={() => setActive(false)}></button>
        </div>
        <div className="modal-wallets">
          <div
            className="modal-wallet metamask"
            onClick={() => {
              connectMetaMask(context.setAccount, context.setProvider);
              setActive(false);
            }}
          >
            <p>MetaMask </p>
            <div id="popular">Popular</div>
          </div>
          <div
            className="modal-wallet wallet-connect"
            onClick={() => {
              setActive(false);
              open();
            }}
          >
            <p>WalletConnect</p>
          </div>
          <div className="modal-wallet trust-wallet">
            <p>TrustWallet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
