import React from 'react'

export default function Banner(props) {
  return (
    <div className='banner-container display-flex'>
        <img src={props.bannerLink}></img>
        <div className='banner-text-container display-flex flex-column'>
            <h2 className='banner-text'>{props.bannerText}</h2>
            <h4 className='banner-sub-text'>{props.bannerSubText}</h4>
        </div>
    </div>
  )
}
