<template>
  <header
    class="relative z-50 flex flex-wrap w-full py-8 text-sm bg-white shadow-sm lg:justify-start lg:flex-nowrap"
  >
    <nav
      class="max-w-[85rem] lg:max-w-[97%] xl:max-w-[85%] w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <a class="flex-none text-xl font-semibold" href="#"
          >Your Name Company</a
        >
        <div class="lg:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondaryColor focus:ring-secondaryColor"
            data-hs-collapse="#navbar-with-mega-menu"
            aria-controls="navbar-with-mega-menu"
            aria-label="Toggle navigation"
          >
            <svg
              class="w-4 h-4 hs-collapse-open:hidden text-secondaryColor"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              class="hidden w-4 h-4 hs-collapse-open:block text-secondaryColor"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-with-mega-menu"
        class="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow lg:block"
      >
        <div
          class="flex flex-col gap-12 mt-5 lg:gap-8 xl:gap-12 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:pl-5"
        >
          <router-link
            aria-current="page"
            class="font-medium text-blue-500 text-[20px]"
            to="/"
            >Home</router-link
          >
          <router-link
            aria-current="page"
            class="font-medium text-[20px] text-gray-600 hover:text-gray-400"
            to="/about"
            >About</router-link
          >
          <router-link
            aria-current="page"
            class="font-medium text-[20px] text-gray-600 hover:text-gray-400"
            to="/service"
            >Services</router-link
          >
          <router-link
            aria-current="page"
            class="font-medium text-[20px] text-gray-600 hover:text-gray-400"
            to="/sales"
            >Pricing</router-link
          >
          <router-link
            aria-current="page"
            class="font-medium text-[20px] text-gray-600 hover:text-gray-400"
            to="/webinar"
            >Webinar</router-link
          >
          <router-link
            aria-current="page"
            class="font-medium text-[20px] text-gray-600 hover:text-gray-400"
            to="/contact-us"
            ><button
              type="button"
              class="py-[.688rem] text-[20px] px-4 inline-flex w-[157px] justify-center items-center gap-2 rounded-[20px] border-2 border-secondaryColor font-semibold text-secondaryColor hover:text-white hover:bg-secondaryColor focus:outline-none f transition-all text-sm"
            >
              Contact Us
            </button></router-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

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
