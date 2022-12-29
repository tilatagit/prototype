import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "./wallets/Modal";
import { soulsExample } from "./example";

interface IHeader {
  setAccount: Function;
  setProvider: Function;
  account: string[];
}

export default function Header({ setAccount, setProvider, account }: IHeader) {
  const [modalActive, setModalActive] = useState(false);
  const accountInfo = (address: string) => {
    const acc = soulsExample.find(
      (soul) => soul.address.toLocaleLowerCase() === address
    );
    if (acc) {
      return (
        <div className="connectedButton">
          <Image src={acc.img} alt="" width={35} height={32} />
          <div>
            <p>{acc.name}</p>
            <p>
              {acc.address.slice(0, 6) +
                "..." +
                acc.address.slice(acc.address.length - 5)}
            </p>
          </div>
        </div>
      );
    } else {
      return <div className="connectedButton">{address}</div>;
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
        {!account ? (
          <button
            className="connectButton"
            onClick={() => setModalActive(true)}
          >
            Connect Wallet
          </button>
        ) : (
          <div >{accountInfo(account[0])}</div>
        )}
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        setAccount={setAccount}
        setProvider={setProvider}
      />
    </>
  );
}
