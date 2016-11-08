import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const questions = [
  {
    id: '1',
    name: 'question1',
    title: 'Did you love me?',
    choices: [  
      {
        "value": "1",
        "text": "No"
      },
      {
        "value": "2",
        "text": "Sometimes"
      },
      {
        "value": "3",
        "text": "Always"
      }
    ]
  },
  {
    id: '2',
    name: 'question2',
    title: 'Am I good?',
    choices: [  
      {
        "value": "1",
        "text": "No"
      },
      {
        "value": "2",
        "text": "Sometimes"
      },
      {
        "value": "3",
        "text": "Always"
      }
    ]
  },
  {
    id: '3',
    name: 'question3',
    title: 'Can you talk with me all day long?',
    choices: [  
      {
        "value": "1",
        "text": "No"
      },
      {
        "value": "2",
        "text": "Sometimes"
      },
      {
        "value": "3",
        "text": "Always"
      }
    ]
  },
]

ReactDOM.render(
  <App questions={questions}/>,
  document.getElementById('root')
);

