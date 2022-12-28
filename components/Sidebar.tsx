import Image from "next/image";
import Link from "next/link";
import logo from "../images/tilata-icon.png";
import icon1 from "../images/Icon1.png";
import icon2 from "../images/Icon2.png";
import icon3 from "../images/Icon3.png";
import icon4 from "../images/Icon4.png";
import icon5 from "../images/Icon5.png";
import icon6 from "../images/Icon6.png";

interface ISidebarProps {
  activePage: string;
}

export default function Sidebar({activePage}: ISidebarProps) {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <Image className="icon" src={logo} alt="" width={34} height={35} />
          Tilata
        </div>
        <button className="createCaseButton">Create Case</button>
        <div className="navigation">
          <Link href="/" className="navLinks" id={activePage === 'dashboard' ? 'active-page' : ""}>
            <Image className="icon" src={icon1} alt="" width={16} height={16} />
            Dashboard
          </Link>

          <Link href="/jurisdictions" className="navLinks">
            {" "}
            <Image className="icon" src={icon2} alt="" width={16} height={16} />
            Jurisdictions
          </Link>

          <Link href="/modules" className="navLinks">
            <Image className="icon" src={icon3} alt="" width={16} height={16} />
            Modules
          </Link>

          <Link href="/souls" className="navLinks">
            <Image className="icon" src={icon4} alt="" width={16} height={16} />
            Souls
          </Link>

          <Link href="" className="navLinks">
            <Image className="icon" src={icon5} alt="" width={16} height={16} />
            Profile
          </Link>
        </div>
      </div>
    </>
  );
}
