import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

//Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"))


const initialState = {
    user: user ? user : null,
    rememberMe: true,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
        try {
            return await authService.login(user)
        } catch (error) {
            const message = ( error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            authService.logout()
            state.user = null
        },
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        },
        persist: (state) => {
            state.rememberMe = !state.rememberMe
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload.body
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
    }
})

export const { logout, reset, persist } = authSlice.actions
export default authSlice.reducer