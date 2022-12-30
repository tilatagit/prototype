import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import Modal from "./wallets/Modal";
import { soulsExample } from "./example";
import AppContext from "./AppContexst";

interface IHeader {
  setAccount: Function;
  setProvider: Function;
  account: string[];
}

export default function Header({ setAccount, setProvider }: IHeader) {
  const context = useContext(AppContext)
  const [modalActive, setModalActive] = useState(false);
  const accountInfo = (address: string) => {
    const acc = soulsExample.find(
      (soul) => soul.address.toLocaleLowerCase() === address.toLocaleLowerCase()
    );
    if (acc) {
      return (
        <div className="connectedButton">
          <Image className="avatar" src={acc.img} alt="" width={35} height={32} />
          <div className="connected-info">
            <p id="connected-name">{acc.name}</p>
            <p id="connected-address">
              {acc.address.slice(0, 6) +
                "..." +
                acc.address.slice(acc.address.length - 5)}
            </p>
          </div>
        </div>
      );
    } else {
      return <div className="connectedButton no-account" ><p id="connected-address">{address.slice(0, 6) +
        "..." +address.slice(address.length - 5)}</p></div>;
    }
  };

  return (
    <>
      <div className="header">
        <form action="/send-data-here" method="post">
          <input
            type="text"
            id="search"
            name="search"
            className="search"
            placeholder="Search..."
          />
        </form>
        {!context.account ? (
          <button
            className="connectButton"
            onClick={() => setModalActive(true)}
          >
            Connect Wallet
          </button>
        ) : (
          <div >{accountInfo(context.account[0])}</div>
        )}
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
      />
    </>
  );
}
