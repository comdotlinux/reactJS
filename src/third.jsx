var AjaxComponent = React.createClass({
	getInitialState:function(){
		return {}
	},
	componentDidMount:function(){
		var self = this;
		$.get(
			'https://api.github.com/users/' + this.props.login,
			function(data){
				self.setState(data);
			}
		);
	},
	render: function(){
		return <div>
			<img src={this.state.avatar_url} width="80" />
			<h3>{this.state.name}</h3>
			<h4>{this.state.login}</h4>
			<h4>{this.state.repos_url}</h4>
		</div>
	}
});

var FormComponent = React.createCalss({
	render:function(){
		return (
			<form onSubmit="{this.handleEvent}">
				<input type="text" placeholder="Github login" ref="login"></input>
				<button>Submit</button>
			</form>
		);
	},
	handleEvent:function(e){
		
		e.preventDefault();
		var loginInput = React.findDOMNode("login");
		this.props.addAjaxComponent(loginInput.value);
		loginInput.value = '';
	}
});

//var MainComponent = React.createC
//ReactDOM.render(<Ajax)