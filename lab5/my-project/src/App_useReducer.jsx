import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { count: state.count + 1 };
        case 'decrease':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export default function App_useReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'increase' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>-</button>
        </div>
    );
}
