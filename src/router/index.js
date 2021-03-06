import Vue from "vue";
import Router from 'vue-router'
import GamesDesktop from "@/components/desktopApp/GamesDesktop";
import GameDesktop from "@/components/desktopApp/GameDesktop";
import HomePage from "@/components/desktopApp/HomePage";
import GameDescription from "@/components/desktopApp/GameDescription";
import BoardGame from "@/components/desktopApp/BoardGame";
import GameRules from "@/components/desktopApp/GameRules";
import GameDashboard from "@/components/desktopApp/GameDashboard"


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage,
    },

    {
      path: "/game-description",
      component: GameDescription,
    },

    {
      path: "/game-rules",
      component: GameRules,
    },

    {
      path: "/board-game",
      component: BoardGame,
    },

    {
      path: "/game-dashboard",
      component: GameDashboard,
    },

    {
      path: '/games',
      component: GamesDesktop,
    },

    {
      path: '/game/:id',
      component: GameDesktop,
    }]
})
