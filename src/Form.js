import './Form.css';
import Definition from './Definition';
import React from 'react';
import propTypes from 'prop-types';

const Form = ({definitions = [], print, updateDefinition}) => (
    <form>
        <div className="definitions">
            {definitions.map(({left, right}, j) => (
                <Definition key={j} onChange={updateDefinition} row={j} left={left} right={right} />
            ))}
        </div>
        <button className="btn" onClick={print}><i className="icon-print"></i> Печать</button>
    </form>
);

Form.propTypes = {
    definitions: propTypes.array.isRequired,
    print: propTypes.func.isRequired,
    updateDefinition: propTypes.func.isRequired,
};

export default Form;
