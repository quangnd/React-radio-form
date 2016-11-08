import React, { Component } from 'react';
import '../lib/bootstrap/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import QuizPage from './QuizPage';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Questions</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">

              <QuizPage questions={this.props.questions}/>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
