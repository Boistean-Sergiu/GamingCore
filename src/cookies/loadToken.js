import Cookies from 'js-cookie'

export const loadToken = () => {
    const token = Cookies.get('auth')

    if (!token) {
        return { login: {}}
    }

    const header = `${token.type} ${token.access_token}`

    return {
        login: {
            isAthenticated: true,
            token,
            header,
            error: ''
        }
    }
}
