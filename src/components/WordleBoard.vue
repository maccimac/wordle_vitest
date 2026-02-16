<script setup lang="ts">
import {DEFEAT_MESSAGE, VICTORY_MESSAGE} from "../settings.ts"
import {ref, computed} from "vue";

/**
 * Always define props as `const props = ...`
 */
const props = defineProps<{
  msg: string,
  wordOfTheDay: string,
}>()

const guessInProgress = ref("");
const guessSubmitted = ref("");

const success = computed(()=>{
  return props.wordOfTheDay === guessSubmitted.value
})
</script>

<template>
  <p>{{ msg }}</p>
  <p>{{ wordOfTheDay }}</p>

  <input
    type="text"
    v-model="guessInProgress"
    @keydown.enter="guessSubmitted = guessInProgress"
  />
  <!--  <p>{{ VICTORY_MESSAGE }}</p>-->
  <!--  <p>{{ DEFEAT_MESSAGE }}</p>-->

{{ guessSubmitted }}

  <p v-if="guessInProgress.length > 0" v-text="success ? VICTORY_MESSAGE : DEFEAT_MESSAGE"/>

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
