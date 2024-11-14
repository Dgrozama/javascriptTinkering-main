<template>
  <main>
    <h1>Benvingut al projecte</h1>
    <p>Aquesta és la pàgina principal.</p>
    <section>
      <h2>Funcionalitats de l'aplicació</h2>
      <ul>
        <li>Calculadora: Una eina per realitzar càlculs bàsics.</li>
        <li>Dades Fetch: Mostra dades obtingudes mitjançant fetch.</li>
        <li>Dades Axios: Mostra dades obtingudes mitjançant Axios.</li>
      </ul>
    </section>
    <section>
      <h2>Contacte</h2>
      <p>Per a més informació, contacta amb nosaltres a <a href="mailto:dgrozama@iesebre.com">dgrozama@iesebre.com</a>.</p>
    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
main {
  padding: 2rem;
}

h2 {
  margin-top: 1.5rem;
}

ul {
  list-style-type: disc;
  margin-left: 2rem;
}

a {
  color: #1e90ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>