import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// router
import router from "./router/router";

// plugin
import("preline");

createApp(App).use(router).mount("#app");
