<template>
<main>
  <header class="main-header">
    <div class="inner">
      <div class="main-navigation">
        <div class="main-links">
          <div class="main-link">
            <router-link :to="$i18nRoute({name: 'moviesFilm'})">
              Фильмы
            </router-link>
          </div>
          <div class="main-link">
            <router-link :to="$i18nRoute({name: 'cartoonPage'})">
              Мультфильмы
            </router-link>
          </div>
          <div class="main-link">
            <router-link :to="$i18nRoute({name: 'pageTv'})">
              Телеканалы
            </router-link>
          </div>
          <div class="main-link">
            <router-link :to="$i18nRoute({name: 'serialsPage'})">
              Сериалы
            </router-link>
          </div>
        </div>

        <div class="main-link">
            <router-link :to="$i18nRoute({name: 'mainViewYkadri'})">
              <IconLogoYkadriWhite/>
            </router-link>
        </div>
        <div class="main-links">
          <div class="main-link">
            <router-link :to="$i18nRoute({name: 'pageSport'})">
              Спорт
            </router-link>
          </div>
          <div class="main-link">
            <router-link :to="$i18nRoute({name: 'pageBloggers'})">
              Блогеры
            </router-link>
          </div>
          <div class="main-link">
            <router-link :to="$i18nRoute({name: 'pageShou'})">
              Шоу
            </router-link>
          </div>
        </div>


        <div style="display: flex; align-items: center; width: 13%">
          <div style="width: 26%; display: flex; align-items: center">
            <icon-search icon-style="margin-right: 45px; margin-left: 45px" />
          </div>
            <div style="display: flex; align-items: center">
              <icon-online icon-style="margin-right: 45px" />
            </div>
                  <div class="main-link">
                    <span @click="click">
                       Выход
                    </span>
                  </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
        <router-view/>
      </div>
  <footer>

  </footer>
</main>
</template>

<script>
import IconLogoYkadriWhite from "@/assets/icons/IconLogoYkadriWhite.vue";
import iconSearch from "@/assets/icons/IconSearch.vue";
import iconOnline from "@/assets/icons/IconNotification.vue";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "MainLayout",
  components: {
    IconLogoYkadriWhite,
    iconSearch,
    iconOnline,
  },
  data() {
    return {
      postFilm: [],
      mouse: null,
      key: null,
      width: 0
    }
  },
  computed: {
    ...mapGetters('popularStore', {
      Popular: 'getPopularState'
    })
  },
  methods: {
    ...mapActions('popularStore', ['getPopular']),
    click() {
      if (sessionStorage.removeItem('token') && sessionStorage.removeItem('token')) {
          this.$router.push( {name: "landingViewYkadri", path: 'ykadri'} )
      }
      location.reload(false)
    }
  },
 async mounted() {
   await this.getPopular()
   this.width = window.innerWidth > 1366

 }
}
</script>

<style lang="sass" scoped>
@import "@/css/src/partials/_colors.sass"

.main-header
  background: #13161a

.main-inner
  grid-template-columns: repeat( 3, 5fr)

.main-navigation
  max-width: 1400px
  display: flex
  padding-left: 30px
  padding-right: 30px
  margin: 0 auto

.main-links
  display: flex
  width: 45%
  align-items: center

.main-link
  flex: 1
  flex-shrink: 1
  flex-grow: 1
  text-align: center
  padding-left: 5px
  padding-right: 5px
  //&:last-child
  //  text-align: right
  a
    font-family: 'Roboto Condensed'
    position: relative
    cursor: pointer
    font-weight: 600
    font-size: 16px
    line-height: 20px
    color: #FFFFFF
    text-decoration: none
    white-space: nowrap
    &:after
      position: absolute
      content: ""
      width: 0
      height: 1px
      bottom: 0
      left: 0
      right: 0
      background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
      transition: all 1s
    &:hover:after
      width: 100%
  span
    @extend a


.post
  position: relative
  &:before
    background: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.8)),color-stop(80%,rgba(0,0,0,0)))
    background: -o-linear-gradient(bottom,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 80%)
    background: linear-gradient(0deg,rgba(0,0,0,.8),rgba(0,0,0,0) 80%)
    border-radius: 10px
    bottom: -5px
    content: ""
    display: block
    -webkit-filter: blur(7px) opacity(.75)
    filter: blur(7px) opacity(.75)
    height: 100%
    opacity: 1
    pointer-events: none
    position: absolute
    -webkit-transition: opacity .75s
    -o-transition: opacity .75s
    transition: opacity .75s
    z-index: 2
    transition: opacity .75s ease 0s,-webkit-filter .75s ease 0s
    -o-transition: filter .75s ease 0s,opacity .75s ease 0s
    transition: filter .75s ease 0s,opacity .75s ease 0s
    transition: filter .75s ease 0s,opacity .75s ease 0s,-webkit-filter .75s ease 0s
  p
    font-family: 'Quicksand'
    font-weight: 500
    font-size: 13px
    line-height: 16px
    color: #FFFFFF
  &.shadow
    border-radius: 5px
    -webkit-filter: blur(7px) opacity(.75)
    filter: blur(7px) opacity(.75)
    left: -.5%
    top: 2px
    height: 276px
    transition: opacity .75s ease 0s,-webkit-filter .75s ease 0s
    -o-transition: filter .75s ease 0s,opacity .75s ease 0s
    transition: filter .75s ease 0s,opacity .75s ease 0s
    transition: filter .75s ease 0s,opacity .75s ease 0s,-webkit-filter .75s ease 0s


  &-img
    cursor: pointer
    transition: 0.75s ease
  img
    height: 276px
    border-radius: 12px

  &-name
    span
      position: absolute
      bottom: 0
      left: 12px
      font-family: 'Roboto Condensed'
      font-style: normal
      font-weight: 700
      font-size: 20px
      line-height: 41px
      color: $white-1
      z-index: 1

.post-item
  position: absolute
  top: 0
  left: 0
  right: 0

.overlay-hover
  cursor: pointer
  filter: blur(14px) opacity(.95)
</style>