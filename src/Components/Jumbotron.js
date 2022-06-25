import React, { useState } from 'react'
import Categories from './Categories'

export default function Jumbotron(props) {
    return (
        <div className='jumbotron-container'>
            <Categories
                all={"All"}
                flowers={"Flowers"}
                nature={"Nature"}
                abstract={"Abstract"}
                cars={"Cars"}
                foods={"Foods"}
                travels={"Travels"}
                animals={"Animals"}
                currentCategory={props.currentCategory}
            />
        </div>
    )
}
