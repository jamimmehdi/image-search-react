import React from 'react'

export default function Banner({bannerLink, bannerText, bannerSubText}) {
  return (
    <div className='banner-container display-flex'>
        <img src={bannerLink}></img>
        <div className='banner-text-container display-flex flex-column'>
            <h2 className='banner-text'>{bannerText}</h2>
            <h4 className='banner-sub-text'>{bannerSubText}</h4>
        </div>
    </div>
  )
}
