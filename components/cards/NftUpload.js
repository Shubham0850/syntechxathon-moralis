import React from "react";

export default function NftUpload() {
  return (
    <div>
      <div className="nft-card nft-card--upload">
        <div className="nft-card--header"></div>

        <div className="nft-card--content">
          <div className="nft-description">
            <i className="fas fa-plus-square"></i>
            <h3>
              Upload <span>Drag & Drop</span>
            </h3>
            <input
              type="button"
              className="btn btn--secondary"
              value="Browse Device"
            />
          </div>
        </div>

        <div className="nft-card--footer"></div>
      </div>

    </div>
  );
}
