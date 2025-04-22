import React, { useState } from 'react';

function ShoppingCart() {
    // Giỏ hàng gồm 3 món: Táo, Cam, Nho
    const [cartItems, setCartItems] = useState([
        { id: 1, ten: 'Táo', gia: 10000, soLuong: 1 },
        { id: 2, ten: 'Cam', gia: 15000, soLuong: 2 },
        { id: 3, ten: 'Nho', gia: 20000, soLuong: 1 },
    ]);

    // Thêm sản phẩm vào giỏ
    const addItem = (ten, gia) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.ten === ten);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.ten === ten
                        ? { ...item, soLuong: item.soLuong + 1 }
                        : item
                );
            }
            return [
                ...prevItems,
                { id: prevItems.length + 1, ten, gia, soLuong: 1 },
            ];
        });
    };

    // Xóa sản phẩm khỏi giỏ
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    // Cập nhật số lượng
    const updateQuantity = (id, soLuong) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? { ...item, soLuong: Math.max(1, soLuong) }
                    : item
            )
        );
    };

    // Tổng số lượng và tổng tiền
    const tongSoLuong = cartItems.reduce((sum, item) => sum + item.soLuong, 0);
    const tongTien = cartItems.reduce(
        (sum, item) => sum + item.gia * item.soLuong,
        0
    );

    return (
        <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-800 rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Giỏ hàng
            </h2>

            <ul className="space-y-4">
                {cartItems.map((item) => (
                    <li
                        key={item.id}
                        className="flex justify-between items-center border-b pb-2">
                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">
                                {item.ten}
                            </p>
                            <p className="text-sm text-gray-500">
                                Giá: {item.gia}đ
                            </p>
                            <input
                                type="number"
                                value={item.soLuong}
                                onChange={(e) =>
                                    updateQuantity(
                                        item.id,
                                        parseInt(e.target.value)
                                    )
                                }
                                className="mt-1 w-16 border rounded px-2 py-1 text-sm"
                                min={1}
                            />
                        </div>
                        <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:underline">
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>

            <div className="mt-6 border-t pt-4">
                <p className="text-gray-800 dark:text-white">
                    Tổng số lượng:{' '}
                    <span className="font-bold">{tongSoLuong}</span>
                </p>
                <p className="text-gray-800 dark:text-white">
                    Tổng tiền:{' '}
                    <span className="font-bold">
                        {tongTien.toLocaleString()}đ
                    </span>
                </p>
            </div>

            <div className="mt-6 flex justify-around">
                <button
                    onClick={() => addItem('Táo', 10000)}
                    className="bg-blue-500 text-white py-2 px-4 rounded">
                    Thêm Táo
                </button>
                <button
                    onClick={() => addItem('Cam', 15000)}
                    className="bg-blue-500 text-white py-2 px-4 rounded">
                    Thêm Cam
                </button>
                <button
                    onClick={() => addItem('Nho', 20000)}
                    className="bg-blue-500 text-white py-2 px-4 rounded">
                    Thêm Nho
                </button>
            </div>
        </div>
    );
}

export default ShoppingCart;
