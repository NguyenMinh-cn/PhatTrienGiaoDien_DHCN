import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    increment,
    decrement,
    reset,
    incrementByAmount,
} from './redux/counterSlice';

function BT_redux() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const [step, setStep] = useState(1); // Số lượng người dùng muốn tăng

    return (
        <div className="flex justify-center text-white">
            <div className="text-center p-8 ">
                <h1 className="text-2xl font-bold mb-4 text-black">Đếm số</h1>
                <h2 className="text-3xl font-bold text-purple-600 mb-4">
                    {count}
                </h2>

                <div className="space-x-3 m-4">
                    <button
                        onClick={() => dispatch(increment())}
                        className="px-4 py-2 bg-blue-500 ">
                        Tăng
                    </button>
                    <button
                        onClick={() => dispatch(decrement())}
                        className="px-4 py-2 bg-red-500 ">
                        Giảm
                    </button>
                    <button
                        onClick={() => dispatch(reset())}
                        className="px-4 py-2 bg-green-500 ">
                        Reset
                    </button>
                </div>

                {/* Ô nhập số và nút tăng theo step */}
                <div className="space-x-3">
                    <input
                        type="text"
                        value={step}
                        onChange={(e) => setStep(Number(e.target.value))}
                        className="border px-2 py-1 w-24 text-center text-black"
                    />
                    <button
                        onClick={() => dispatch(incrementByAmount(step))}
                        className="px-4 py-2 bg-pink-500 ">
                        Tăng theo số
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BT_redux;
