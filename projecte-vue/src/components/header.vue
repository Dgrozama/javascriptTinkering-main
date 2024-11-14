<template>
  <header>
    <div class="navbar">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/calculator">Calculator</RouterLink>
        <RouterLink to="/fetch-data">Fetch Data</RouterLink>
        <RouterLink to="/axios-data">Axios Data</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
header {
  background-color: #343a40;
  padding: 1rem 0;
  width: 100%;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo {
  height: 50px;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #495057;
}

body {
  margin-top: 70px; /* Adjust this value as needed to create separation */
}
</style>