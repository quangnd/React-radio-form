import React from 'react';

class RadioOption extends React.Component {
    render() {
        return (
            <label className="radio-inline">
                <input type="radio"
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleOptionChange} />
                {this.props.label}
             </label>
        );
    }
}

export default RadioOption;