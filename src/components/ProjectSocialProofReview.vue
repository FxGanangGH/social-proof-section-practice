<template>
  <div
    class="flex w-full max-w-96 flex-col items-center justify-center gap-y-5 rounded-lg bg-primary-500 p-8 semi-lg:max-w-md 2xl:max-w-lg"
  >
    <div class="flex w-full items-center gap-x-5">
      <img
        class="size-10 rounded-full xl:size-14 2xl:size-16"
        :src="`/images/image-${data.icon}.jpg`"
        :alt="`Verified Buyer ${data.name}`"
      />
      <div class="pt-1">
        <h1
          class="font-league-spartan text-body-content font-bold text-white semi-lg:text-base xl:text-lg 2xl:text-xl"
        >
          {{ data.name }}
        </h1>
        <h2
          class="font-league-spartan text-body-content font-medium text-primary-600/80 semi-lg:text-base xl:text-lg 2xl:text-xl"
        >
          Verified Buyer
        </h2>
      </div>
    </div>
    <p
      class="text-left font-league-spartan text-body-content text-white semi-lg:text-base xl:text-lg 2xl:text-xl"
    >
      " {{ data.detail }} "
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Review } from "@/stores/interface";

const data = defineProps<Review>();
</script>
