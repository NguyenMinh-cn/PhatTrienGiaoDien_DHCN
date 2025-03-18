import React from 'react';
import { useReducer, useState } from 'react';

const initialState = { total: 0 };

const calReducuer = (state, action) => {
    switch (action.type) {
        case '+':
            return { total: action.payload.num1 + action.payload.num2 };
        case '-':
            return { total: action.payload.num1 - action.payload.num2 };
        case '*':
            return { total: action.payload.num1 * action.payload.num2 };
        case '/':
            return {
                total:
                    action.payload.num2 === 0
                        ? 'Không thể chia cho 0'
                        : action.payload.num1 / action.payload.num2,
            };
    }
};

export default function CalculatorWithReducer() {
    const [state, dispatch] = useReducer(calReducuer, initialState);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <input
                type="number"
                value={num1}
                name=""
                id=""
                onChange={(e) => setNum1(Number(e.target.value))}
            />
            <input
                type="number"
                value={num2}
                name=""
                id=""
                onChange={(e) => setNum2(Number(e.target.value))}
            />

            <button
                onClick={() =>
                    dispatch({ type: '+', payload: { num1, num2 } })
                }>
                +
            </button>
            <button
                onClick={() =>
                    dispatch({ type: '-', payload: { num1, num2 } })
                }>
                -
            </button>
            <button
                onClick={() =>
                    dispatch({ type: '*', payload: { num1, num2 } })
                }>
                *
            </button>
            <button
                onClick={() =>
                    dispatch({ type: '/', payload: { num1, num2 } })
                }>
                /
            </button>

            <h2>Kết quả của phép tính: {state.total}</h2>
        </div>
    );
}
