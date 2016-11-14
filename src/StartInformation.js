import React, { PropTypes } from 'react'
import CheckBox from './common/CheckBox'

const StartInformation = ({subjects, hobbies, onNextClick, onChange,errorMessage}) => {
    return (
        <div >
            <h1> Bạn hãy điền những thông tin sau trước khi thực hiện bài test</h1>
            <hr/>
            <div style={{width:400}} className="form-inline container">
                 <label htmlFor="age">Nhập tuổi của bạn &nbsp; </label>
                 <input type="text" className="form-control" name="age" id="age" placeholder="Age" onChange={onChange}/>
            </div>
            <div style={{width:400}} className="form-inline container">
                <label htmlFor="gender">Giới tính của bạn &nbsp; </label>
                 <label className="radio-inline">
                    <input type="radio" name="gender" id="male" value="male" onChange={onChange}/> Nam
                </label>
                <label className="radio-inline">
                    <input type="radio" name="gender" id="female" value="female" onChange={onChange}/> Nữ
                </label>
            </div>
            <div className="checkBoxGroup container" style={{width:400}}>
                <h4>1. Bạn thích môn học nào nhất </h4>
                {subjects.map(subject => (
                    <CheckBox key={subject.id} name={"subject"} value={subject.subjectEng} onChange={onChange} label={subject.subjectVi} />
                ))}
                <input type="text" className="form-control" name="otherSubject" id="otherSubject" placeholder="Nhập môn học khác mà bạn thích" onChange={onChange}/>
            </div>

             <div className="checkBoxGroup container" style={{width:400}}>
                <h4>2. Môn học nào bạn đượcđược điểm từ 7/70%/B hay cao hơn?</h4>
                {subjects.map(subject => (
                    <CheckBox key={subject.id} name={"subjectScore"} value={subject.subjectEng} onChange={onChange} label={subject.subjectVi} />
                ))}
                <input type="text" className="form-control" name="otherSubjectScore" id="otherSubjectScore" placeholder="Nhập môn học khác" onChange={onChange}/>
            </div>

             <div className="checkBoxGroup container" style={{width:400}}>
                <h4>3. Sở thích của bạn là gì </h4>
                {hobbies.map(hobby => (
                    <CheckBox key={hobby.id} name={"hobby"} value={hobby.hobbyEng} onChange={onChange} label={hobby.hobbyVi} />
                ))}
                <input type="text" className="form-control" name="otherHobby" id="otherHobby" placeholder="Nhập sở thích khác của bạn" onChange={onChange}/>
            </div>
             
             <div className="error">
                { errorMessage }
             </div>
             <br/>
            <button name="startQuiz" onClick={onNextClick}>Start Quiz</button>
        </div>
    )
}

StartInformation.propTypes = {
    subjects: React.PropTypes.array.isRequired,
    hobbies: React.PropTypes.array.isRequired,
    onNextClick: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired
}

export default StartInformation