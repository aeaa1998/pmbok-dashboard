import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "tailwindcss/tailwind.css"
import VInput from "@/components/VInput.vue"
import RoundedButton from "@/components/RoundedButton.vue"

const app = createApp(App);
app.component('v-input', VInput)
app.component('v-rounded-btn', RoundedButton)
app.use(store).use(router).mount("#app")
