import React, { Component } from 'react';
import '../lib/bootstrap/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import subjectJson from './data/subjects.json';
import hobbyJson from './data/hobbies.json';
import QuizContainer from './QuizContainer';
import StartInformationContainer from './StartInformationContainer';

class App extends Component {
  constructor() {
    super();
    this.state ={
      isQuizWaked: false
    }

    this.handleWakeQuizUp = this.handleWakeQuizUp.bind(this);
  }

  handleWakeQuizUp(event) {
    event.preventDefault();

    this.setState({
      isQuizWaked: true
    })
  }

  render() {
    const isQuizWaked = this.state.isQuizWaked;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mun</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
                             
             {isQuizWaked
               ? <QuizContainer questions={this.props.questions} />
               : <StartInformationContainer subjects={subjectJson.list}
                                            hobbies={hobbyJson.list} 
                                            wakeQuizUp={this.handleWakeQuizUp}/>
             }
              
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
