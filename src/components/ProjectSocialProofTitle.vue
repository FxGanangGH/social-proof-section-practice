<template>
  <div class="flex flex-col items-center justify-center gap-y-5 xl:w-1/2 xl:items-start">
    <h1
      class="max-w-80 text-center font-league-spartan text-3xl font-bold leading-6 text-primary-500 semi-lg:max-w-96 semi-lg:text-4xl xl:text-left xl:text-6xl 2xl:max-w-lg 2xl:text-7xl"
    >
      {{ data.title }}
    </h1>
    <p
      class="max-w-96 text-center font-league-spartan text-body-content font-medium text-secondary-500 semi-lg:max-w-md semi-lg:text-base xl:max-w-lg xl:text-left xl:text-lg 2xl:max-w-xl 2xl:text-xl"
    >
      {{ data.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Title } from "@/stores/interface.ts";

const data = defineProps<Title>();
</script>
