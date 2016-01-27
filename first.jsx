var FirstComponent = React.createClass({
	render:function(){
		return <div>
			<h1>{this.props.now}</h1>
		</div>;
	}
});

React.renderComponent(<FirstComponent now={new Date()}></FirstComponent>,document.body);
