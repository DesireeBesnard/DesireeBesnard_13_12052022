import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from './userService'

//Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"))


const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const editProfile = createAsyncThunk(
    'user/editProfile',
    async(userData, thunkAPI) => {
        try {
            return await userService.editProfile(userData)
        } catch (error) {
            const message = ( error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: state => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: builder => {
        builder
            .addCase(editProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                console.log(action.payload)
                state.user.firstName = action.payload
                state.user.lastName = action.payload
            })
            .addCase(editProfile.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.data.message
                state.user = null
            })
    }
})

export const { reset } = userSlice.actions
export default userSlice.reducer