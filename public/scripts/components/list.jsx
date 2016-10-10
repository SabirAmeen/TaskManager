import React from 'react';

export default class extends React.Component{
render(){
	return(
		<div className="list">
	<h3>{this.props.name}</h3>
	</div>
	)
}
}