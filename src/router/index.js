import Vue from "vue";
import Router from 'vue-router'
import IndexDesktop from "@/components/desktopApp/IndexDesktop";
import IndexMobile from "@/components/mobileApp/IndexMobile";
import GamesDesktop from "@/components/desktopApp/GamesDesktop";
import GamesMobile from "@/components/mobileApp/GamesMobile";
import GameDesktop from "@/components/desktopApp/GameDesktop";
import GameMobile from "@/components/mobileApp/GameMobile";


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
    },
    {
      path:'/game/:id',
      components: {
        desktop: GameDesktop,
        mobile: GameMobile
      }
    }]
})
