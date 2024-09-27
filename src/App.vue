<template>
  <main
    class="flex size-full min-h-screen items-center justify-center bg-white bg-[url('/images/bg-pattern-top-mobile.svg'),_url('/images/bg-pattern-bottom-mobile.svg')] bg-[position:left_top,_right_bottom] bg-no-repeat xl:bg-[url('/images/bg-pattern-top-desktop.svg'),_url('/images/bg-pattern-bottom-desktop.svg')]"
  >
    <div
      class="flex size-full min-h-screen flex-col items-center px-5 py-20 xl:w-11/12 xl:max-w-screen-2xl xl:justify-center xl:pt-16 2xl:px-0"
    >
      <div class="flex w-full flex-col items-center xl:flex-row xl:justify-center">
        <ProjectSocialProofTitle
          class="mb-10"
          title="10,000+ of our users love our products."
          description="We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services."
        />
        <div class="flex w-full flex-col items-center xl:w-1/2 xl:items-start">
          <ProjectSocialProofRate
            v-for="(rate, index) in rates"
            :key="rate"
            :class="{
              'mt-0': index === 0,
              'mt-5': index > 0,
              'xl:ml-10 2xl:ml-16': index === 1,
              'xl:ml-20 2xl:ml-32': index === 2,
            }"
            :rate="`Rated 5 Stars from ${rate}`"
          />
        </div>
      </div>
      <div
        class="mt-14 flex w-full flex-col items-center xl:mt-0 xl:flex-row xl:justify-between"
      >
        <ProjectSocialProofReview
          v-for="(review, index) in reviews"
          :key="review.name"
          :class="{
            'mt-0': index === 0,
            'mt-5 xl:ml-10': index > 0,
            'xl:mt-12': index === 1,
            'xl:mt-24': index === 2,
          }"
          :icon="review.icon"
          :name="review.name"
          :detail="review.detail"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ProjectSocialProofTitle from "@/components/ProjectSocialProofTitle.vue";
import ProjectSocialProofRate from "@/components/ProjectSocialProofRate.vue";
import ProjectSocialProofReview from "@/components/ProjectSocialProofReview.vue";

const rates = ["Reviews", "Report Guru", "BestTech"];
const reviews = [
  {
    icon: "colton",
    name: "Colton Smith",
    detail:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    icon: "irene",
    name: "Irene Roberts",
    detail:
      "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
  },
  {
    icon: "anne",
    name: "Anne Wallace",
    detail:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
  },
];
</script>
