import React from "react";

export default function NftCollectionCard(props) {
  return (
    <div>
      <div className="nft-card nft-card--category">
        <div className="nft-card--header"></div>

        <div className="nft-card--content">
          <div className="nft-title">
            <h3>
              <span>Category</span>
              <span classNameName="h3">{props.collectionName}</span>
            </h3>
          </div>

          <img src="https://lh3.googleusercontent.com/0uehawLNRzOUSs4qtxX0o5cDenklvm0APLUfJng0kwOu-CCX_hZZI39kf8lbfMKrOB0D0VfXJqKcyMnrUnnBW5s5Gifz6GcCt12j_Q=w1400-k" />
          <img src="https://assets.polkamon.com/images/Unimons_T11C03H01B07G00.jpg" />
          <img src="https://lh3.googleusercontent.com/geTFW9hgPMsAiifYUNutYZTXfREGWJ39PJeCRC3DIFgX874pnCY9Y_gKHKQwUOM_HIbE2Wf5KFqgoPiJmr_mtczCLj9ExGlmQ5ZR" />
          <img src="https://res.cloudinary.com/nftrade/image/upload/w_500,c_scale/v1633826885/evm_56_0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d_10002421270.jpg" />
        </div>
      </div>
    </div>
  );
}
