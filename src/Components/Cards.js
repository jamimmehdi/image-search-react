import React from 'react'

export default function Cards(props) {
    return (
        <div className='card-container'>
            <div className='image'>
                <img src={props.imageURL} />
            </div>
            <div className='details'>
                <div className='contributor-details'>
                    <div className='contributor-image'>
                        <img src={props.contributorImageURL} />
                    </div>
                    <p>{props.contributorName}</p>
                </div>
                <div className='others-details'>
                    <div className='likes'>
                        <i class="bi bi-heart-fill"></i>
                        <span>{props.totalLikes}</span>
                    </div>
                    <div className='views'>
                        <i class="bi bi-eye-fill"></i>
                        <span>{props.totalViews}</span>
                    </div>
                    <div className='download'>
                        <i class="bi bi-cloud-arrow-down"></i>
                        <a href={props.downloadLink} target={"_blank"}>
                            <span>Download</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
