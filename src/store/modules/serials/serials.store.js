import Vue from "vue";

const  state = {
    productSerials: [],

}
const  actions = {
    getSerials({commit}) {
        return  Vue.axios.get('http://localhost:3002/serials').then(result => {
            commit('SET_PARAMS_SERIALS', result.data)
        }).catch((error) => {
            return console.log(error)
        })
    },

}
const  mutations = {
    SET_PARAMS_SERIALS(state, payload) {
        state.productSerials = payload
    },

}
const  getters = {
    getSerialsState: state => state.productSerials,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}