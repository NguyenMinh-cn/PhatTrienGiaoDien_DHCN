import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Tạo async thunk để lấy danh sách người dùng từ API
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers', // Tên của action
    async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        return response.json();
    }
);

// Tạo slice quản lý trạng thái người dùng
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [], // Mảng chứa danh sách người dùng
        status: 'idle', // Trạng thái của API call (idle, loading, succeeded, failed)
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload; // Gán danh sách người dùng vào state
            })
            // Khi API call thất bại
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; // Lưu thông báo lỗi
            });
    },
});

export default usersSlice.reducer;
