import React, { Component } from 'react';
import './App.css';
import Background from './img/background.jpg';
import {Cards} from './Components/Cards';

var background = {
	width: "100%",
	height: "100%",
	backgroundImage: "url("+ Background +")",
	backgroundPosition: "top",
	backgroundAttachment: "fixed",
	backgroundColor:"grey"
};

class App extends Component {
  render() {
    return (
      <div className="App">
	  <section style={background}>
	<br/>
	<h1 className="App-title">Feels Like Home</h1>

<div className="container">
  <div className="row">
		<div className="col-sm-12">
		<Cards/><br/>
		</div>
  </div>
</div>
	</section>
      </div>
    );
  }
}

export default App;
