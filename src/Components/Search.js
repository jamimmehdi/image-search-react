import React from 'react'

export default function Search() {
    return (
        <div className="input-container display-flex">
            <div className='input-wrapper display-flex'>
                <div className='search-icon'><i className="bi bi-search"></i></div>
                <input className='search-input' type={"text"} placeholder={"Search..."}></input>
            </div>
        </div>
    )
}
