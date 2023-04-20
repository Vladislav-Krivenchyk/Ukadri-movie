import Vue from "vue";

const  state = {
        productFilms: [],

}
const  actions = {
        getFilms({commit}) {
           return  Vue.axios.get('http://localhost:3000/product').then(result => {
               commit('SET_PARAMS_FILMS', result.data)
           }).catch((error) => {
               return console.log(error)
           })
        },

}
const  mutations = {
    SET_PARAMS_FILMS(state, payload) {
        state.productFilms = payload
    },

}
const  getters = {
    getFilmState: state => state.productFilms,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}