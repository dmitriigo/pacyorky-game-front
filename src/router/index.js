import Vue from "vue";
import Router from 'vue-router'
import IndexDesktop from "@/components/desktopApp/IndexDesktop";
import IndexMobile from "@/components/mobileApp/IndexMobile";
import GamesDesktop from "@/components/desktopApp/GamesDesktop";
import GamesMobile from "@/components/mobileApp/GamesMobile";


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      components: {
        desktop: IndexDesktop,
        mobile: IndexMobile
      }
    },
    {
      path:'/games',
      components: {
        desktop: GamesDesktop,
        mobile: GamesMobile
      }
    }]
})
