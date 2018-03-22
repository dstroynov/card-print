import {print, updateDefinition} from './redux';
import Form from './Form';
import PrintTable from './PrintTable';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

const App = ({definitions = [], print, printMode, updateDefinition}) => (
    <div className="App">
        {printMode
            ? <PrintTable definitions={definitions} />
            : <Form definitions={definitions} print={print} updateDefinition={updateDefinition} />
        }
    </div>
);

App.propTypes = {
    definitions: propTypes.array,
    print: propTypes.func.isRequired,
    printMode: propTypes.bool.isRequired,
    updateDefinition: propTypes.func.isRequired,
};

const mapStateToProps = ({definitions: {definitions, printMode}}) => ({
    definitions,
    printMode,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateDefinition,
    print,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
