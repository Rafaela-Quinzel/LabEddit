export const BASE_URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'


export const axiosConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}