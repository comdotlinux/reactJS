'use strict';
import React from 'React';
import ShoppingItem from './ShoppingItem';

const order={
	title: 'Sony Xperia Z5',
	image:'http://www.phonesreview.co.uk/wp-content/phoneimages/Sony-Xperia-Z-Ultra-6.4-inch-heavy-specs-and-videos.jpg',
	initialQty:4,
	price:60000
}

ReactDOM.render(
	<ShoppingItem title={order.title}
		initialQty={order.initialQty}
		price={order.price}/>, document.getElementById('es6AppPlaceholder'));