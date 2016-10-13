import React from 'react';
import Card from './card.jsx'
export default class extends React.Component{
constructor(props){
	super(props);

}
componentDidUpdate(){
	var scroller = this.refs.scroll;
	var myScroll = new IScroll('.list', {
    mouseWheel: true,
    scrollbars: true
});

}
render(){
	
		var val=this.props.details;


	return(
		<div className="list">
	<h3>{this.props.name}</h3>
	<div className="card-list" refs="scroll">
	{val.map((todo,key) => (<Card title={todo.title} desc={todo.desc} image={todo.image}
						date={todo.date} version={todo.version} priority={todo.priority} key={key}/> ))}
	<div className="drop"></div>
	</div>
	</div>
	)
}
}
