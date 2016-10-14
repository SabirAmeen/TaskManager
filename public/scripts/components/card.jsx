import React from 'react';

export default class extends React.Component{
	drag(e){
		e.dataTransfer.setData("content",e.target.id);
	}	
		render(){
		return(
			<div className="mdl-card mdl-card--border mdl-shadow--4dp card" ref={node => this.node = node} id={this.props.title} draggable="true" onDragStart={this.drag}>
				<div className="cards-wrap" >
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
