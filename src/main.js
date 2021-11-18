import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
library.add(fasFaStar, farFaStar);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
