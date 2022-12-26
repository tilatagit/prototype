import left from "../images/arrowLeft.png"
import right from "../images/arrowRight.png"
import Image from "next/image";

export default function ListFooter({ page, numOfSouls, nextPage, prevPage }) {
  function getListInfo(numOfSouls, page) {
    if(page <= Math.floor(numOfSouls/10)){
         return `${(page - 1) * 10 + 1} - ${(page - 1) * 10 + 10} of ${numOfSouls}`;
    }
    if((page > Math.floor(numOfSouls/10)) && (numOfSouls % 10 !== 0)){
        return `${(page - 1) * 10 + 1} - ${(page - 1) * 10 + numOfSouls % 10} of ${numOfSouls}`;
    }
  }
  return (
    <>
      <div className="footer">
        <div>Results: {getListInfo(numOfSouls, page)}</div> 
        <div className="page-nav">
            <button onClick={prevPage}><Image src={left} alt="" width={20} height={10} /> </button>
            <div>Page {page} of {numOfSouls % 10 ? Math.floor(numOfSouls/10) + 1 : Math.floor(numOfSouls/10)}</div>
            <button onClick={nextPage}><Image src={right} alt="" width={20} height={10} /> </button>
        </div>
      </div>
    </>
  );
}
