import React from 'react'

function GoodsHeader(props){
    return(
        <tr>
            <th>{props.GoodsCategory}</th>
        </tr>
    )
}

export default GoodsHeader