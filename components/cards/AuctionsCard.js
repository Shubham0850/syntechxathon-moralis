import React from "react";

export default function AuctionsCard(props) {
  return (
    <div className="auctions-card">
      <div className="auctions-card__nft-box">
        <img src={props.nftUrl} alt="auctions nft" className="nft" />
        <span className="time">{props.auctionTimeLeft}</span>
      </div>

      <div className="auctions-card__details">
        <h3 className="nft-name">{props.nftName}</h3>
        <span className="p creater">
          Created by{" "}
          <a href="#" className="username">
            {props.createrName}
          </a>
        </span>

        <div className="owner-bid-box">
          <p className="p">
            Current bid
            <br />
            <span>{props.currentBid}</span>
          </p>

          <div className="owner-box">
            <div className="owner-pic-box">
              <img
                src={props.ownerPicUrl}
                alt="owner-pic"
                className="owner-pic"
              />
            </div>
            <p className="p">
              Owner <br />
              <a href="#" className="username">
                {props.ownerName}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
