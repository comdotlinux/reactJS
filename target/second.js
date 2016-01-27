(function () {

	var Quiz = React.createClass({
		propTypes: {
			movies: React.PropTypes.array.isRequired
		},
		render: function () {
			return React.createElement(
				'div',
				null,
				' ',
				this.props.movies.map(function (movie) {
					return React.createElement(Movie, { name: movie
					});
				}),
				' '
			);
		}
	});

	var Movie = React.createClass({
		propTypes: {
			movies: React.PropTypes.string.isRequired
		},
		render: function () {
			return React.createElement(
				'div',
				null,
				' ',
				React.createElement(
					'h4',
					null,
					' ',
					this.props.name,
					' '
				)
			);
		}
	});

	ReactDOM.render(React.createElement(Quiz, { movies: ['Dilwale', 'Star Wars', 'Mafia'] }), document.getElementById('headerTwo'));
})();