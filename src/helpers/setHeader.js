import axios from 'axios'

export const setHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = token
    axios.defaults.headers.common['Content-Type'] = 'application/json'
}