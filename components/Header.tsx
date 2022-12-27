import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
        <button className="connectButton">Connect Wallet</button>
      </div>
    </>
  );
}
