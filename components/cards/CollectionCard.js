import React, { useState, useEffect } from "react";
import Router from "next/router";
import { FaEthereum } from "react-icons/fa";

export default function CollectionCard({
  listings,
  nftItem,
  title,
  collectionId,
}) {
  const [isListed, setIsListed] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const listing = listings.find((listing) => listing.asset.id === nftItem.id);
    if (Boolean(listing)) {
      setIsListed(true);
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
    }
  }, [listings, nftItem]);

  console.log(nftItem, "nft item");

  return (
    <div>
      <div className="nftcard1">
        <div className="nftcard1__nft">
          <img src={nftItem.image} />
        </div>
        <div className="nftcard1__price">
          <h3 className="h3">{`${title} ${nftItem.name}`}</h3>

          {isListed ? (
            <div className="nftcard1__btn">
              <p className="p">
                {price} <FaEthereum />
              </p>
              <button
                onClick={() => {
                  Router.push({
                    pathname: `/nft/${collectionId}`,
                    query: { isListed: isListed, itemId: nftItem.id },
                  });
                }}
                className="btns"
              >
                Buy Now
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                Router.push({
                  pathname: `/nft/${nftItem.id}`,
                  query: { isListed: isListed },
                });
              }}
              className="btns"
            >
              View
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
