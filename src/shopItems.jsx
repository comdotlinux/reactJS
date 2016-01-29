'use strict';
import React from 'React';

export default class ShoppingItem extends React.component{
	constructor(props){
		super(props);
		this.state={
			qty:props.initialQty,
			total:0
		}
	}
		
	componentWillMount(){
		this.recalculateTotal();
	}
		
	increment(){
		this.setState({qty:this.state.qty+1},this.recalculateTotal);
	}
	
	decrement(){
		let newQuty = this.state.qty > 0 ? this.state.qty-1 : 0;
		this.setState({qty:newQty},this.recalculateTotal);
	}
	
	recalculateTotal(){
		this.setState({total:this.state.qty*this.props.price});//added brackets
	}
	
	render(){
		return (
			<article className='row large-4'>
				<figure className="text-center">
					<p><img src={this.state.image}/></p>
					<figcaption><h2>{this.state.title}</h2></figcaption>
				</figure>
				<p className="large-4 column"><strong>Quantity : {this.state.qty}</strong></p>
				<p className="large-4 column">
					<button onClick={this.increment.bind(this)}
 							className="button success">Increment</button>
					<button onClick={this.decrement.bind(this)}
 							className="button success">Decrement</button>
				</p>
			</article>
		);
	}
}