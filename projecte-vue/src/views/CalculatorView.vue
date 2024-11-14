<template>
  <br>
  <div class="calculator">
    <h1>Calculadora</h1>
    <input v-model="display" readonly class="display" />
    <div class="buttons">
      <button @click="appendNumber(number)" v-for="number in numbers" :key="number">{{ number }}</button>
      <button @click="chooseOperation(operation)" v-for="operation in operations" :key="operation">{{ operation }}</button>
      <button @click="clear">C</button>
      <button @click="compute">=</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const display = ref('')
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const operations = ['+', '-', '*', '/']

const appendNumber = (number) => {
  display.value += number
}

const chooseOperation = (operation) => {
  display.value += ` ${operation} `
}

const clear = () => {
  display.value = ''
}

const compute = () => {
  display.value = eval(display.value).toString()
}
</script>

<style scoped>
.calculator {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.display {
  width: 100%;
  padding: 10px;
  font-size: 1.5rem;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ddd;
}
</style>