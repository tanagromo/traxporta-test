import axios from 'axios'

const users = {
    getUsers () {
        return axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => data)
    }
}

export const api = {
    users
}