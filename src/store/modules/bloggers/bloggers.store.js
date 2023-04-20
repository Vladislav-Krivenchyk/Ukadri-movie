import Vue from "vue";

const  state = {
    productBloggers: [],

}
const  actions = {
    getBloggers({commit}) {
        return  Vue.axios.get('#').then(result => {
            commit('SET_PARAMS_BLOGGERS', result.data)
        }).catch((error) => {
            return console.log(error)
        })
    },

}
const  mutations = {
    SET_PARAMS_BLOGGERS(state, payload) {
        state.productBloggers = payload
    },

}
const  getters = {
    getBloggersState: state => state.productBloggers,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}