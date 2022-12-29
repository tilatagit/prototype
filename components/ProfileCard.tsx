import { ISoulProfile } from "../models";
import Image from "next/image";
import nFormater from "./utils/nFormater"

interface IProfileCardProps {
  profile: ISoulProfile;
}

export default function ProfileCard({
  profile,
}: IProfileCardProps) {
  return (
    <div className="jurisdiction-card">
      <div className="jurisdiction-main-info">
        <div className="left-side-box">
          <Image className="card-avatar" src={profile.soul.img} alt="" width={189} height={189} />
          <div className="jurisdiction-description">
            <h1>{profile.soul.name}</h1>
            <p>{profile.description && profile.description}</p>
            <div className="profile-links">
                
                    {profile.links?.facebook && <button id="facebook"></button>}
                    {profile.links?.facebook && <button id="linkedin"></button>}
                    {profile.links?.facebook && <button id="twitter"></button>}
                    {profile.links?.facebook && <button id="github"></button>}
                
            </div>
            <button id="profile-join">Follow</button>
          </div>
        </div>
        <div className="address-box">
          <p>
            {profile.soul.address.slice(0, 6) +
              "..." +
              profile.soul.address.slice(profile.soul.address.length - 5)}
          </p>
          <button className="copy"></button>
          <button className="link-to-scan"></button>
        </div>
      </div>
      <div className="jurisdiction-metrics">
        <div className="jurisdiction-main-metrics">
        <div className="jurisdictions-metrics-columns">
            <h2>Cases</h2>
            <p>{profile.soul.cases ? nFormater(profile.soul.cases) : 0}</p>
        </div>
        <div className="jurisdictions-metrics-columns">
            <h2>Pending</h2>
            <p>{profile.soul.pending ? nFormater(profile.soul.pending) : 0}</p>
        </div>
        <div className="jurisdictions-metrics-columns">
            <h2>Positive</h2>
            <p>{profile.soul.positive ? nFormater(profile.soul.positive) : 0}</p>
        </div>
        <div className="jurisdictions-metrics-columns">
            <h2>Negative</h2>
            <p>{profile.soul.negative ? nFormater(profile.soul.negative) : 0}</p>
        </div>
        <div className="jurisdictions-metrics-columns">
            <h2>Denied</h2>
            <p>{profile.soul.denied ? nFormater(profile.soul.denied) : 0}</p>
        </div>
      </div>
      <div className="jurisdictions-votes">
      <div className="jurisdictions-metrics-columns">
            <h2>Upvotes</h2>
            <p id="upvote">{ profile.soul.upvotes ? "+" + nFormater(profile.soul.upvotes) : 0}</p>
        </div>
        <div className="jurisdictions-metrics-columns">
            <h2>Downvotes</h2>
            <p id="downvote">{profile.soul.downvotes ? "-" + nFormater(profile.soul.downvotes) : 0}</p>
        </div>
      </div></div>
    </div>
  );
}
