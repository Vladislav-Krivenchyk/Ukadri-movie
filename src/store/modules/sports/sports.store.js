import Vue from "vue";

const  state = {
    productSerials: [],

}
const  actions = {
    getSport({commit}) {
        return  Vue.axios.get('http://localhost:3003/sports').then(result => {
            commit('SET_PARAMS_SPORT', result.data)
        }).catch((error) => {
            return console.log(error)
        })
    },

}
const  mutations = {
    SET_PARAMS_SPORT(state, payload) {
        state.productSerials = payload
    },

}
const  getters = {
    getSportState: state => state.productSerials,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}