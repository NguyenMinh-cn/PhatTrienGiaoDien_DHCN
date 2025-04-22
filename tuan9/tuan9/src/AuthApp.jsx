import React, { useState } from 'react';

function AuthApp() {
    // Trạng thái người dùng, trạng thái đăng nhập và các giá trị nhập từ người dùng
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Hàm đăng nhập
    const login = () => {
        // Kiểm tra thông tin đăng nhập (giả định tài khoản là 'user' và mật khẩu là '12345')
        if (username === 'minh' && password === '12345') {
            setUser({ ten: 'NguyenMinh' }); // Cập nhật thông tin người dùng
            setIsLoggedIn(true); // Đặt trạng thái đăng nhập là true
            setError(''); // Xóa lỗi nếu đăng nhập thành công
        } else {
            setError('Tên đăng nhập hoặc mật khẩu sai'); // Thông báo lỗi nếu đăng nhập thất bại
        }
    };

    // Hàm đăng xuất
    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <div className="p-6 mx-auto bg-white ">
            <h2 className="text-xl font-bold mb-4 text-gray-800 ">
                Quản lý Đăng nhập
            </h2>

            {/* Nếu người dùng đã đăng nhập */}
            {isLoggedIn ? (
                <div>
                    <p className="text-gray-800 ">
                        Chào mừng, {user.ten} đã đăng nhập thành công.
                    </p>
                    <button
                        onClick={logout}
                        className="mt-4 bg-red-500 text-white py-2 px-4 hover:bg-red-600">
                        Đăng xuất
                    </button>
                </div>
            ) : (
                <div className=" flex flex-col justify-center">
                    <p className="text-gray-800">Vui lòng đăng nhập:</p>
                    <input
                        type="text"
                        placeholder="Tên đăng nhập"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-2 p-2 border rounded-md bg-gray-100 dark:bg-gray-700 "
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-2 p-2 border rounded-md bg-gray-100 dark:bg-gray-700 "
                    />
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <button
                        onClick={login}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Đăng nhập
                    </button>
                </div>
            )}
        </div>
    );
}

export default AuthApp;
