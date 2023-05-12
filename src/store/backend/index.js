import {createSlice} from '@reduxjs/toolkit'
import ApiService from './../../api/backend'
import NavigationHelper from './../../utils/navigation'

export const backendSlice = createSlice({
    name: 'backend',
    initialState: {
        languages: [],
        settings: {},
        socials: [],
        works: {},
        filteredWorks: [],
        serviceData: {},
        services: [],
        subServices: [],
        selectedService: {}
    },
    reducers: {
        setLanguages: (state, {payload}) => {
            state.languages = payload
        },
        setSettings: (state, {payload}) => {
            state.settings = payload
        },
        setSocials: (state, {payload}) => {
            state.socials = payload
        },
        setWorks: (state, {payload}) => {
            state.works = payload
        },
        setServiceData: (state, {payload}) => {
            state.serviceData = payload
        },
        setServices: (state, {payload}) => {
            state.services = payload
        },
        setSubServices: (state, {payload}) => {
            state.subServices = payload
        },
        setSelectedService: (state, {payload}) => {
            state.selectedService = payload
        },
        setFilteredWorks: (state, {payload}) => {
            state.filteredWorks = payload
        }

    }
})

export const {
    setLanguages,
    setSettings,
    setSocials,
    setWorks,
    setServices,
    setSubServices,
    setSelectedService,
    setFilteredWorks,
    setServiceData
} = backendSlice.actions

export default backendSlice.reducer

export const getLanguages = () => {
    return async dispatch => {
        try {
            const {data} = await ApiService.getLanguages()
            dispatch(setLanguages(data?.languages))
        } catch (e) {
            NavigationHelper.navigateNotFoundPage()
        }
    }
}

export const getSettings = () => {
    return async dispatch => {
        try {
            const {data} = await ApiService.getSettings()
            dispatch(setSettings(data?.settings))
        } catch (e) {
            NavigationHelper.navigateNotFoundPage()
        }
    }
}

export const getSocials = () => {
    return async dispatch => {
        try {
            const {data} = await ApiService.getSocials()
            dispatch(setSocials(data?.socials))
        } catch (e) {
            NavigationHelper.navigateNotFoundPage()
        }
    }
}

export const getWorks = (locale) => {
    return async dispatch => {
        try {
            const {data} = await ApiService.getWorks(locale)
            dispatch(setWorks(data))
        } catch (e) {
            NavigationHelper.navigateNotFoundPage()
        }
    }
}

export const getServices = (locale) => {
    return async dispatch => {
        try {
            const {data} = await ApiService.getServices(locale)
            dispatch(setServices(data?.servicesData?.services))
            dispatch(setSubServices(data?.servicesData?.sub_services))
            dispatch(setServiceData(data?.servicesData))
        } catch (e) {
            NavigationHelper.navigateNotFoundPage()
        }
    }
}
