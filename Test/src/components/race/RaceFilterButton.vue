<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <button>{{ text }}</button>
</template>

<style scoped>
button {
  background: #fff;
  border: 2px solid var(--primary);
  border-radius: 4px;
  margin-right: 12px;
  font: 600 16px/16px "Mulish", sans-serif;
  padding: 8px 12px;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  display: inline-block;
  transition: all 200ms ease-in-out;
  -webkit-transition: all 200ms ease-in-out;
}
button:hover,
button.active {
  background: var(--primary);
  color: #fff;
}
</style>
