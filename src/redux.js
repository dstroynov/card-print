export const UPDATE_VALUE = 'UPDATE_VALUE';
export const PRINT = 'PRINT';

const initialState = {
    definitions: [...Array(8)].map((u, i) => ({left: '', right: ''})),
    printMode: false,
};

export const getLeft = (state) => state.definitions.map(({left}) => left);
export const getRight = (state) => state.definitions.map(({right}) => right);

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_VALUE:
            return {
                definitions: [
                    ...state.definitions.slice(0, action.row),
                    {
                        left: action.left,
                        right: action.right,
                    },
                    ...state.definitions.slice(+action.row + 1),
                ],
                printMode: state.printMode,
            };

        case PRINT:
            return {
                definitions: state.definitions,
                printMode: !state.printMode,
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
