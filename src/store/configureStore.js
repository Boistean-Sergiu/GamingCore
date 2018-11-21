// NPM and others

import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import {ApolloClient} from 'apollo-client'

// Common components

import rootReducer from './rootReducer'
import {setHeader, getApolloClient} from '../helpers'
import {loadToken} from '../cookies/loadToken'


export const history = createHistory()
const historyMiddleware = routerMiddleware(history)

const client = getApolloClient()

export default () => {
    const token = loadToken()
    const initialState = {
        login: {
            ...token.login
        }
    }

    if (token) {
        setHeader(token.login.header)
    }

    let store = createStore(rootReducer, initialState, compose(applyMiddleware(client.middleware(),historyMiddleware,ReduxThunk, logger)))

    return store
}