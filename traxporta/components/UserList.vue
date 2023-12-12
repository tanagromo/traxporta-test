<template>
    <div
      class="h-auto border border-tgray-300
      rounded-3xl pt-8 w-11/12 md:w-5/12 m-auto"
      >
        <h1
          class="text-center text-xl font-medium"
          >
          Users
        </h1>
        <div class="flex justify-center">
          <input
            ref="input"
            v-model="searchQuery"
            class="mt-5 px-5 py-2 border border-tgray-300
            rounded-full w-10/12 md:w-7/12 placeholder:text-xs"
            placeholder="Search"
            name="user"
            :autocomplete="false"
            type="text"
            >
        </div>
        <div
          class="mt-8"
          >
          <div
            class="px-2 md:px-8 pb-3 grid grid-cols-7 md:grid-cols-9 gap-2 md:gap-4
            text-xs text-tgray-500 border-b border-tgray-300"
            >
            <p class="col-start-2 md:col-start-2 col-span-3 md:col-span-4">
              Name
            </p>
            <p class="col-span-3 md:col-span-4">
              E-mail
            </p>
          </div>
          <div
            v-for="(user, index) in filteredUsers"
            :key="user.id"
            class="px-2 md:px-8 py-4 grid grid-cols-7 md:grid-cols-9 gap-2 md:gap-4"
            :class="{'border-b border-tgray-300': index !== filteredUsers.length - 1}"
            >
              <AppAvatar
                medium
                :user="user"
                />
              <div
                class="col-start-2 col-span-3 md:col-span-4 text-xs md:text-sm
                       font-medium flex items-center whitespace-nowrap"
                >
                <p
                  class="w-11/12 md:w-full text-ellipsis overflow-hidden"
                  >
                  {{ user.name }}
                </p>
              </div>
              <div
                class="col-span-3 md:col-span-4 text-xs md:text-sm
                       font-medium flex items-center whitespace-nowrap"
                >
                <p
                  class="w-11/12 md:w-full text-ellipsis overflow-hidden"
                  >
                  {{ user.email }}
                </p>
              </div>
          </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { api } from '@/api/index.js'

const users = ref([])
const searchQuery = ref('')

const getUsersList = async () => {
  try {
    const response = await api.users.getUsers()
    users.value = response.map((item) => {
      return {
        ...item,
        avatar: item.id % 2 === 0 ? '' : '/avatar.png'
      }
    })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const filteredUsers = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return users.value.filter(
    user =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
  )
})

watch(searchQuery, () => {
  // Update the filteredUsers array whenever searchQuery changes
  // This will be triggered as the user types in the input
  filteredUsers.value
})

onMounted(() => {
  // Fetch data when the component is mounted
  getUsersList()
})
</script>