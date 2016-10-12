import React from 'react';

export default class extends React.Component{
	render(){
		return(
			<div className="card">
				<div>{this.props.title}</div>
				<div>{this.props.desc}</div>
				<div>{this.props.image}</div>
				<div>{this.props.date}</div>
				<div>{this.props.version}</div>
				<div>{this.props.priority}</div>
			</div>
			);
	}
}