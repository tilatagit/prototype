import {connectMetaMask} from "./connection"
interface IModalProps {
    active: boolean;
    setActive: Function;
    setProvider: Function;
    setAccount: Function;
}
export default function Modal({active, setActive, setProvider, setAccount}: IModalProps){

 return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <p>Connect a Wallet</p>
                <button onClick={() => setActive(false)}></button>
            </div>
            <div className="modal-wallets">
                <div className="modal-wallet metamask" onClick={() => {connectMetaMask(setAccount, setProvider); setActive(false)}}>
                    <p>MetaMask </p>
                    <div id="popular">Popular</div>
                </div>
                <div className="modal-wallet wallet-connect">
                    <p>WalletConnect</p>
                </div>
                <div className="modal-wallet trust-wallet">
                    <p>TrustWallet</p>
                </div>
            </div>
        </div>
    </div>
    )
}