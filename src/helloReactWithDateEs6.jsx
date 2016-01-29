/*
var FirstComponent = React.createClass({
	render: function () {
		return <div><h1>{this.props.now}</h1></div>;
	}
});

ReactDOM.render(
	<FirstComponent now = {
			(new Date()).toString()}/>,
	document.getElementById('helloReactWithDatePlaceholder'));
*/
"use strict";
class FirstEs6 extends React.Component{
	render(){
		return (
			<div>
				<h1>Hello World from {this.props.name} at {this.props.now}</h1>			
			</div>
		);
	}
}

ReactDOM.render(<FirstEs6 name='Guru' now={(new Date()).toString()}/>, document.getElementById('helloReactEs6WithDatePlaceholder'));