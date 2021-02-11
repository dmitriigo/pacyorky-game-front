import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import api from "@/api/api"
import axios from "axios"
import bootstrap from "bootstrap"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },

    getters: {

    },

    actions: {
        getGamesByIdAction() {
            api.getGamesById().then(response => {
            })
        },
    },

    mutations: {

    }
})
