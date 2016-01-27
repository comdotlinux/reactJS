(function () {

	var Quiz = React.createClass({
		propTypes: {
			movies: React.PropTypes.array.isRequired
		},
		render: function () {
			return <div > {
				this.props.movies.map(function (movie) {
					return <Movie name = {
						movie
					}
					/>
				})
			}; < /div>;
		}
	});

	var Movie = React.createClass({
		propTypes: {
			movies: React.PropTypes.string.isRequired
		},
		render: function () {
			return <div > < h4 > {
				this.props.name
			} < /h4></div>
		}
	});
		
	ReactDOM.render(<Quiz movies={
		[
			'Dilwale',
			'Star Wars',
			'Mafia'
		]
	}/>, document.getElementById('headerTwo'));
								  
})();
