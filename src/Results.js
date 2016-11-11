import React, { PropTypes } from 'react'

const Results = (props) => {
    return(
        <div className="container">
            <h1> Results: </h1>
            <ul>
                {props.results.map(result => (
                     <li key={result.id}>{result.name} has value is: {result.value}</li>
                ))}
            </ul>
        </div>
    )
}

Results.propTypes = {
    results: PropTypes.array.isRequired
}

export default Results;