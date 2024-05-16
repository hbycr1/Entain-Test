<template>
  <div class="filters">
    <RaceFilters
      :active="state.activeCategory"
      @update-category="updateCategory"
    />
  </div>
  <div v-if="!state.loading">
    <RaceListItem
      v-for="id in state.nextUp"
      v-bind:key="id"
      :race="state.raceSummaries[id]"
    />
  </div>
  <LoadingSpinner v-if="state.loading" />
</template>

<script setup lang="ts">
import RaceFilters from "./RaceFilters.vue";
import RaceListItem from "./RaceListItem.vue";
import { reactive } from "vue";
import raceService from "@/lib/services/raceService.service";
import LoadingSpinner from "../common/LoadingSpinner.vue";
import type {
  RaceDataApiResponse,
  RaceSummaryApiResponse,
} from "@/lib/models/RaceApiResponse";
import { RaceCategory } from "@/lib/models/RaceCategory.enum";

const state = reactive<{
  loading: boolean;
  activeCategory: RaceCategory;
  nextUp: string[];
  raceSummaries: { [id: string]: RaceSummaryApiResponse };
}>({
  loading: true,
  activeCategory: RaceCategory.All,
  nextUp: [],
  raceSummaries: {},
});

const updateCategory = (category: RaceCategory) => {
  state.activeCategory = category;
  fetchRaces(category);
};

const fetchRaces = (category: RaceCategory) => {
  state.loading = true;
  raceService
    .getRacesByCategory(category, 5)
    .then((res: RaceDataApiResponse) => {
      state.nextUp = res.next_to_go_ids;
      state.raceSummaries = res.race_summaries;
      state.loading = false;
    });
};

fetchRaces(RaceCategory.All);
</script>

<style scoped>
.filters {
  margin-bottom: 48px;
}
</style>
