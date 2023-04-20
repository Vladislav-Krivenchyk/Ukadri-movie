<template>
  <div class="main-page">
    <div class="main-content" v-if="getFilm.length">
      <div class="main-intro">
        <h3 style="color: #fff">Мультфильмы на сегодня</h3>
        <div style="display: flex">
          <div @click="cubick">
            <icon-cubick icon-style="margin-right: 10px" style="cursor: pointer"/>
          </div>
          <div @click="cubick">
            <icon-cubick-list style="cursor: pointer"/>
          </div>
        </div>
      </div>
      <div v-if="!isTiles">
        <movies-post>
          <template #default>
            <div class="main-inner">
              <div
                  v-for="(item, i) in paginationMovies"
                  :key="item.id"
                  @click="getItem(item.article)"
                  @mouseover="overlayMouse = i"
                  @mouseleave="overlayMouse = null"

              >
                <div class="post">
                  <div class="post-data">
                    <span>{{item.year}}</span>
                  </div>
                  <div class="post-img" v-if="overlayMouse === i"  :class="{'overlay-hover': overlayMouse === i }">
                    <img :src="require('@/assets/images/cartoons/' + item.img)" alt="" class="post shadow">
                  </div>
                  <div class="post-img" v-else>
                    <img :src="require('@/assets/images/cartoons/' + item.img)" alt="" class="post shadow">
                  </div>
                  <div class="post-item">
                    <div class="post-data">
                      <span>{{item.year}}</span>
                    </div>
                    <div class="post-img">
                      <img :src="require('@/assets/images/cartoons/' + item.img)" alt="" >
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </template>
        </movies-post>
        <div class="pagination" v-if="getFilm.length  >= 10">
          <div @click="getPerOne" class="pagination__prev-page">
            <icon-arrow-per/>
          </div>
          <div v-for="(page, index) in pages"
               :key="index"
               class="pagination-pages"
               @click="pageClick(page)"
          >{{page}}
          </div>
          <div @click="getPerLast" class="pagination__next-page">
            <icon-arrow-per style="transform: rotate(-180deg)"/>
          </div>
        </div>
      </div>
      <div v-else>
        <movies-post>
          <template #default>
            <div class="main-inner-tiles">
              <div
                  v-for="(item, i) in paginationMovies"
                  :key="item.id"
                  @click="getItem(item.article)"
                  @mouseover="overlayMouse = i"
                  @mouseleave="overlayMouse = null"

              >
                <div class="post">
                  <div class="post-data">
                    <span>{{item.year}}</span>
                  </div>
                  <div class="post-img" v-if="overlayMouse === i"  :class="{'overlay-hover': overlayMouse === i }">
                    <img :src="require('@/assets/images/cartoons/' + item.img)" alt="" class="post shadow" style="height: 700px">
                  </div>
                  <div class="post-img" v-else>
                    <img :src="require('@/assets/images/cartoons/' + item.img)" alt="" class="post shadow" style="height: 700px">
                  </div>
                  <div class="post-item">
                    <div class="post-data">
                      <span>{{item.year}}</span>
                    </div>
                    <div class="post-img">

                      <img :src="require('@/assets/images/cartoons/' + item.img)" alt="" style="height: 700px">
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </template>
        </movies-post>
      </div>
    </div>
    <div v-else>
      <h3 class="mp-error">Контент еще не добавлен</h3>
    </div>
  </div>
</template>

<script>
import IconCubick from "@/assets/icons/IconCubick.vue";
import IconCubickList from "@/assets/icons/IconCubickList.vue";
import {mapActions, mapGetters} from "vuex";
import IconArrowPer from "@/assets/icons/IconArrowPer.vue";
import MoviesPost from "@/components/films/MoviesPost.vue";
export default {
  name: "CartoonFilm",
  data() {
    return {
      isTiles: false,
      pageNumber: 1,
      moviePerPage: 10,
      overlayMouse: null
    }
  },
  components: {
    IconArrowPer,
    MoviesPost,
    IconCubickList,
    IconCubick,
  },
  computed: {
    ...mapGetters('cartoonsStore', {
      getFilm: 'getCartoonsState'
    }),
    pages() {
      return Math.ceil(this.getFilm.length / 10)
    },
    paginationMovies() {
      let form  = (this.pageNumber -1 ) * this.moviePerPage
      let to = form + this.moviePerPage
      return this.getFilm.slice(form, to)
    }
  },
  methods: {
    ...mapActions('cartoonsStore', {
      getFilms: 'getCartoons'
    }),
    getItem(film) {
      this.$router.push({name: 'cartoonsItem', query: { 'card': film }})
    },
    pageClick(page) {
      this.pageNumber = page
    },
    getPerOne() {
      this.pageNumber = 1
    },
    getPerLast() {
      this.pageNumber = this.pages
    },
    cubick() {
      this.isTiles = !this.isTiles
    }
  },
  async mounted() {
    await this.getFilms()
  }

}
</script>

<style lang="sass" scoped>
@import "@/css/src/partials/_colors.sass"


.mp-error
  color: #FFFFFF
  text-align: center


h3
  font-family: 'Roboto Condensed'
  font-weight: 700
  font-size: 30px
  line-height: 38px
  letter-spacing: 0.04em

.pagination
  display: flex
  align-items: center
  padding-top: 40px
  max-width: 500px
  padding-bottom: 40px

  &-pages
    cursor: pointer
    color: #FFFFFF
    width: 30px
    height: 30px
    border: 1px solid #FFFFFF
    background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
    display: flex
    justify-content: center
    align-items: center
    &:hover
      background: #FFFFFF
      transition: 0.9s
      color: #000000
  &__prev-page
    width: 30px
    height: 30px
    border: 1px solid #FFFFFF
    display: flex
    align-items: center
    justify-content: center
    border-top-left-radius: 12px
    border-bottom-left-radius: 12px
    background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
  &__next-page
    width: 30px
    height: 30px
    border: 1px solid #FFFFFF
    display: flex
    align-items: center
    justify-content: center
    border-top-right-radius: 12px
    border-bottom-right-radius: 12px
    background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)


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
    width: 100%
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
    width: 101%
    transition: opacity .75s ease 0s,-webkit-filter .75s ease 0s
    -o-transition: filter .75s ease 0s,opacity .75s ease 0s
    transition: filter .75s ease 0s,opacity .75s ease 0s
    transition: filter .75s ease 0s,opacity .75s ease 0s,-webkit-filter .75s ease 0s



  &-data
    position: absolute
    top: 12px
    display: flex
    align-items: center
    justify-content: center
    width: 75px
    height: 20px
    border-radius: 18px
    background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.56)
    z-index: 2
    span
      font-family: 'Quicksand'
      font-style: normal
      font-weight: 700
      font-size: 10px
      line-height: 12px
      color: $white-1
  &-img
    cursor: pointer
    transition: 0.75s ease
  img
    width: 100%
    height: 376px
    border-radius: 12px
    @media(max-width: 1366px)
      height: 350px


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

.overlay-hover
  cursor: pointer
  filter: blur(14px) opacity(.95)

</style>