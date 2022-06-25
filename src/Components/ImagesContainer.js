import React from 'react'
import Cards from './Cards'

export default function ImagesContainer(props) {
    return (
        <div className='images-container'>
            <div className='images-wrapper'>
                {props.images.map((image) => {
                    return (
                        <Cards
                            key={image.id}
                            imageURL={image.webformatURL}
                            contributorImageURL={image.userImageURL}
                            contributorName={image.user}
                            totalLikes={image.likes}
                            totalViews={image.views}
                            downloadLink={image.largeImageURL}
                        />
                    )
                })}
            </div>
        </div>
    )
}
