import {createSlice} from '@reduxjs/toolkit'

export const langSlice = createSlice({
    name: 'lang',
    initialState: {
        lang: localStorage.getItem('lang') || 'en',
        decrease: false,
        mobileMenuIsActive: false
    },
    reducers: {
        setLang: (state, {payload}) => {
            state.lang = payload
        },
        setDecrease: (state, {payload}) => {
            state.decrease = payload
        },
        setMobileMenuIsActive: (state, {payload}) => {
            state.mobileMenuIsActive = payload
        }
    }
})

export const {
    setLang,
    setDecrease,
    setMobileMenuIsActive
} = langSlice.actions

export default langSlice.reducer
