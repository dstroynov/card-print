import React, {PureComponent} from 'react';
import propTypes from 'prop-types';

export default class Definition extends PureComponent {
    constructor(props) {
        super(props);

        this.handleChangeLeft = this.handleChangeLeft.bind(this);
        this.handleChangeRight = this.handleChangeRight.bind(this);
    }

    handleChangeLeft({target: {value}}) {
        const {onChange, row, right} = this.props;

        onChange(row, value, right);
    }

    handleChangeRight({target: {value}}) {
        const {onChange, row, left} = this.props;

        onChange(row, left, value);
    }

    render() {
        const {left, right} = this.props;
        return (
            <fieldset className="Definition" name={this.props.row}>
                <input type="text" value={left} onChange={this.handleChangeLeft} />
                <input type="text" value={right} onChange={this.handleChangeRight} />
            </fieldset>
        );
    }
}

Definition.propTypes = {
    left: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    right: propTypes.string.isRequired,
    row: propTypes.number.isRequired,
};
