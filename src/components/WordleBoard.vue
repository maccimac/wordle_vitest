
<script setup lang="ts">
import { VICTORY_MESSAGE } from "../settings.ts"
defineProps<{
  msg: string,
  wordOfTheDay: string,
}>()

</script>

<template>
  <p>{{msg}}</p>

  <input type="text"/>
  <p>{{wordOfTheDay}}</p>

  <p>{{ VICTORY_MESSAGE }}</p>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
