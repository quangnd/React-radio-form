import React from 'react'
import RadioOption from './common/RadioOption'
import RadioGroup from './common/RadioGroup'

class QuizPage extends React.Component {
    constructor() {
        super();
        this.state = {
            formValues: [],
            result: {}
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

    handleFormSubmit() {

    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    Test Radio Group Component
                    <RadioGroup name="questionx">
                        <RadioOption label="Warcraft 2" value="wc2" />
                        <RadioOption label="Warcraft 3" value="wc3" />
                        <RadioOption label="Starcraft 1" value="sc1" />
                        <RadioOption label="Starcraft 2" value="sc2" />
                    </RadioGroup>
                </div>
                
                <div className="statement">
                    <h2>1. Did you love me?</h2>
                </div>
                <div className="radio">
                    <label className="radio-inline">
                        <input type="radio"
                            name="question1"
                            value="1"
                            onChange={this.handleOptionChange} />
                        No
                   </label>

                    <label className="radio-inline">
                        <input type="radio"
                            name="question1"
                            value="2"

                            onChange={this.handleOptionChange} />
                        Sometimes
                 </label>

                    <label className="radio-inline">
                        <input type="radio"
                            name="question1"
                            value="3"

                            onChange={this.handleOptionChange} />
                        Always
                   </label>
                </div>

                <div className="statement">
                    <h2>2. Am I Good?</h2>
                </div>
                <div className="radio">
                    <label className="radio-inline">
                        <input type="radio"
                            name="question2"
                            value="1"

                            onChange={this.handleOptionChange} />
                        No
                   </label>

                    <label className="radio-inline">
                        <input type="radio"
                            name="question2"
                            value="2"

                            onChange={this.handleOptionChange} />
                        Enough
                 </label>

                    <label className="radio-inline">
                        <input type="radio"
                            name="question2"
                            value="3"

                            onChange={this.handleOptionChange} />
                        Great
                   </label>
                </div>

                <div className="statement">
                    <h2>3. Can you talk with me all day long?</h2>
                </div>
                <div className="radio">
                    <label className="radio-inline">
                        <input type="radio"
                            name="question3"
                            value="1"

                            onChange={this.handleOptionChange} />
                        No
                   </label>

                    <label className="radio-inline">
                        <input type="radio"
                            name="question3"
                            value="2"

                            onChange={this.handleOptionChange} />
                        Enough
                 </label>

                    <label className="radio-inline">
                        <input type="radio"
                            name="question3"
                            value="3"

                            onChange={this.handleOptionChange} />
                        Great
                   </label>
                </div>

                <button className="btn btn-default" type="submit">Save</button>

            </form>

        )
    }
}

export default QuizPage;