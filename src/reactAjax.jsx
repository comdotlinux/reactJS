var Highlight={
	componentDidUpdate:function(){
		var node = $(this.getDOMNode());
		node.slideUp();
		node.slideDown();
	}
}
var AjaxComponent = React.createClass({
	getInitialState:function(){
		return {}
	},
	componentDidMount:function(){
		var self = this;
		$.get(
			'http://jsonplaceholder.typicode.com/photos/' +this.props.login,
			function(data){
				self.setState(data);
			}
		);
	},
	render: function(){
		return <div>
			<img src={this.state.thumbnailUrl} width="80" />
			<h3>{this.state.title}</h3>
			<h4>{this.state.albumId}</h4>
		</div>
	}
});

var FormComponent = React.createClass({
	render:function(){
		return (
			<form onSubmit={this.handleEvent}>
				<input type="text" placeholder="Github login" ref="login"></input>
				<button>Submit</button>
			</form>
		);
	},
	handleEvent:function(e){
		
		e.preventDefault();
		var loginInput = ReactDOM.findDOMNode(this.refs.login);
		this.props.addAjaxComponent(loginInput.value);
		loginInput.value = '';
	}
});

var MainComponent = React.createClass({
	getInitialState:function(){
		return {logins:[]}
	},
	changeValue:function(login){
		window.setInterval(function(){
			this.setState({logins:this.state.logins.concat(login)});
		}.bind(this),2000);
		
	},
	render:function(){
		var githubProfiles = this.state.logins.map(function(login){
			return (<AjaxComponent login={login} key={login} id={login}/>);
		});
		
		return (
			<div>
				<FormComponent addAjaxComponent={this.changeValue}/>
				<hr/>
				{githubProfiles}
			</div>
		);
	},
	mixins:[Highlight]
});

ReactDOM.render(<MainComponent/>, document.getElementById('reactAjaxPlaceholder'));