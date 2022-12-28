import JurisdictionCard from "../components/JurisdictionCard";
import MainContainer from "../components/MainContainer";
import { jurisdictionExample } from "../components/example";
import { useState } from "react";

export default function Jurisdictions() {
    const isActive = false
    const [menuPage, setMenuPage] = useState("cases")
  return (
    <MainContainer>
      <JurisdictionCard jurisdiction={jurisdictionExample} />
      <div className="jurisdictions-nav-bar">
        <ul>
          <li id={menuPage === 'cases' ? "active-button" : ""} onClick={() => setMenuPage('cases')}>Cases</li>
          <li id={menuPage === 'officians' ? "active-button" : ""} onClick={() => setMenuPage('officians')}>Officians</li>
          <li id={menuPage === 'citizen' ? "active-button" : ""} onClick={() => setMenuPage('citizen')}>Citizen</li>
          <li id={menuPage === 'rules' ? "active-button" : ""} onClick={() => setMenuPage('rules')}>Rules</li>
        </ul>
      </div>
      <div className="listHeader">
          <div className="searchBlock">
            
            <form action="" id="" className="jurisdiction-search">
              <input type="text" placeholder="Search..." />
            </form>
          </div>
          <p className="jurisdiction-sort">Sort by</p>
          <div className="selectorBlock">
            
            <select name="Score" id="Score">
              <option value={0}>Score</option>
              <option value="Increase">Increase</option>
              <option value="Decrease">Decrease</option>
            </select>
            <select name="Metrics" id="Metrics">
              <option value="1">Metrics</option>
              <option value="2"></option>
            </select>
          </div>
          <div className="buttonBlock">
              <button id="apply">Apply filter</button>
              <button id="clear">Clear filter</button>
          </div>
        </div>
    </MainContainer>
  );
}
