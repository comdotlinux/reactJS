(function(){
	'use strict';

	var Movie = React.createClass({
		propTypes: {
			title: React.PropTypes.string.isRequired
		},
		handleClick:function(){
			this.props.onMovieSelected(this.props.title);	
		},
		render: function () {
			return <div onClick={this.handleClick} className="answer"><h4>{this.props.title}</h4></div>;
		}
	});
	
	var Quiz = React.createClass({
		propTypes:{
			data:React.PropTypes.array.isRequired
		},
		getInitialState:function(){
				return _.extend({
					bgClass:'neutral',
					showContinue:false
			});
		},
		render:function(){
			return (<div>
						<div className="row">
							<div className="col-md-4">
								<img src={this.state.imageUrl} className="imageUrl col-md-3"/>
							</div>
							<div className="col-md-7">
								{this.state.movies.map(function(movie){
									return <Movie onMovieSelected={this.handleMovieSelected} key={movie} id={movie}/>
								},this)}
							</div>
							<div className={"col-md-1" + this.state.bgClass}></div>
							{this.state.showContinue ? 
								(
									<div className="row">
										<div className="col-md-12">
											<input onClick={this.handleContinue} type="button" value="Continue"/>
										</div>
									</div>
								)
								: <span/>
							}
							<div clasName="row">
									<div className="col-md-12">
										<input onClick={this.handleAddMovie} id="addMovieButton" type="button" value="AddMovie" className="btn"/>
									</div>
							</div>
						</div>
					</div>
					);
		},
		handleMovieSelected:function(title){
			var isCorrect = this.state.CheckAnswer=(title);
			this.setState({
				bgClass:isCorrect?'pass':'fail',
				showContinue:isCorrect
			});
		},
		handleContinue:function(){
			this.setState(this.getInitialState());
		},
		handleAddMovie:function(){
			routie('add');
		}
	});
			
var AddMovieForm = React.createClass({
        propTypes: {
            onMovieFormSubmitted: React.PropTypes.func.isRequired
        },
        handleSubmit: function () {
            this.props.onMovieFormSubmitted(getRefs(this));
            return false;
        },
        render: function () {
            return <div>
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Add Movie Form</h1>
                                <form role="form" onSubmit={this.handleSubmit}>
                                  <div class="form-group">
                                    <input ref="imageUrl" type="text" class="form-control" placeholder="Image Url" />
                                  </div>
                                  <div class="form-group">
                                    <input ref="answer1" type="text" class="form-control" placeholder="Answer 1" />
                                  </div>
                                  <div class="form-group">
                                    <input ref="answer2" type="text" class="form-control" placeholder="Answer 2" />
                                  </div>
                                  <div class="form-group">
                                    <input ref="answer3" type="text" class="form-control" placeholder="Answer 3" />
                                  </div>
                                  <div class="form-group">
                                    <input ref="answer4" type="text" class="form-control" placeholder="Answer 4" />
                                  </div>
                                  <button type="submit" class="btn btn-default">Submit</button>
                                </form>
                            </div>                            
                        </div> 
                    </div>;
        }
    });

    var data = [
        {
            name: 'Brad Pitt', 
            imageUrl: 'https://image.tmdb.org/t/p/w92/kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg',
            movies: ['Inglourious Basterds','World War Z','Fight Club']
        },
        {
            name: 'Brad Bird',
            imageUrl: 'https://image.tmdb.org/t/p/w92/2XwJyYs6XNLaQuC1O2gbEHT3jxx.jpg',
            movies: ['Mission: Impossible - Ghost Protocol','The Incredibles','Ratatouille']
        },
        {
            name: 'Brad Peyton',
            imageUrl: 'https://image.tmdb.org/t/p/w92/vahID4tRrJqTt5ZSsMD8DFvVo1W.jpg',            
            movies: ['Journey 2: The Mysterious Island','San Andreas','Cats and Dogs: The Revenge of Kitty Galore']
        },
        {
            name: 'Brad Leland',
            imageUrl: 'https://image.tmdb.org/t/p/w92/gIXb73WT2fyoCChUyJgjcThqaA1.jpg',            
            movies: ['Inside Man','The Ringer','The Return']
        },
        {
            name: 'Brad Bemis',
            imageUrl: 'https://image.tmdb.org/t/p/w92/Aq5RgnkiDUkXyp4HWckPOBxaUcJ.jpg',
            movies: ['Monsters, Inc.', 'The Diary of Preston Plummer', 'Viva Lucha Libre']
        }
    ];

    var selectMovie = function () {
        var movies = _.shuffle(this.reduce(function (p, c, i) {
            return p.concat(c.movies);
        }, [])).slice(0,4);

        var answer = movies[_.random(movies.length-1)];

        return {
            movies: movies,
            actor: _.find(this, function (actor) {
                return actor.movies.some(function (title) {
                    return title === answer;
                });
            }),
            checkAnswer: function (title) {
                return this.actor.movies.some(function (t) {
                    return t === title;
                });
            }
        };
    };

    data.selectMovie = selectMovie;

    routie({
        'add': function() {
            ReactDOM.render(<AddMovieForm onMovieFormSubmitted={handleAddFormSubmitted} />, 
                document.getElementById('quizPlaceholder'));
        },
        '': function() {
            ReactDOM.render(<Quiz data={data} />, document.getElementById('quizPlaceholder'));
        }
    });

    function handleAddFormSubmitted(data) {
        var quizData = [{
            imageUrl: data.imageUrl,
            movies: [data.answer1, data.answer2, data.answer3, data.answer4]
        }];
        quizData.selectMovie = selectMovie;
        React.renderComponent(<Quiz data={quizData} />, 
                document.getElementById('app'));
    }

    function getRefs(component) {
        var result = {};
        Object.keys(component.refs).forEach(function(refName) {
            result[refName] = component.refs[refName].getDOMNode().value;
        });
        return result;
    }
})();