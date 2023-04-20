import Vue from "vue";

const  state = {
    productTV: [],

}
const  actions = {
    getTv({commit}) {
        return  Vue.axios.get('#').then(result => {
            commit('SET_PARAMS_TV', result.data)
        }).catch((error) => {
            return console.log(error)
        })
    },

}
const  mutations = {
    SET_PARAMS_TV(state, payload) {
        state.productTV = payload
    },

}
const  getters = {
    getTVState: state => state.productTV,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}