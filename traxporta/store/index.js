import { createPinia } from 'pinia'
import axios from 'axios'

export const pinia = createPinia()

export const state = () => ({
  users: [],
})

export const actions = {
  async fetchUsers({ commit }) {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      commit('setUsers', response.data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  },
}

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}
