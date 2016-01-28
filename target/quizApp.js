(function () {
	'use strict';

	var AjaxComponent = React.createClass({
		getInitialState: function () {
			return {};
		},
		componentDidMount: function () {
			var self = this;
			$.get(this.props.url + this.props.otherParam, function (data) {
				self.setState(data);
			});
		},
		render: function () {
			return React.createElement(
				'div',
				null,
				React.createElement('img', { src: this.state.thumbnailUrl, width: '80' }),
				React.createElement(
					'h3',
					null,
					this.state.title
				),
				React.createElement(
					'h4',
					null,
					this.state.albumId
				)
			);
		}
	});

	var Quiz = React.createClass({
		propTypes: {
			data: React.PropTypes.array.isRequired
		},
		getInitialState: function () {
			return _.extend({
				bgClass: 'neutral',
				showContinue: false
			});
		},
		render: function () {
			return React.createElement(
				'div',
				{ className: 'row' },
				React.createElement('div', { className: 'col-mod-4' })
			);
		}
	});

	var MainComponent = React.createClass({
		getInitialState: function () {
			return { logins: [] };
		},
		changeValue: function (login) {
			window.setInterval(function () {
				this.setState({ logins: this.state.logins.concat(login) });
			}.bind(this), 2000);
		},
		render: function () {
			var githubProfiles = this.state.logins.map(function (login) {
				return React.createElement(AjaxComponent, { login: login, key: login, id: login });
			});

			return React.createElement(
				'div',
				null,
				React.createElement(FormComponent, { addAjaxComponent: this.changeValue }),
				React.createElement('hr', null),
				githubProfiles
			);
		},
		mixins: [Highlight]
	});
})();