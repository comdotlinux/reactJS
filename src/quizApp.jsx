(function(){
	'use strict';
	
	var AjaxComponent = React.createClass({
	getInitialState:function(){
		return {}
	},
	componentDidMount:function(){
		var self = this;
		$.get(
			this.props.url + this.props.otherParam,
			function(data){
				self.setState(data);
			}
		);
	},
	render: function(){
		return <div>
			<img src={this.state.thumbnailUrl} width="80" />
			<h3>{this.state.title}</h3>
			<h4>{this.state.albumId}</h4>
		</div>
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
			return (
						<div className="row">
							<div className="col-mod-4">
								
							</div>
						</div>
					);
		}
	});
	
	var MainComponent = React.createClass({
	getInitialState:function(){
		return {logins:[]}
	},
	changeValue:function(login){
		window.setInterval(function(){
			this.setState({logins:this.state.logins.concat(login)});
		}.bind(this),2000);
		
	},
	render:function(){
		var githubProfiles = this.state.logins.map(function(login){
			return (<AjaxComponent login={login} key={login} id={login}/>);
		});
		
		return (
			<div>
				<FormComponent addAjaxComponent={this.changeValue}/>
				<hr/>
				{githubProfiles}
			</div>
		);
	},
	mixins:[Highlight]
});
})();