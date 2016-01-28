(function () {

	var Quiz = React.createClass({
		propTypes: {
			movies: React.PropTypes.array.isRequired
		},
		getInitialState: function () {
			return { answer: 'Star Wars Episode VI' };
		},
		render: function () {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'span',
					null,
					'Deafult Movie :: ',
					this.state.answer
				),
				' ',
				this.props.movies.map(function (movie) {
					return React.createElement(Movie, { name: movie, key: movie, id: movie });
				})
			);
		}
	});

	var Movie = React.createClass({
		propTypes: {
			movie: React.PropTypes.string.isRequired
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

	ReactDOM.render(React.createElement(Quiz, { movies: ['Dilwale', 'Star Wars', 'Mafia'] }), document.getElementById('quizPlaceholder'));
})();