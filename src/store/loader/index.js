import {createSlice} from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        showLoader: true
    },
    reducers: {
        setShowLoader: (state, {payload}) => {
            state.showLoader = payload
        }
    }
})

export const {
    setShowLoader
} = loaderSlice.actions

export default loaderSlice.reducer
