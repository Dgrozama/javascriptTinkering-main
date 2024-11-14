<template>
  <div>
    <h1>Fetch Data</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}</strong>: {{ comment.body }} <br />
        <em>by {{ comment.email }}</em>
      </li>
    </ul>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const comments = ref([])
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    comments.value = await response.json()
  } catch (err) {
    error.value = err.message
  }
})
</script>

<style scoped>
.error {
  color: red;
  margin-top: 20px;
}
</style>