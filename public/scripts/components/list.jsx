import React from 'react';
import Card from './card.jsx'
export default class extends React.Component{
constructor(props){
	super(props);

}

render(){
	
		var val=this.props.details;
		

	return(
		<div className="list">
	<h3>{this.props.name}</h3>
	
	{val.map(todo => (<Card title={todo.title} desc={todo.desc} image={todo.image}
						date={todo.date} version={todo.version} priority={todo.priority}/> ))}
	</div>
	)
}
}