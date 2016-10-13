import React from 'react';

export default class extends React.Component{
	render(){
		return(
			<div className="mdl-card mdl-shadow--4dp card" draggable="true">
				<div className="cards-wrap">
					<span className="mdl-card__supporting-text card-details">{this.props.title}</span>
					<span className="mdl-card__supporting-text card-details">{this.props.desc}</span>
					<span className="mdl-card__supporting-text card-details">{this.props.date}</span>
					<span className="mdl-card__supporting-text card-details">{this.props.version}</span>
					<span className="mdl-card__supporting-text card-details">{this.props.priority}</span>
				</div>
				{/*<div className="image"><img className="user-img" src={this.props.image}/></div>*/}
			</div>
			);
	}
}
