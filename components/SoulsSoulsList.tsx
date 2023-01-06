import { ISoul } from "../models";
import Image from "next/image";

interface ISSlistProps {
  soulsList: ISoul[];
  page: number;
}

export default function SoulsSoulsList({ soulsList, page }: ISSlistProps) {
  const pageList = soulsList.slice( (page - 1) * 10, 10 + (page - 1) * 10);
  const list = pageList.map((soul, i) => {
    return (
      <div className="souls-souls-row" key={i}>
        <div className="souls-col-1 soul-info">
          <Image src={soul.img} alt="" width={50} height={46} />
          <div className="name-addr">
            <div>{soul.name}</div>
            <div className="address">
              {soul.address.slice(0, 6) +
                "..." +
                soul.address.slice(soul.address.length - 5)}
            </div>
          </div>
        </div>
        <div className="souls-col-2">
          {soul.cases ? soul.cases.toLocaleString() : 0}
        </div>
        <div className="souls-col-3">
          {soul.positive ? soul.positive.toLocaleString() : 0}
        </div>
        <div className="souls-col-4">{soul.negative}</div>
        <div className="souls-col-6" id="upvote">{"+" + soul.upvotes}</div>
        <div className="souls-col-6" id="downvote">{"-" + soul.downvotes}</div>
        <div className="souls-col-7">
          <button className="view-button">upvote</button>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="souls-list-head">
        <div className="souls-col-1" id="soul-name">
          Name
        </div>
        <div className="souls-col-2">Cases</div>
        <div className="souls-col-3">Positive</div>
        <div className="souls-col-4">Negative</div>
        <div className="souls-col-5">Upvotes</div>
        <div className="souls-col-6">Downvotes</div>
        <div className="souls-col-7">
          <div></div>
        </div>
      </div>
      {list}
    </>
  );
}
