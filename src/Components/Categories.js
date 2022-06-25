import React from 'react'

export default function Categories(props) {


    return (
        <div className='categories-container'>
            <ul className='category'>
                <li
                    className='category-list active'
                    onClick={(e) => props.currentCategory(e)}
                >
                    {props.all}
                </li>
                <li
                    className='category-list'
                    onClick={(e) => props.currentCategory(e)}
                >
                    {props.flowers}
                </li>
                <li
                    className='category-list'
                    onClick={(e) => props.currentCategory(e)}
                >
                    {props.nature}
                </li>
                <li
                    className='category-list'
                    onClick={(e) => props.currentCategory(e)}
                >
                    {props.abstract}
                </li>
                <li
                    className='category-list'
                    onClick={(e) => props.currentCategory(e)}
                >
                    {props.cars}
                </li>
                <li
                    className='category-list'
                    onClick={(e) => props.currentCategory(e)}
                >
                    {props.foods}
                </li>
                <li
                    className='category-list'
                    onClick={(e) => props.currentCategory(e)}
                >
                    {props.travels}
                </li>
                <li
                    className='category-list'
                    onClick={(e) => props.currentCategory(e)}
                >
                    {props.animals}
                </li>
            </ul>
        </div>
    )
}
