import React from 'react'
import Results from './Results'
import Quiz from './Quiz'

class QuizContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            formValues: [],
            result: [],
            questions: [],
            perOnPage: 3,
            currentStep: 1,
            totalStep: 0,
            isLastStep: false
        }
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    componentWillMount() {
         const questionsInit = this.props.questions;
         const perOnPage = this.state.perOnPage;
         this.setState({
             questions: questionsInit.slice(0, perOnPage),
             currentStep: 1,
             totalStep: questionsInit.length / perOnPage
         })

         console.log(this.props.userInfoData);
    }

    handleNextClick(event) {
        event.preventDefault();

        let currentQuestions = this.props.questions.slice(this.state.perOnPage, this.state.perOnPage * 2);
        let currentStep = this.state.currentStep;
        currentStep++;
        const isLastStep = currentStep === this.state.totalStep ? true : false;

        this.setState({
            questions: currentQuestions,
            isLastStep,
            currentStep
        })
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
        let questions = this.state.questions;
        let isLastStep = this.state.isLastStep;
      
        if (this.state.result.length > 0) {
            return  <Results results={this.state.result}/>
        }
        
        return (
            <Quiz questions={questions}
                  isLastStep={isLastStep}
                  onSubmit={this.handleFormSubmit}
                  onNext={this.handleNextClick}
                  onOptionChange={this.handleOptionChange}/>    
        )
    }
}

export default QuizContainer;