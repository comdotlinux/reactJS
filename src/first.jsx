var FirstComponent = React.createClass({
	render: function () {
		return <div > < h1 > {
			this.props.now
		} < /h1></div > ;
	}
});

ReactDOM.render( < FirstComponent now = {
			(new Date()).toString()
		}
		/>, $('#headerOne'));
