var Timer = React.createClass({
	render: function () {
		return React.createElement('div', { style: { display: 'none' } });
	},
	componentDidMount: function () {
		setInterval(this.props.callOnInterval, this.props.waitInterval);
	}
});

ReactDOM.render(React.createElement(Timer, { callOnInterval: function () {
		console.log(new Date());
	}, interval: 10000 }), document.getElementById('reactAjaxExamplePlaceholder'));