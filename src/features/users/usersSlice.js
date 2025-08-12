import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        return res.json()
    }
)
export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status = false
            state.error = action.error.message
        })
    }

})
export default usersSlice.reducer