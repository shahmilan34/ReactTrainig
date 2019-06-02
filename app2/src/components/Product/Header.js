import React from 'react'

function Header(props){
    return(
        <div>
            <h1>Product Search</h1>
            <input onChange={props.onSearch} placeholder='search...' />
            <br/>
            <input onChange={props.isChecked} id='stocked' type='checkbox' defaultChecked={props.stocked} />
            <label for='#stocked'>Only show Product in stock</label>
        </div>
    )
}

export default Header