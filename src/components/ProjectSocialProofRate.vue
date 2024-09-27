<template>
  <div
    class="flex w-full max-w-96 flex-col items-center gap-y-2 rounded-lg bg-secondary-600 py-4 semi-lg:max-w-md xl:max-w-lg xl:flex-row xl:gap-x-10 xl:pl-12 2xl:max-w-xl"
  >
    <div class="flex items-center justify-center gap-x-2 xl:gap-x-3">
      <svg
        v-for="(rate, index) in rating"
        class="xl:scale-110 2xl:scale-125"
        :key="index"
        width="17"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
          fill="#EF9546"
          fill-rule="nonzero"
        />
      </svg>
    </div>
    <span
      class="font-league-spartan text-body-content font-bold text-primary-500 semi-lg:text-base xl:text-lg 2xl:text-xl"
    >
      {{ data.rate }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Rate } from "@/stores/interface.ts";

const data = defineProps<Rate>();
const rating = [1, 2, 3, 4, 5];
</script>
