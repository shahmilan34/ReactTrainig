import React from 'react'

function GoodsTable(props){
    return(
        <div>
            {props.Goods.map((data)=>
                <tr><td>{data.name}</td><td>{data.price}</td></tr>
            )}
        </div>     
    )
}
export default GoodsTable