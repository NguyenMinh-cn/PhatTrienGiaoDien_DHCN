import React, { useState } from 'react';

const BmiCalculator = () => {
    const [chieuCao, setChieuCao] = useState('');
    const [canNang, setCanNang] = useState('');
    const [bmi, setBmi] = useState(null);
    const calculateBMI = () => {
        const cao = parseFloat(chieuCao) / 100;
        const nang = parseFloat(canNang);

        if (cao > 0 && nang > 0) {
            const ketQua = nang / (cao * cao);
            setBmi(ketQua.toFixed(2));
        } else {
            setBmi(null);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-xl font-bold text-center">Tính BMI</h2>

            <div className="mb-4">
                <label className="block mb-1">Chiều cao (cm):</label>
                <input
                    type="text"
                    value={chieuCao}
                    onChange={(e) => setChieuCao(e.target.value)}
                    className="w-full border px-3 py-2"
                />
            </div>

            {/* Nhập cân nặng */}
            <div className="mb-4">
                <label className="block mb-1">Cân nặng (kg):</label>
                <input
                    type="text"
                    value={canNang}
                    onChange={(e) => setCanNang(e.target.value)}
                    className="w-full border px-3 py-2"
                />
            </div>

            <button
                onClick={calculateBMI}
                className="w-full bg-blue-500 text-white py-2">
                Tính BMI
            </button>

            {bmi && (
                <div className="mt-4 text-center">
                    <p className="text-lg">
                        Chỉ số BMI của bạn là: <b>{bmi}</b>
                    </p>
                </div>
            )}
        </div>
    );
};

export default BmiCalculator;
