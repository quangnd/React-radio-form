import React from 'react'
import StartInformation from './StartInformation'

class StartInformationContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            userInfo: {},
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);  
    }

    renderError() {
        if (this.state.error) {
         let errorStyle = {color: 'red'};
         return (
           <div style={errorStyle}>
           
             {this.state.error.map((error,i) => {
                 return <p key={i}>{error}</p>
             })}
             
           </div>
    		 ); 
       }
    }

    validateInput() {
        let errors = [];
        let age = this.state.userInfo.age;
        let gender = this.state.userInfo.gender;
        let subjects = this.state.userInfo.subjects;
        let subjectScores = this.state.userInfo.subjectScores;
        let hobbies = this.state.userInfo.hobbies;

       
        if (!age) { //empty or undefined
            errors.push('Please enter age');
        }
        if (isNaN(age)) {
            errors.push('Age must be number');
        }
        if (!gender) {
            errors.push('Please enter gender');
        }
        if (!subjects || subjects.length === 0) {
            errors.push('You must choose at least a subject!');
        } 
        if (!subjectScores || subjectScores.length === 0) {
            errors.push('You must choose at least a subject score!');
        }
        if (!hobbies || hobbies.length === 0) {
            errors.push('You must choose at least a hobbie!');
        }

        if (errors.length > 0) { 
            this.setState({error: errors});
        }
        else {
            this.setState({error: false})
            return true;
        }
    }

    handleNextClick(event) {
        event.preventDefault();

        //console.log(this.state.error);
        if (this.validateInput()) {
            this.props.updateUserInfo({
                userInfo: this.state.userInfo
            })
        }   
    }

    handleChange(event) {
        //console.log(event.target.name);
        //console.log(event.target.value);

        let inputName = event.target.name;
        let inputValue = event.target.value;

        let userInfo = this.state.userInfo;

        if (inputName === 'age') userInfo.age = inputValue;
        if (inputName === 'gender') userInfo.gender = inputValue;
        if (inputName === 'otherSubject') userInfo.otherSubject = inputValue;
        if (inputName === 'otherSubjectScore') userInfo.otherSubjectScore = inputValue;
        if (inputName === 'otherHobby') userInfo.otherHobby = inputValue;

        let subjects = this.state.userInfo.subjects === undefined ? [] : this.state.userInfo.subjects;
        if (inputName === 'subject') {
            if (event.target.checked) 
                subjects.push(inputValue);
            else
                subjects.splice(subjects.indexOf(inputValue), 1);
        } 
        userInfo.subjects = subjects;

        let subjectScores = this.state.userInfo.subjectScores === undefined ? [] : this.state.userInfo.subjectScores;
        if (inputName === 'subjectScore') {
            if (event.target.checked) 
                subjectScores.push(inputValue);
            else
                subjectScores.splice(subjectScores.indexOf(inputValue), 1);
        } 
        userInfo.subjectScores = subjectScores;

        let hobbies = this.state.userInfo.hobbies === undefined ? [] : this.state.userInfo.hobbies;
        if (inputName === 'hobby') {
            if (event.target.checked)
                hobbies.push(inputValue);
            else
                hobbies.splice(hobbies.indexOf(inputValue), 1);
        }
        userInfo.hobbies = hobbies;
        
        this.setState({
            userInfo,
            error: false
        })


        console.log(userInfo);
    }

    render() {
         var errorMessage = this.renderError();
         //console.log(errorMessage);
        return(
            
            <StartInformation subjects={this.props.subjects} 
                              hobbies={this.props.hobbies}
                              onNextClick={this.handleNextClick} 
                              onChange={this.handleChange}
                              errorMessage={errorMessage}/>
        )
    }
}

export default StartInformationContainer