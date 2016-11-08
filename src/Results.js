import React from 'react'

class Results extends React.Component {

    render() {
        console.log(this.props.data);
        return(
            <div>
            dfsadfsf
            <ul>
                {this.props.data.map(ques => {
                <li>  fsdfs  {ques.name} has value is: {ques.value}</li>
                })}
            </ul>
            </div>
        )
    }
}

export default Results;