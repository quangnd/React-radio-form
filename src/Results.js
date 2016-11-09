import React, { PropTypes } from 'react'

const Results = (props) => {
    return(
        <ul>
            {props.results.map(result => {
                return <li key={result.id}>{result.name} has value is: {result.value}</li>
            })}
        </ul>
    )
}

Results.propTypes = {
    results: PropTypes.array.isRequired
}

export default Results;