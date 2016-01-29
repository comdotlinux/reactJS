(function () {
    'use strict';

    var Movie = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired
        },
        handleClick: function () {
            this.props.onMovieSelected(this.props.title);
        },
        render: function () {
            return React.createElement(
                'div',
                { onClick: this.handleClick, className: 'answer' },
                React.createElement(
                    'h4',
                    null,
                    this.props.title
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
            }, this.props.data.selectMovie());
        },
        render: function () {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-md-4' },
                        React.createElement('img', { src: this.state.actor.imageUrl, className: 'imageUrl col-md-3' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-7' },
                        this.state.movies.map(function (movie) {
                            return React.createElement(Movie, { onMovieSelected: this.handleMovieSelected, key: movie, id: movie, title: movie });
                        }, this)
                    ),
                    React.createElement('div', { className: "col-md-1" + this.state.bgClass }),
                    this.state.showContinue ? React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-md-12' },
                            React.createElement('input', { onClick: this.handleContinue, type: 'button', value: 'Continue' })
                        )
                    ) : React.createElement('span', null),
                    React.createElement(
                        'div',
                        { clasName: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-md-12' },
                            React.createElement('input', { onClick: this.handleAddMovie, id: 'addMovieButton', type: 'button', value: 'AddMovie', className: 'btn' })
                        )
                    )
                )
            );
        },
        handleMovieSelected: function (title) {
            var isCorrect = this.state.CheckAnswer = title;
            this.setState({
                bgClass: isCorrect ? 'pass' : 'fail',
                showContinue: isCorrect
            });
        },
        handleContinue: function () {
            this.setState(this.getInitialState());
        },
        handleAddMovie: function () {
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
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-md-12' },
                        React.createElement(
                            'h1',
                            null,
                            'Add Movie Form'
                        ),
                        React.createElement(
                            'form',
                            { role: 'form', onSubmit: this.handleSubmit },
                            React.createElement(
                                'div',
                                { 'class': 'form-group' },
                                React.createElement('input', { ref: 'imageUrl', type: 'text', 'class': 'form-control', placeholder: 'Image Url' })
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'form-group' },
                                React.createElement('input', { ref: 'answer1', type: 'text', 'class': 'form-control', placeholder: 'Answer 1' })
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'form-group' },
                                React.createElement('input', { ref: 'answer2', type: 'text', 'class': 'form-control', placeholder: 'Answer 2' })
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'form-group' },
                                React.createElement('input', { ref: 'answer3', type: 'text', 'class': 'form-control', placeholder: 'Answer 3' })
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'form-group' },
                                React.createElement('input', { ref: 'answer4', type: 'text', 'class': 'form-control', placeholder: 'Answer 4' })
                            ),
                            React.createElement(
                                'button',
                                { type: 'submit', 'class': 'btn btn-default' },
                                'Submit'
                            )
                        )
                    )
                )
            );
        }
    });

    var data = [{
        name: 'Brad Pitt',
        imageUrl: 'https://image.tmdb.org/t/p/w92/kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg',
        movies: ['Inglourious Basterds', 'World War Z', 'Fight Club']
    }, {
        name: 'Brad Bird',
        imageUrl: 'https://image.tmdb.org/t/p/w92/2XwJyYs6XNLaQuC1O2gbEHT3jxx.jpg',
        movies: ['Mission: Impossible - Ghost Protocol', 'The Incredibles', 'Ratatouille']
    }, {
        name: 'Brad Peyton',
        imageUrl: 'https://image.tmdb.org/t/p/w92/vahID4tRrJqTt5ZSsMD8DFvVo1W.jpg',
        movies: ['Journey 2: The Mysterious Island', 'San Andreas', 'Cats and Dogs: The Revenge of Kitty Galore']
    }, {
        name: 'Brad Leland',
        imageUrl: 'https://image.tmdb.org/t/p/w92/gIXb73WT2fyoCChUyJgjcThqaA1.jpg',
        movies: ['Inside Man', 'The Ringer', 'The Return']
    }, {
        name: 'Brad Bemis',
        imageUrl: 'https://image.tmdb.org/t/p/w92/Aq5RgnkiDUkXyp4HWckPOBxaUcJ.jpg',
        movies: ['Monsters, Inc.', 'The Diary of Preston Plummer', 'Viva Lucha Libre']
    }];

    var selectMovie = function () {
        var movies = _.shuffle(this.reduce(function (p, c, i) {
            return p.concat(c.movies);
        }, [])).slice(0, 4);

        var answer = movies[_.random(movies.length - 1)];

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
        'add': function () {
            ReactDOM.render(React.createElement(AddMovieForm, { onMovieFormSubmitted: handleAddFormSubmitted }), document.getElementById('quizPlaceholder'));
        },
        '': function () {
            ReactDOM.render(React.createElement(Quiz, { data: data }), document.getElementById('quizPlaceholder'));
        }
    });

    function handleAddFormSubmitted(data) {
        var quizData = [{
            imageUrl: data.imageUrl,
            movies: [data.answer1, data.answer2, data.answer3, data.answer4]
        }];
        quizData.selectMovie = selectMovie;
        React.renderComponent(React.createElement(Quiz, { data: quizData }), document.getElementById('app'));
    }

    function getRefs(component) {
        var result = {};
        Object.keys(component.refs).forEach(function (refName) {
            result[refName] = component.refs[refName].getDOMNode().value;
        });
        return result;
    }
})();