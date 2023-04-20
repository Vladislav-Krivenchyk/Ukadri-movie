import Vue from 'vue'
import Vuex from 'vuex'
import filmsStore from "@/store/modules/films/films.store";
import cartoonsStore from "@/store/modules/cartoons/cartoons.store";
import serialsStore from "@/store/modules/serials/serials.store";
import sportsStore from "@/store/modules/sports/sports.store";
import shouStore from "@/store/modules/shou/shou.store";
import tvStore from "@/store/modules/tv/tv.store";
import bloggersStore from "@/store/modules/bloggers/bloggers.store";
import popularStore from "@/store/modules/popular/popular.store";
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    filmsStore,
    cartoonsStore,
    serialsStore,
    sportsStore,
    shouStore,
    tvStore,
    bloggersStore,
    popularStore
  }
})
