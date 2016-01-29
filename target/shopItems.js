'use strict';

import React from 'React';

export default class ShoppingItem extends React.component {
	constructor(props) {
		super(props);
		this.state = {
			qty: props.initialQty,
			total: 0
		};
	}

	componentWillMount() {
		this.recalculateTotal();
	}

	increment() {
		this.setState({ qty: this.state.qty + 1 }, this.recalculateTotal);
	}

	decrement() {
		let newQuty = this.state.qty > 0 ? this.state.qty - 1 : 0;
		this.setState({ qty: newQty }, this.recalculateTotal);
	}

	recalculateTotal() {
		this.setState({ total: this.state.qty * this.props.price }); //added brackets
	}

	render() {
		return React.createElement(
			'article',
			{ className: 'row large-4' },
			React.createElement(
				'figure',
				{ className: 'text-center' },
				React.createElement(
					'p',
					null,
					React.createElement('img', { src: this.state.image })
				),
				React.createElement(
					'figcaption',
					null,
					React.createElement(
						'h2',
						null,
						this.state.title
					)
				)
			),
			React.createElement(
				'p',
				{ className: 'large-4 column' },
				React.createElement(
					'strong',
					null,
					'Quantity : ',
					this.state.qty
				)
			),
			React.createElement(
				'p',
				{ className: 'large-4 column' },
				React.createElement(
					'button',
					{ onClick: this.increment.bind(this),
						className: 'button success' },
					'Increment'
				),
				React.createElement(
					'button',
					{ onClick: this.decrement.bind(this),
						className: 'button success' },
					'Decrement'
				)
			)
		);
	}
}