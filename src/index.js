import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import questionsJson from './data/questions.json'

ReactDOM.render(
  <App questions={questionsJson.questions} initPage={"start"}/>,
  document.getElementById('root')
);

