import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';

function UsersList() {
    const dispatch = useDispatch();

    const { users, status, error } = useSelector((state) => state.users);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [dispatch, status]);

    return (
        <div className="m-4 ">
            <h2 className="text-lg font-bold mb-3">Danh sách người dùng</h2>

            {status === 'loading' && <p>Đang tải dữ liệu...</p>}
            {status === 'failed' && (
                <p className="text-red-500">Lỗi: {error}</p>
            )}

            {/* Hiển thị danh sách */}
            {status === 'succeeded' && (
                <ul className="space-y-3">
                    {users.map((user) => (
                        <li key={user.id} className="border p-3 ">
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-600">
                                {user.email}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UsersList;
