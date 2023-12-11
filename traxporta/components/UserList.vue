<template>
    <div class="h-screen border border-tgray-400 rounded-3xl p-8 w-5/12 m-auto">
        <p class="text-center">
          Users
        </p>
        <input
          ref="input"
          v-model="search"
          class="textbox__control"
          placeholder="Search"
          name="user"
          autofocus
          :autocomplete="false"
          type="text"
          >
    </div>
</template>

<script>
import { api } from '@/api/index.js'

export default {
    name: 'UserList',
    data () {
      return {
          search: ''
      }
    },
    created () {
      this.getUsersList()
    },
    methods: {
      async getUsersList () {
        const list = await api.users.getUsers()
      }
    }
}
</script>