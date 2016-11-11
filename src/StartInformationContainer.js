import React from 'react'
import StartInformation from './StartInformation'

class StartInformationContainer extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

    }

    render() {
        return(
            <StartInformation subjects={this.props.subjects} 
                              hobbies={this.props.hobbies}
                              onWakeQuizUp={this.props.wakeQuizUp} 
                              onChange={this.handleChange}/>
        )
    }
}

export default StartInformationContainer