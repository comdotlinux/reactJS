var Highlight = {
	componentDidUpdate: function () {
		var node = $(this.getDOMNode());
		node.slideUp();
		node.slideDown();
	}
};
var AjaxComponent = React.createClass({
	getInitialState: function () {
		return {};
	},
	componentDidMount: function () {
		var self = this;
		$.get('http://jsonplaceholder.typicode.com/photos/' + this.props.login, function (data) {
			self.setState(data);
		});
	},
	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement("img", { src: this.state.thumbnailUrl, width: "80" }),
			React.createElement(
				"h3",
				null,
				this.state.title
			),
			React.createElement(
				"h4",
				null,
				this.state.albumId
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
		var loginInput = ReactDOM.findDOMNode(this.refs.login);
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
			return React.createElement(AjaxComponent, { login: login, key: login, id: login });
		});

		return React.createElement(
			"div",
			null,
			React.createElement(FormComponent, { addAjaxComponent: this.changeValue }),
			React.createElement("hr", null),
			githubProfiles
		);
	},
	mixins: [Highlight]
});

ReactDOM.render(React.createElement(MainComponent, null), document.getElementById('headerThree'));