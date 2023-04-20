import Vue from "vue";

const  state = {
    productPopular: [],

}
const  actions = {
    getPopular({commit}) {
        return  Vue.axios.get('http://localhost:3005/popular').then(result => {
            commit('SET_PARAMS_POPULAR', result.data)
        }).catch((error) => {
            return console.log(error)
        })
    },

}
const  mutations = {
    SET_PARAMS_POPULAR(state, payload) {
        state.productPopular = payload
    },

}
const  getters = {
    getPopularState: state => state.productPopular,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}