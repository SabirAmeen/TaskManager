import React from 'react';
import List from './list.jsx';
import $ from 'jquery';
export default class extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		this.setState({data:[], loading: true})
}
componentDidMount(){
	this.setState({loading: true});
	$.ajax({
      url: "http://localhost:8085/data/details.json",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data, loading: false});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("http://localhost:8085/data/details.json", status, err.toString());
      }.bind(this)
    });

}
	render(){
		if (this.state.loading) {
			return <div>Loading...</div>;
		}
		return(
			<div className="tasks">
				<List  name="todo" details={this.state.data.todo} />
				<List  name="inprogress" details={this.state.data.inprogress} />
				<List  name="QA-failed" details={this.state.data.qaready} />
				<List  name="QA-completed" details={this.state.data.qafailed} />
				<List  name="accepted"  details={this.state.data.accepted}/>
				<List  name="closed" details={this.state.data.closed} />
			</div>
		);
	}
}