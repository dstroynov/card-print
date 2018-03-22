import './PrintTable.css';
import React from 'react';
import propTypes from 'prop-types';

const reshuffle = (definitions) => [...Array(definitions.length / 2)]
    .map((u, i) => i)
    .reduce((o, i) => [...o, definitions[i * 2 + 1], definitions[i * 2]], []);

const getleft = (definitions) => definitions.map(({left}) => left);
const getRight = (definitions) => reshuffle(definitions.map(({right}) => right));

const PrintTable = ({definitions = []}) => (
    <div className="print-table">
        {getleft(definitions).map((i, j) => <div className="bordered" key={j}>{i}</div>)}
        {getRight(definitions).map((i, j) => <div key={j}>{i}</div>)}
    </div>
);

PrintTable.propTypes = {
    definitions: propTypes.array,
};

export default PrintTable;
