import Vue from "vue";
import Router from 'vue-router'
import PacyorkyGameDesktopApplication from "../components/desktopApp/PacyorkyGameDesktopApplication";
import PacyorkyGameMobileApplication from "../components/mobileApp/PacyorkyGameMobileApplication";


Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '',
      components: {
        desktop: PacyorkyGameDesktopApplication,
        mobile: PacyorkyGameMobileApplication
      }
    }]
})
