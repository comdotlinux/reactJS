var ReactDOM = require('react-dom');
var React = require('react');

var FirstComponent = React.createClass({
	render:function(){
		return <div>
			<h1>{this.props.now}</h1>
		</div>;
	}
});

ReactDOM.render(<FirstComponent now={new Date()}/>,document.body);
