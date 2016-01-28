(function () {

	var Quiz = React.createClass({
		propTypes: {
			movies: React.PropTypes.array.isRequired
		},
		getInitialState:function(){
			return {answer:'Star Wars Episode VI'}	
		},
		render: function () {
			return <div><span>Deafult Movie :: {this.state.answer}</span> {
				this.props.movies.map(function (movie) {
					return <Movie name = {movie}/>
				})
			}</div>;
		}
	});

	var Movie = React.createClass({
		propTypes: {
			movies: React.PropTypes.string.isRequired
		},
		render: function () {
			return <div> <h4> {
				this.props.name
			} </h4></div>
		}
	});
		
	ReactDOM.render(<Quiz movies={['Dilwale','Star Wars','Mafia']}/>,document.getElementById('headerTwo'));
								  
})();
