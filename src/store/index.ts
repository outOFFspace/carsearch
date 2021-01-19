import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {CarObject} from "@/types"

Vue.use(Vuex);

const CARS_LIST_URL = 'https://gist.githubusercontent.com/bgdavidx/f92a8cf0fdceb1a9c3a7e11f4dfec646/raw/ff4946915162d57b8b699ae19d7f5cc1ed317746/car_response.json'

export default new Vuex.Store({
    state: {
        results: [],
        view: {}
    },
    mutations: {
        setResults(state, data): void {
            state.results = data
        },
        setViewData(state, data): void {
            state.view = data
        },
    },
    actions: {
        fetchCarsList({commit}): Promise<void> {
            return axios.get(CARS_LIST_URL).then((resp) => {
                if (resp?.data?.results) {
                    commit('setResults', resp.data.results)
                }
            }).catch((e) => {
                console.error('An error occurred, while fetching the cars list', e.message)
            })
        },
    },
    getters: {
        carsList: (state): CarObject[] => state.results,
        total: (state): number => state.results.length,
    }
})
