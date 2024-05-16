<script setup lang="ts">
import RacesList from "./components/race/RaceList.vue";
</script>

<template>
  <header>
    <img
      alt="Entain Logo"
      class="logo"
      src="./lib/assets/img/logo.svg"
      width="100"
      height="30"
    />

    <div class="greetings">
      <h1>Next to go Races</h1>
    </div>
  </header>

  <RacesList />
</template>

<style scoped>
header {
  padding: 24px 0;
}
</style>
