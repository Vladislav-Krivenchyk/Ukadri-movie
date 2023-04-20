<template>
  <div class="main-page">
    <div class="main-content">
      <div style="position: relative">
        <div class="main-inner">
          <div
              v-for="(item, i) in Popular"
              :key="item.id"
              @mouseover="mouse = i"
              @mouseleave="mouse = null"

          >
            <div class="post" :style="
                      i === 0 ? {'width': '130%'} : {} &&
                      i === 1 ? {'width': '130%', 'margin-left': '113px'} : {} &&
                      i === 2 ? {'margin-left': '224px'} : {} &&
                      i === 3 ? {'width': '100%', 'margin-left': '0px'} : {} &&
                      i === 4 ? {'width': '130%', 'margin-left': '-245px'} : {} &&
                      i === 5 ? {'width': '130%', 'margin-left': '-133px'} : {} &&
                      i === 6 ? {'width': '130%', 'margin-left': '0px'} : {} &&
                      i === 7 ? {'width': '130%', 'margin-left': '113px'} : {} &&
                      i === 8 ? {'margin-left': '226px'} : {}"
                 v-if="width"
            >

              <div class="post-img" v-if="mouse === i"  :class="{'overlay-hover': mouse === i }">
                <img :src="require('@/assets/images/popular/images/' + item.img)" alt="" class="post shadow">
              </div>

              <div class="post-img" v-else>
                <img :src="require('@/assets/images/popular/images/' + item.img)" alt="" class="post shadow">
              </div>
              <div class="post-item">
                <div class="post-img">
                  <img :src="require('@/assets/images/popular/images/' + item.img)" alt="" >
                </div>
              </div>
            </div>
            <div class="post" :style="
                      i === 0 ? {'width': '130%'} : {} &&
                      i === 1 ? {'width': '130%', 'margin-left': '113px'} : {} &&
                      i === 2 ? {'margin-left': '224px'} : {} &&
                      i === 3 ? {'width': '100%', 'margin-left': '0px'} : {} &&
                      i === 4 ? {'width': '129%', 'margin-left': '-220px'} : {} &&
                      i === 5 ? {'width': '130%', 'margin-left': '-123px'} : {} &&
                      i === 6 ? {'width': '130%', 'margin-left': '0px'} : {} &&
                      i === 7 ? {'width': '130%', 'margin-left': '113px'} : {} &&
                      i === 8 ? {'margin-left': '226px'} : {}"
                 v-else
            >

              <div class="post-img" v-if="mouse === i"  :class="{'overlay-hover': mouse === i }">
                <img :src="require('@/assets/images/popular/images/' + item.img)" alt="" class="post shadow">
              </div>

              <div class="post-img" v-else>
                <img :src="require('@/assets/images/popular/images/' + item.img)" alt="" class="post shadow">
              </div>
              <div class="post-item">
                <div class="post-img">
                  <img :src="require('@/assets/images/popular/images/' + item.img)" alt="" >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "LandingViewYkadri",
  data() {
    return {
      mouse: null,
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
  },
  async mounted() {
    await this.getPopular()
    this.width = window.innerWidth > 1366

  }
}
</script>

<style lang="sass" scoped>
@import "@/css/src/partials/_colors.sass"

.main-inner
  grid-template-columns: repeat( 3, 5fr)

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