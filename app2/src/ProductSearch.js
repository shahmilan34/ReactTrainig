import React, {Component} from 'react';
import Header from './components/Product/Header'
import Table from './components/Product/Table'

class ProductSearch extends Component {

	constructor(props) {
		super(props);
		this.state = {
            Electronics : this.Goods.filter(data => data.category === 'Electronics'),
            SportingGoods : this.Goods.filter(data => data.category === 'Sporting Goods'),
            Search : '',
            stocked :false
        }
    }
    
    onSearch =(e) => {
        // console.log(e.target.value)
        this.setState({
            Search:e.target.value,
            Electronics : this.filter(e.target.value,this.state.stocked,'Electronics'),
            SportingGoods :this.filter(e.target.value,this.state.stocked,'Sporting Goods')
        });
    }

    isChecked = (e) => {

        this.setState({
            stocked : e.target.checked,
            Electronics : this.filter(this.state.Search,e.target.checked,'Electronics'),
            SportingGoods :this.filter(this.state.Search,e.target.checked,'Sporting Goods')
        })
    }

    filter(search,checked,category) {
        return this.Goods.filter(data => data.category === category &&
                data.name.toLowerCase().includes(search.toLowerCase())  &&
                (data.stocked === true || !checked)
        )
    }
    
    Goods = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ];


	render() {
		return (
            <div>
                <Header onSearch={this.onSearch} isChecked={this.isChecked} stocked={this.state.stocked} />
                <br/>
                <Table SportingGoods={this.state.SportingGoods} Electronics={this.state.Electronics} />
            </div>
		)
	}
}

export default ProductSearch