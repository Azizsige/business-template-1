<template>
  <div>
    <!-- Jumbotron -->
    <div
      class="flex items-center w-full h-screen wrapper-jumbo"
      v-motion-pop
      :delay="200"
    >
      <div
        class="jumbo max-w-[85%] lg:max-w-[94%] xl:max-w-[85%] mx-auto flex items-center flex-col lg:flex-row"
      >
        <div class="order-2 jumbo-text lg:order-1">
          <section class="bg-white">
            <div class="py-8 lg:py-16">
              <h1
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
              >
                {{ title }}
              </h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
                {{ description }}
              </p>
              <div class="">
                <a
                  href="#"
                  class="inline-flex justify-center items-center py-3 w-[157px] px-5 text-base font-medium text-center text-white rounded-[20px] bg-secondaryColor"
                >
                  {{ buttonText }}
                </a>
              </div>
            </div>
          </section>
        </div>
        <div class="jumbo-img lg:w-[80rem] order-1 lg:order-2 relative">
          <img
            class="h-full w-[80rem] sm:w-[30rem] xl:w-[80rem]"
            :src="image"
            alt=""
            srcset=""
          />
          <div
            v-if="precentange"
            v-motion-pop
            :delay="800"
            class="absolute bottom-0 items-center hidden p-4 font-bold bg-white border shadow-lg lg:flex rounded-xl md:p-5"
          >
            <div class="circular">
              <div class="inner"></div>
              <div class="text-lg font-bold number text-primaryColor">90%</div>
              <div class="circle">
                <div class="bar left">
                  <div class="progress"></div>
                </div>
                <div class="bar right">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
            <div class="w-auto pr-5 progress-text">
              <p class="w-10 pr-10 ml-3 text-primaryColor">Success Results</p>
            </div>
          </div>
          <div
            v-else
            v-motion-pop
            :delay="800"
            class="absolute bottom-0 items-center hidden p-4 font-bold bg-white border shadow-lg lg:flex none rounded-xl md:p-5"
          >
            <div class="circular">
              <div class="inner"></div>
              <div class="text-lg font-bold number text-primaryColor">90%</div>
              <div class="circle">
                <div class="bar left">
                  <div class="progress"></div>
                </div>
                <div class="bar right">
                  <div class="progress"></div>
                </div>
              </div>
            </div>
            <div class="w-auto pr-5 progress-text">
              <p class="w-10 pr-10 ml-3 text-primaryColor">Success Results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  alt: String,
  buttonText: String,
  precentange: Boolean,
});

import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();

// check if the route is home page or not to show the precentange
onMounted(() => {
  if (route.path === "/") {
    props.precentange = true;
  } else {
    props.precentange = false;
  }
});
</script>

<style lang="css" scoped>
.circular {
  height: 100px;
  width: 100px;
  position: relative;
}

.circular .inner {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 80px;
  width: 80px;
  background-color: #dde6f0;
  margin: -40px 0 0 -40px;
  border-radius: 100%;
  z-index: 6;
}

.circular .number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.circular .bar {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #cfefd1;
  -webkit-border-radius: 100%;
  clip: rect(0px, 100px, 100px, 50px);
}

.circle .bar .progress {
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-border-radius: 100%;
  clip: rect(0px, 50px, 100px, 0px);
  background: #029837;
}

.circle .left .progress {
  z-index: 1;
  animation: left 800ms linear both;
}

@keyframes left {
  100% {
    transform: rotate(180deg);
  }
}

.circle .right {
  transform: rotate(180deg);
  z-index: 3;
}

.circle .right .progress {
  animation: right 800ms linear both;
  animation-delay: 800ms;
}

@keyframes right {
  100% {
    transform: rotate(100deg);
  }
}
</style>
