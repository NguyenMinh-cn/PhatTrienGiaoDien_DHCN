import React, { useState } from 'react';

function EventManager() {
    const [events, setEvents] = useState([]); // Danh sách sự kiện
    const [tenSuKien, setTenSuKien] = useState('');
    const [ngay, setNgay] = useState('');
    const [dangSua, setDangSua] = useState(null); // Chỉ số sự kiện đang sửa

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!tenSuKien || !ngay) return;

        const suKien = { ten: tenSuKien, ngay };

        if (dangSua !== null) {
            // Cập nhật sự kiện
            const moi = [...events];
            moi[dangSua] = suKien;
            setEvents(moi);
            setDangSua(null);
        } else {
            // Thêm mới
            setEvents([...events, suKien]);
        }

        setTenSuKien('');
        setNgay('');
    };

    const handleSua = (index) => {
        const suKien = events[index];
        setTenSuKien(suKien.ten);
        setNgay(suKien.ngay);
        setDangSua(index);
    };

    const handleXoa = (index) => {
        const moi = events.filter((_, i) => i !== index);
        setEvents(moi);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4">
            <h2 className="text-xl font-bold text-center my-4">
                Quản lý sự kiện
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 mb-5">
                <input
                    type="text"
                    placeholder="Tên sự kiện"
                    value={tenSuKien}
                    onChange={(e) => setTenSuKien(e.target.value)}
                    className="w-full border px-3 py-2"
                />
                <input
                    type="date"
                    value={ngay}
                    onChange={(e) => setNgay(e.target.value)}
                    className="w-full border px-3 py-2"
                />
                <button
                    type="submit"
                    className="w-full bg-purple-300 text-purple-800 py-2">
                    {dangSua !== null ? 'Cập nhật sự kiện' : 'Thêm sự kiện'}
                </button>
            </form>

            <ul className="space-y-2">
                {events.map((sk, index) => (
                    <li
                        key={index}
                        className="bg-orange-100 p-3 flex justify-between items-center">
                        <div>
                            <p>{sk.ten}</p>
                            <p>{sk.ngay}</p>
                        </div>
                        <div className="space-x-2">
                            <button
                                onClick={() => handleSua(index)}
                                className="bg-emerald-500 px-2 py-1">
                                Sửa
                            </button>
                            <button
                                onClick={() => handleXoa(index)}
                                className="bg-red-500 px-2 py-1">
                                Xóa
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventManager;
