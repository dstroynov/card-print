export const UPDATE_VALUE = 'UPDATE_VALUE';
export const PRINT = 'PRINT';
export const RESET = 'RESET';

const getInitialDefinitions = () => [...Array(8)].map((u, i) => ({
    left: localStorage.getItem(`card-print-definition-${i}-1`) || '',
    right: localStorage.getItem(`card-print-definition-${i}-2`) || '',
}));

const initialState = {
    definitions: getInitialDefinitions(),
    printMode: false,
};

export const getLeft = (state) => state.definitions.map(({left}) => left);
export const getRight = (state) => state.definitions.map(({right}) => right);

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_VALUE:
            const {row, left, right} = action;
            localStorage.setItem(`card-print-definition-${row}-1`, left);
            localStorage.setItem(`card-print-definition-${row}-2`, right);
            return {
                definitions: [
                    ...state.definitions.slice(0, row),
                    {left, right},
                    ...state.definitions.slice(+row + 1),
                ],
                printMode: state.printMode,
            };

        case PRINT:
            return {
                definitions: state.definitions,
                printMode: !state.printMode,
            };

        case RESET:
            return {
                definitions: getInitialDefinitions(),
                printMode: state.printMode,
            };

        default:
            return state;
    }
};

export const updateDefinition = (row, left, right) => ({
    type: UPDATE_VALUE,
    row,
    left,
    right,
});

export const print = () => {
    setTimeout(() => window.print(), 0);
    return {
        type: PRINT,
    };
};

export const reset = () => {
    for (let i = 0; i <= 8; i++) {
        localStorage.removeItem(`card-print-definition-${i}-1`);
        localStorage.removeItem(`card-print-definition-${i}-2`);
    };
    return {
        type: RESET,
    };
};
