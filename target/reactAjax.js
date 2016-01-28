var AjaxComponent = React.createClass({
	getInitialState: function () {
		return {};
	},
	componentDidMount: function () {
		var self = this;
		$.get('https://api.github.com/users/' + this.props.login, function (data) {
			self.setState(data);
		});
	},
	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement("img", { src: this.state.avatar_url, width: "80" }),
			React.createElement(
				"h3",
				null,
				this.state.name
			),
			React.createElement(
				"h4",
				null,
				this.state.login
			),
			React.createElement(
				"h4",
				null,
				this.state.repos_url
			)
		);
	}
});

var FormComponent = React.createClass({
	render: function () {
		return React.createElement(
			"form",
			{ onSubmit: this.handleEvent },
			React.createElement("input", { type: "text", placeholder: "Github login", ref: "login" }),
			React.createElement(
				"button",
				null,
				"Submit"
			)
		);
	},
	handleEvent: function (e) {

		e.preventDefault();
		var loginInput = React.findDOMNode(this.refs.login);
		this.props.addAjaxComponent(loginInput.value);
		loginInput.value = '';
	}
});

var MainComponent = React.createClass({
	getInitialState: function () {
		return { logins: [] };
	},
	changeValue: function (login) {
		this.setState({ logins: this.state.logins.concat(login) });
	},
	render: function () {
		var githubProfiles = this.state.logins.map(function (login) {
			return React.createElement(AjaxComponent, { login: login });
		});

		return React.createElement(
			"div",
			null,
			React.createElement(FormComponent, { addAjaxComponent: this.changeValue }),
			React.createElement("hr", null),
			githubProfiles
		);
	}
});

ReactDOM.render(React.createElement(MainComponent, null), document.getElementById('headerThree'));