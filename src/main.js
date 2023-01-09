import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import editContent from "@/utils/edit-content.plugin";
import axios from "axios";
// import 'vue-select/dist/vue-select.css'
// import vSelect from "vue-select";
import "@/assets/sass/main.sass";

// Global components
import ThePageTitle from "./components/ThePageTitle";
import BaseButton from "./components/UI/BaseButton";
import BaseTag from "./components/UI/BaseTag";

const app = createApp(App);

app.component("ThePageTitle", ThePageTitle);
app.component("BaseButton", BaseButton);
app.component("BaseTag", BaseTag);

// .component("v-select", vSelect)

export const Axios = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Authorization': ``
    }
})

app.use(router)
app.use(editContent)
app.use(createPinia())
app.mount("#app");
