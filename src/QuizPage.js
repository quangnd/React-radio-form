import React from 'react'
import RadioOption from './common/RadioOption'
import RadioGroup from './common/RadioGroup'
import Results from './Results'

class QuizPage extends React.Component {
    constructor() {
        super();
        this.state = {
            formValues: [],
            result: [],
            resultText: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }


    handleOptionChange(event) {
        const questionId = event.target.name.slice(-1);

        let questionChoosed = {
            id: questionId,
            name: event.target.name,
            value: event.target.value
        };
        let formValues = this.state.formValues;

        //check if question.id existed then replace
        let existed = false;
        formValues.forEach(ques => {
            if (ques.id === questionId) {
                ques.value = event.target.value;
                existed = true;
            }
        })

        if (!existed) formValues.push(questionChoosed);

        this.setState({
            formValues,
            question: questionChoosed
        })

        console.log(`Name ${event.target.name} with value = ${event.target.value}`);

    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        this.setState({
            result: this.state.formValues
        })
    }

    render() {
        const questions = this.props.questions

        if (this.state.result.length > 0) {
            return  <Results results={this.state.result}/>
        }
        
        return (
            <form onSubmit={this.handleFormSubmit}>
                    {questions.map(ques => (
                                 <div key={ques.id}>
                                    <div className="statement">
                                        <h2> {ques.title}</h2>
                                    </div>
                                    <RadioGroup name={ques.name} key={ques.id}>
                                        {ques.choices.map( choice => {
                                            return <RadioOption  key={choice.value} label={choice.text} value={choice.value} onChange={this.handleOptionChange}/>
                                        })}              
                                    </RadioGroup>
                                </div>
                            )
                        )
                    }

                <button className="btn btn-default" type="submit">Save</button>
            </form>

           
        )
    }
}

export default QuizPage;