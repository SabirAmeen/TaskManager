import React from 'react';
import Card from './card.jsx';
import IScroll from 'iscroll';
export default class extends React.Component{
constructor(props){
	super(props);
	this.node = undefined;
}
allowDrop(e){
	e.preventDefault();
}
drop(e){
	e.preventDefault();
	var item = e.dataTransfer.getData("content");
	e.target.appendChild(document.getElementById(item));
}
componentDidMount(){
		this.iscroll = new IScroll(this.node, {
		mouseWheel: true,
		scrollbars: false,
		disableMouse: true
		})
		// this.node.addEventListener("ondragover",function(ev){
		// 	ev.preventDefault();
		// })
		// this.node.addEventListener("ondrop",function(ev){
		// 	ev.preventDefault();
		// 	var data = ev.dataTransfer.getData("text");
		// 	ev.target.appendChild(document.getElementById(data));
		// })
}
componentWillUnmount() {
	this.iscroll.destroy();
}

render(){
	var val=this.props.details;
	return(
		<div className="list">
	<h3>{this.props.name}</h3>
	<div className="card-list" id="drag-card" ref={node => this.node = node} onDragOver={this.allowDrop} onDrop={this.drop.bind(this)}>
	<div className="scroll">
	{val.map((todo,key) => (<Card title={todo.title} desc={todo.desc} image={todo.image}
						date={todo.date} version={todo.version} priority={todo.priority} key={key}/> ))}
	<div className="drop"></div>
	</div>
	</div>
	</div>
	)
}
}
