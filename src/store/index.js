import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import api from "@/api/api"
import axios from "axios"
import bootstrap from "bootstrap"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        modalStatus: false,
        errorCode: "",
    },

    getters: {
        modalStatusGetter(state) {
            return state.modalStatus;
        },

        errorCodeGetter(state) {
            return state.errorCode;
        }
    },

    actions: {
        getGamesByIdAction() {
            api.getGamesById().then(response => {
            })
        },

        setModalStatusAction(context, status) {
            context.commit("setModalStatusMutation", status);
        },

        setErrorCodeAction(context, errorCode) {
            context.commit("setErrorCodeMutation", errorCode);
        }
    },

    mutations: {
        setModalStatusMutation(state, status) {
            state.modalStatus = status;
        },

        setErrorCodeMutation(state, errorCode) {
            state.errorCode = errorCode;
        }
    },
})