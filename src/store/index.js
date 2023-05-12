import {configureStore} from '@reduxjs/toolkit'
import backendReducer from './backend'
import langReducer from './lang'
import loaderReducer from './loader'

export default configureStore({
    reducer: {
        backend: backendReducer,
        loader: loaderReducer,
        lang: langReducer
    }
})
