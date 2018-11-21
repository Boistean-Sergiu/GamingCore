import Cookies from 'js-cookie'

export const saveToken = (token) => Cookies.set('auth',token,{expires: 1.0 / 24})
