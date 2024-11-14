<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 David Groza. All rights reserved.</p>
      <p>Contact: <a href="mailto:dgrozama@iesebre.com">dgrozama@iesebre.com</a></p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #343a40;
  color: #ffffff;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer a {
  color: #1e90ff;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>