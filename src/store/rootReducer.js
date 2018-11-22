// NPM and others

import {
  routerReducer as routing
} from 'react-router-redux'
import {
  combineReducers
} from 'redux'
import {
  reducer as formReducer
} from 'redux-form'

// Components

import { getApolloClient } from '../helpers'

const client = getApolloClient()

const rootReducer = combineReducers({
  routing,
  form: formReducer,
  apollo: client.reducer()
})

export default rootReducer