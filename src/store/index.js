import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import api from "@/api/api"
import axios from "axios"
import bootstrap from "bootstrap"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        modalStatus: false,
    },

    getters: {
        showModalGetter(state) {
            return state.modalStatus;
        }
    },

    actions: {
        getGamesByIdAction() {
            api.getGamesById().then(response => {
            })
        },

        setModalStatusAction(context, status) {
            context.commit("setModalStatusMutation", status);
        }
    },

    mutations: {
        setModalStatusMutation(state, status) {
            state.modalStatus = status;
        }
    },
})
