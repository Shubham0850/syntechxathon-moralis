import React from 'react';

export default function HeaderNftCard(props) {
  return <div className='nftcard'>
      <div className='nftcard__img-box'>
          <img src={props.imgSrc} alt="nft"/>
      </div>

      <div className='nftcard__details'>
          <span>
              <p className='p'>Current bid</p>
              <p className='p'><b>0.99 ETH</b></p>
          </span>

          <span>
              <p className='p'>Ends in</p>
              <p className='p'><b>25 HRS</b></p>
          </span>

          <button className='btns'>
              Start Bid
          </button>
      </div>
  </div>;
}
