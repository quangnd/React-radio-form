import React, { PropTypes } from 'react'
import CheckBox from './common/CheckBox'

const StartInformation = ({subjects, hobbies, onWakeQuizUp, onChange}) => {
    return (
        <div>
            <h1> Bạn hãy điền những thông tin sau trước khi thực hiện bài test</h1>
            <hr/>
            <div className="checkBoxGroup">
                <h4>1. Bạn thích môn học nào nhất </h4>
                {subjects.map(subject => (
                    <CheckBox key={subject.id} name={"subject"} value={subject.subjectEng} onChange={onChange} label={subject.subjectVi} />
                ))}
            </div>

             <div className="checkBoxGroup">
                <h4>2. Sở thích của bạn là gì </h4>
                {hobbies.map(hobby => (
                    <CheckBox key={hobby.id} name={"hobby"} value={hobby.hobbyEng} onChange={onChange} label={hobby.hobbyVi} />
                ))}
            </div>

            <button name="startQuiz" onClick={onWakeQuizUp}>Start Quiz</button>
        </div>
    )
}

StartInformation.propTypes = {
    subjects: React.PropTypes.array.isRequired,
    hobbies: React.PropTypes.array.isRequired,
    onWakeQuizUp: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired
}

export default StartInformation