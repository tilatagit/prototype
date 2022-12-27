import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import { useState } from "react";
import nFormatter from "../components/utils/nFormater";
import SoulsSoulsList from "../components/SoulsSoulsList";
import soulsExample from "../components/example";
import { ISoul } from "../models";
import ListFooter from "../components/ListFooter";



export default function Souls() {
  const [totalUsers, setTotalUsers] = useState(15500000);
  const [pageCount, setPageCount] = useState(1);

  function nextPage() {
    if (pageCount <= Math.floor(soulsExample.length / 10))
      setPageCount(pageCount + 1);
  }
  function prevPage() {
    if (pageCount > 1) setPageCount(pageCount - 1);
  }

  return (
    <MainContainer>
      <div className="souls-page-header">
        <div className="souls-counter">
          <h1>Souls</h1>
          <p>Total users: {nFormatter(totalUsers)}</p>
        </div>

        <div className="buttons-container">
            <button className="invite">Invite</button>
            <p>Sort by</p>
            <div className="selectors">
            <select name="Score" id="Score"><option value={0}>Score</option>
              <option value="Increase">Increase</option>
              <option value="Decrease">Decrease</option></select>
            <select name="Metrics" id="Metrics">
              <option value="1">Metrics</option>
              <option value="2"></option></select>
              </div>
              <div className="filter-buttons">
            <button id="apply">Apply filter</button>
            <button id="clear">Clear filter</button>
            </div>
        </div>
      </div>
      <div className="souls-souls-list">
        <SoulsSoulsList soulsList={soulsExample} page={pageCount} />
      </div>
        <ListFooter page={pageCount}
              numOfSouls={soulsExample.length - 1}
              nextPage={nextPage}
              prevPage={prevPage}/>
              
    </MainContainer>
  );
}
