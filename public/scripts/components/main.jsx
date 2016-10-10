import React from 'react';
import List from './list.jsx';
import $ from 'jquery';
export default class extends React.Component{
	render(){
		return(
			<div className="tasks">
				<List  name="todo" />
				<List  name="inprogress" />
				<List  name="QA-failed" />
				<List  name="QA-completed" />
				<List  name="accepted" />
				<List  name="closed" />
			</div>
		);
	}
}