import React from 'react'
import TableHeader from './TableHeader'
import GoodsHeader from './GoodsHeader'
import GoodsTable from './GoodsTable'

function Table(props){
    return(
        <div>
            <table>
                <TableHeader/>
                <GoodsHeader GoodsCategory="Sporting Goods" />
                <GoodsTable Goods={props.SportingGoods} />
                <GoodsHeader GoodsCategory="Electronics" />
                <GoodsTable Goods={props.Electronics} />
            </table>
        </div>
    )
}

export default Table