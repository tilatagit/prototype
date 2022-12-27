import Head from "next/head";
import Image from "next/image";
import { Inter, Montserrat } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import icon7 from "../images/Icon7.png";
import React, { useState } from "react";
import DashboardSoulsList from "../components/DashboardSoulsList";
import soulsExample from "../components/example";
import ListFooter from "../components/ListFooter";
import MainContainer from "../components/MainContainer";

export default function Home() {
  const [activityCount, setActivityCount] = useState(40000);
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
        <div className="dashboardInfo">
          Active Communities
          <div className="cummunitiesCounter">
            <Image src={icon7} alt="" width={26} height={21} />
            <p>{activityCount.toLocaleString()}</p>
          </div>
        </div>

        <div className="listHeader">
          <div className="searchBlock">
            DeSocs
            <form action="" id="">
              <input type="text" placeholder="Search..." />
            </form>
          </div>
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
        <div className="soulsList">
          <DashboardSoulsList
            soulsList={soulsExample}
            key="soulsList"
            page={pageCount}
          />
          <ListFooter
            page={pageCount}
            numOfSouls={soulsExample.length - 1}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
    </MainContainer>
  );
}
