<template>
  <div class="card">
    <div class="row">
      <img
        v-if="race.category_id == RaceCategory.Horse"
        src="@/lib/assets/img/horseshoe.svg"
        width="24"
        height="24"
        alt="Horse"
        title="Horse Racing"
      />
      <img
        v-if="race.category_id == RaceCategory.Harness"
        src="@/lib/assets/img/harness.svg"
        width="24"
        height="24"
        alt="Harness"
        title="Harness Racing"
      />
      <img
        v-if="race.category_id == RaceCategory.Greyhound"
        src="@/lib/assets/img/dog.svg"
        width="24"
        height="24"
        alt="Greyhound"
        title="Greyhound Racing"
      />
      <div class="flex-1">
        <p class="sub-title">#{{ race.race_number }} {{ race.meeting_name }}</p>
        <p class="title">{{ race.race_name }}</p>
      </div>
      <div class="text-right">
        <p class="sub-title">Starts in</p>
        <p class="title">
          {{ convertSecondsToString(race.advertised_start.seconds) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RaceSummaryApiResponse } from "@/lib/models/RaceApiResponse";
import dateHelpers from "@/lib/helpers/date.helper";
import { RaceCategory } from "@/lib/models/RaceCategory.enum";
defineProps<{ race: RaceSummaryApiResponse }>();
</script>

<script lang="ts">
const convertSecondsToString = (seconds: number) => {
  const minutes = dateHelpers.convertUnixSecondsToMinutes(seconds);
  if (minutes == 0) return "now";
  else if (minutes < 0) return `${minutes} minute ago`;
  else if (minutes == 1) return `${minutes} minute`;
  else return `${minutes} minutes`;
};
</script>

<style scope>
.card {
  background: #fff;
  padding: 12px;
  box-shadow: 0 0 12px -4px rgba(0, 0, 0, 20%);
  border-radius: 4px;
  margin-bottom: 12px;
}
.sub-title {
  font-weight: 700;
  font-size: 14px;
  color: var(--primary);
  margin-left: 12px;
}
.title {
  font-size: 16px;
  font-weight: 700;
  margin-left: 12px;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flex-1 {
  flex: 1;
}
.text-right {
  text-align: right;
}
</style>
