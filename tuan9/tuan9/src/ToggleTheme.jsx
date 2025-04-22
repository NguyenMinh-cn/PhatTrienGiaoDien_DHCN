import React, { useState, useEffect } from 'react';

const ToggleTheme = () => {
    const [theme, setTheme] = useState('light');

    // Khi theme thay đổi, thêm hoặc gỡ class 'dark' ở <html>
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    // Hàm chuyển đổi theme
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-500">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Giao diện: {theme === 'light' ? 'Sáng' : 'Tối'}
                </h1>
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded bg-gray-300 dark:bg-blue-600 text-gray-900 dark:text-white">
                    Đổi giao diện
                </button>
            </div>
        </div>
    );
};

export default ToggleTheme;
