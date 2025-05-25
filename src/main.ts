import { createApp } from "vue"; // <---Importing createApp from Vue
import App from "./App.vue"; // <---Importing the main App component
import './styles/global.css' // <---Import global styles

createApp(App).mount("#app"); //mounting and initializing the Vue app
