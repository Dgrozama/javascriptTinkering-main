<template>
  <div>
    <h1>Axios Data</h1>
    <ul>
      <li v-for="user in users" :key="user.id" class="user-card">
        <img :src="user.image" alt="User Image" class="user-image" />
        <div class="user-info">
          <div class="user-detail"><strong>Name:</strong> {{ user.firstName }} {{ user.lastName }}</div>
          <div class="user-detail"><strong>Email:</strong> {{ user.email }}</div>
          <div class="user-detail"><strong>Username:</strong> {{ user.username }}</div>
          <div class="user-detail"><strong>Phone:</strong> {{ user.phone }}</div>
          <div class="user-detail"><strong>Website:</strong> <a :href="user.website" target="_blank">{{ user.website }}</a></div>
          <div class="user-detail"><strong>Company:</strong> {{ user.company.name }}</div>
          <div class="user-detail"><strong>Address:</strong> {{ user.address.street }}, {{ user.address.city }}, {{ user.address.state }}, {{ user.address.postalCode }}</div>
          <div class="user-detail"><strong>Age:</strong> {{ user.age }}</div>
          <div class="user-detail"><strong>Gender:</strong> {{ user.gender }}</div>
          <div class="user-detail"><strong>Birth Date:</strong> {{ user.birthDate }}</div>
          <div class="user-detail"><strong>Blood Group:</strong> {{ user.bloodGroup }}</div>
          <div class="user-detail"><strong>Height:</strong> {{ user.height }} cm</div>
          <div class="user-detail"><strong>Weight:</strong> {{ user.weight }} kg</div>
          <div class="user-detail"><strong>Eye Color:</strong> {{ user.eyeColor }}</div>
          <div class="user-detail"><strong>Hair Color:</strong> {{ user.hair.color }}</div>
          <div class="user-detail"><strong>Hair Type:</strong> {{ user.hair.type }}</div>
          <div class="user-detail"><strong>University:</strong> {{ user.university }}</div>
          <div class="user-detail"><strong>Bank Card Number:</strong> {{ user.bank.cardNumber }}</div>
          <div class="user-detail"><strong>IBAN:</strong> {{ user.bank.iban }}</div>
          <div class="user-detail"><strong>MAC Address:</strong> {{ user.macAddress }}</div>
          <div class="user-detail"><strong>IP Address:</strong> {{ user.ip }}</div>
          <div class="user-detail"><strong>SSN:</strong> {{ user.ssn }}</div>
          <div class="user-detail"><strong>User Agent:</strong> {{ user.userAgent }}</div>
        </div>
      </li>
    </ul>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const error = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users')
    users.value = response.data.users
  } catch (err) {
    error.value = err.message
  }
})
</script>

<style scoped>
.user-card {
  border: 1px solid #444;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.user-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #555;
  flex-shrink: 0;
}

.user-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
}

.user-detail {
  border: 1px solid #555;
  border-radius: 3px;
  padding: 5px;
  background-color: #444;
  color: #fff;
  word-wrap: break-word;
}

.user-detail a {
  color: #1e90ff;
  text-decoration: none;
}

.user-detail a:hover {
  text-decoration: underline;
}

.error {
  color: red;
  margin-top: 20px;
}
</style>
