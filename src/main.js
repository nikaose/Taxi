import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faClock,
  faMoneyBillWave,
  faCar,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faViber,
  faTelegram,
  faWhatsapp,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faClock,
  faMoneyBillWave,
  faCar,
  faPhone,
  faViber,
  faTelegram,
  faWhatsapp,
  faFacebookF,
  faInstagram
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
