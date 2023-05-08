<template>
  <header
    class="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-8"
  >
    <nav
      class="max-w-[85rem] lg:max-w-[85%] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <a class="flex-none text-xl font-semibold" href="#"
          >Your Name Company</a
        >
        <div class="sm:hidden">
          <button
            type="button"
            class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondaryColor focus:ring-secondaryColor transition-all text-sm"
            data-hs-collapse="#navbar-with-mega-menu"
            aria-controls="navbar-with-mega-menu"
            aria-label="Toggle navigation"
          >
            <svg
              class="hs-collapse-open:hidden w-4 h-4 text-secondaryColor"
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
              class="hs-collapse-open:block hidden w-4 h-4 text-secondaryColor"
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
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div
          class="flex flex-col gap-12 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5"
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
