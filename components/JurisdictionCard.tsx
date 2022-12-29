import { IJurisdiction } from "../models";
import Image from "next/image";
import nFormater from "./utils/nFormater"

interface IJurisdictionCardProps {
  jurisdiction: IJurisdiction;
}

export default function JurisdictionCard({
  jurisdiction,
}: IJurisdictionCardProps) {
  return (
    <div className="jurisdiction-card">
      <div className="jurisdiction-main-info">
        <div className="left-side-box">
          <Image className="card-avatar" src={jurisdiction.img} alt="" width={189} height={189} />
          <div className="jurisdiction-description">
            <h1>{jurisdiction.name} Jurisdiction</h1>
            <p>{jurisdiction.slogan && jurisdiction.slogan}</p>
            <button>Join</button>
          </div>
        </div>
        <div className="address-box">
          <p>
            {jurisdiction.address.slice(0, 6) +
              "..." +
              jurisdiction.address.slice(jurisdiction.address.length - 5)}
          </p>
          <button className="copy"></button>
          <button className="link-to-scan"></button>
        </div>
      </div>
      <div className="jurisdiction-metrics">
        <div className="jurisdiction-main-metrics">
        <div className="jurisdictions-metrics-columns">
            <h2>Cases</h2>
            <p>{jurisdiction.cases && nFormater(jurisdiction.cases?.length)}</p>
        </div>
        <div className="jurisdictions-metrics-columns">
            <h2>Pending</h2>
            <p>{nFormater(jurisdiction.pending)}</p>
        </div>
        <div className="jurisdictions-metrics-columns">
            <h2>Positive</h2>
            <p>{nFormater(jurisdiction.positive)}</p>
        </div>
        <div className="jurisdictions-metrics-columns">
            <h2>Negative</h2>
            <p>{nFormater(jurisdiction.negative)}</p>
        </div>
        <div className="jurisdictions-metrics-columns">
            <h2>Denied</h2>
            <p>{nFormater(jurisdiction.denied)}</p>
        </div>
      </div>
      <div className="jurisdictions-votes">
      <div className="jurisdictions-metrics-columns">
            <h2>Upvotes</h2>
            <p id="upvote">{"+" + nFormater(jurisdiction.upvotes)}</p>
        </div>
        <div className="jurisdictions-metrics-columns">
            <h2>Downvotes</h2>
            <p id="downvote">{"-" + nFormater(jurisdiction.downvotes)}</p>
        </div>
      </div></div>
    </div>
  );
}
