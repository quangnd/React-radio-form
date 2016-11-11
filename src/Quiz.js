import React from 'react'
import Question from './Question'

const Quiz = ({questions, isLastStep, onSubmit, onNext, onOptionChange}) => {
    return (
        <form onSubmit={onSubmit}>
            {questions.map(question => (
                   <Question key={question.id} question={question} onChange={onOptionChange} />
                ))
            }
            <div style={{ paddingTop: 10 }}>
                {isLastStep
                    ? <button className="btn btn-default" type="submit">Save</button>
                    : <button className="btn btn-primary" onClick={onNext}>Next</button>
                }
            </div>
        </form>
    )
}

Quiz.propTypes = {
    questions: React.PropTypes.array.isRequired,
    isLastStep: React.PropTypes.bool.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onNext: React.PropTypes.func.isRequired,
    onOptionChange: React.PropTypes.func.isRequired
}

export default Quiz;