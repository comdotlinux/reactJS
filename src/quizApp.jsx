(function(){
	'use strict';
	
	var Quiz = React.createClass({
	/*	propTypes:{
			data:React.PropTypes.array.isRequired
		},*/
		getInitialState:function(){
			var jsonData = null;
			$.ajax('http://api.themoviedb.org/3/movie/top_rated' + '?api_key=0ff2bf4e13f7e8d1bb6369b33ccd96ea',
				  '',
				   'GET',
				   false,
				   function(xhr){
										xhr.setRequestHeader('Accept', 'application/json');
										xhr.setRequestHeader('Access-Control-Allow-Origin');
								},
				   function(data){jsonData = data;}
				 );
			return jsonData;
		/*	return _.extend({
				bgClass:'neutral',
				showContinue:false
			});*/
		},
		render:function(){
			return (<div>{this.state}</div>);
		}
	});
	
	ReactDOM.render(<Quiz/>, document.getElementById('quizPlaceholder'));
})();