import Image from "next/image";
import React from "react";

export default function NftCard(props) {
  return (
    <div>
      <div className="nftcard1">
        <div className="nftcard1__profile">
          <div className="nftcard1__profile-pic">
            <Image
              src="/placeholder.png"
              alt="profile image"
              width={40}
              height={40}
            />
          </div>
          <div className="nftcard1__profile-name">
            <p className="p">Sea Monster</p>
            <p className="p">@polychainmonsters</p>
          </div>
        </div>
        <div className="nftcard1__nft">
          <img src={props.nftUrl} />
        </div>
        <div className="nftcard1__price">
          <div className="nft-price">
            <span>0.23 ETH</span>
            
          </div>
          <div className="">
            <button className="btns">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
