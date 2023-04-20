import Vue from "vue";

const  state = {
    productCartoons: [],

}
const  actions = {
    getCartoons({commit}) {
        return  Vue.axios.get('http://localhost:3001/cartoons').then(result => {
            commit('SET_PARAMS_CARTOONS', result.data)
        }).catch((error) => {
            return console.log(error)
        })
    },

}
const  mutations = {
    SET_PARAMS_CARTOONS(state, payload) {
        state.productCartoons = payload
    },

}
const  getters = {
    getCartoonsState: state => state.productCartoons,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}