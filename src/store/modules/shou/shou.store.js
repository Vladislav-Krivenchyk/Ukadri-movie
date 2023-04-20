import Vue from "vue";

const  state = {
    productShou: [],

}
const  actions = {
    getShou({commit}) {
        return  Vue.axios.get('http://localhost:3004/shou').then(result => {
            commit('SET_PARAMS_SHOU', result.data)
        }).catch((error) => {
            return console.log(error)
        })
    },
}
const  mutations = {
    SET_PARAMS_SHOU(state, payload) {
        state.productShou = payload
    },

}
const  getters = {
    getShouState: state => state.productShou,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}