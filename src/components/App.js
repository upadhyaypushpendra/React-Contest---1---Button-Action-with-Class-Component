import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={displayPara:false};
	};
	handleClick(){
		this.setState({displayPara:true});
	};
    render() {	
		let that = this;
    	return(
    		<div id="main">
				<button id="click" onClick={that.handleClick} >Click</button>
				{ this.state.displayPara ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : undefined}
    		</div>
    	);
    };
}


export default App;

