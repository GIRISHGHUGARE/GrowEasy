import React from 'react';
import adBanners from '../data/adbanners.json';

function Banner() {
  return (
    <>
      <div className='banner-container'>
        <img className='banner-image' src={`/images/${adBanners[0].image}`} />
        <img className='banner-image' src={`/images/${adBanners[1].image}`} />
      </div>
      <div className='banner-container'>
        <img className='banner-image' src={`/images/${adBanners[2].image}`} />
        <img className='banner-image' src={`/images/${adBanners[3].image}`} />
      </div>
    </>
  );
}

export default Banner;