import React from 'react'
import RadioOption from './common/RadioOption'
import RadioGroup from './common/RadioGroup'

const Question = ({question, onChange}) => {
    return (
        <div key={question.id}>
            <div className="statement">
                <h2> {question.title}</h2>
            </div>
            <RadioGroup name={question.name} key={question.id}>
                {question.choices.map(choice => {
                    return <RadioOption key={choice.value} label={choice.text} value={choice.value} onChange={onChange} />
                })}
            </RadioGroup>
        </div>
    )
}

Question.propTypes = {
    question: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired
}

export default Question;