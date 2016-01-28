var FirstComponent = React.createClass({
	render: function () {
		return React.createElement(
			'div',
			null,
			' ',
			React.createElement(
				'h1',
				null,
				' ',
				this.props.now,
				' '
			)
		);
	}
});

ReactDOM.render(React.createElement(FirstComponent, { now: new Date().toString()
}), $('#headerOne'));