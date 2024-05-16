<script setup lang="ts">
import { RaceCategory } from "@/lib/models/RaceCategory.enum";
import { defineProps, defineEmits } from "vue";
import RaceFilterButton from "./RaceFilterButton.vue";

defineProps<{ active: RaceCategory }>();
defineEmits(["update-category"]);
</script>

<template>
  <RaceFilterButton
    text="All Races"
    v-bind:key="'All'"
    v-bind:class="{ active: active === RaceCategory.All }"
    @click="$emit('update-category', RaceCategory.All)"
  />
  <RaceFilterButton
    text="Horse Racing"
    v-bind:key="'Horse'"
    v-bind:class="{ active: active === RaceCategory.Horse }"
    @click="$emit('update-category', RaceCategory.Horse)"
  />
  <RaceFilterButton
    text="Harness Racing"
    v-bind:key="'Harness'"
    v-bind:class="{ active: active === RaceCategory.Harness }"
    @click="$emit('update-category', RaceCategory.Harness)"
  />
  <RaceFilterButton
    text="Greyhound Racing"
    v-bind:key="'Greyhound'"
    v-bind:class="{ active: active === RaceCategory.Greyhound }"
    @click="$emit('update-category', RaceCategory.Greyhound)"
  />
</template>
