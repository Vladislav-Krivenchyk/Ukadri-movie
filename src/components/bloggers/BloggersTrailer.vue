<template>
  <div class="main-page">
<!--    <div class="movies-video">-->
<!--      <div style="display: flex">-->
<!--        <div class="movies-desc">-->
<!--          <div class="movies-desc-h3">-->
<!--            <h3>{{getTrailer.name}}</h3>-->
<!--          </div>-->
<!--          <base-rating :stars="getTrailer.rating"/>-->
<!--          <span>{{getTrailer.trailer}}</span>-->
<!--          <div><strong>страна:</strong><span class="movies-person-trailer">{{getTrailer.country}}</span></div>-->
<!--          <div><strong>режисер:</strong><span class="movies-person-trailer">{{getTrailer.director}}</span></div>-->
<!--          <div><strong>жанры:</strong><span class="movies-person-trailer">{{getTrailer.genre}}</span></div>-->
<!--          <div><strong>час:</strong><span class="movies-person-trailer">{{getTrailer.time}}</span></div>-->
<!--          <div><strong>в ролях:</strong><span class="movies-person-trailer-starts">{{getTrailer.starts}}</span></div>-->
<!--          <base-button-->
<!--              @click="transitionFilm"-->
<!--              v-ripple-->
<!--              class="movies-btn"-->
<!--          ><icon-play/>Перегляд</base-button>-->
<!--        </div>-->
<!--        <div class="movie-video">-->
<!--          <video-component :data-poster="getTrailer.img" />-->
<!--          <div >-->
<!--            <span>{{getTrailer.desc}}</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div style="display: flex; position: absolute; right: 0; top: 5px; width: 22%" >-->
<!--          <div class="mp-explore">-->
<!--            <transition name="active">-->

<!--              <div :class="{'no-active-menu': isGallery === false }">-->
<!--                <div class="mp-menu" :class="{'active-menu': isGallery}" >-->
<!--                  <div :class="{'no-active-marker': isGallery === false}">-->
<!--                    <div class="mp-marker" :class="{'active-marker': isGallery}" @click="showGallery">-->
<!--                      <icon-marker/>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <span @click="showGallery"> More to explore</span>-->
<!--                </div>-->
<!--              </div>-->

<!--            </transition>-->
<!--          </div>-->
<!--          <div v-if="isGallery" class="mp-gallery">-->
<!--            <div v-for="episode in getTrailerItem"-->
<!--                 :key="episode.id"-->
<!--                 style="margin-bottom: 10px"-->
<!--                 :class="[ {'nomination-gallery': isGallery}]"-->


<!--            >-->
<!--              <div class="mp-episode">-->
<!--                <h3>{{episode.name}}</h3>-->
<!--                <div class="mp-episode-rating">-->
<!--                  <base-rating :stars="episode.rating" styleRating="width: 100%"/>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="mp-post">-->
<!--                <div class="mp-post-img">-->
<!--                  <img :src="require('@/assets/images/bloggers/' + episode.img)" alt="" style="width: 220px" class="mp-post shadow">-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="mp-post-item" @click="transitionMovie(episode.article)">-->
<!--                <div class="mp-post-img">-->
<!--                  <img :src="require('@/assets/images/bloggers/' + episode.img)" alt="" style="width: 220px">-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div  class="mp-episode-fragments">-->
<!--      <div v-for="el in getEpisodes.episodes"-->
<!--           :key="el.id"-->
<!--           @click="getElementSlide(el.article)"-->
<!--      >-->
<!--        <img  :src="require('@/assets/images/bloggers/episodes/' + el.img)" alt="">-->
<!--      </div>-->
<!--    </div>-->
<!--    <div v-if="isActiveSlide" class="mp-icon-close" @click="close">-->
<!--      <icon-close/>-->
<!--    </div>-->
<!--    <div class="mp-episode-slide" v-if="isActiveSlide">-->
<!--      <ssr-carousel :slides-per-page='1'-->
<!--                    loop-->
<!--                    no-drag-->
<!--                    show-arrows-->
<!--                    v-if="keyEpisode"-->
<!--      >-->
<!--        <div-->
<!--            v-for="item in getEpisodes.slideEpisodes"-->
<!--            :key="item.id"-->
<!--        >-->
<!--          <div style="display: flex;-->
<!--    align-items: center;-->
<!--    justify-content: center;">-->
<!--            <img :src="require('@/assets/images/bloggers/slideEpisode/' + item.img)" alt="">-->
<!--          </div>-->
<!--        </div>-->
<!--      </ssr-carousel>-->
<!--    </div>-->
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
// import BaseRating from "@/assets/baseComponents/BaseRating.vue";
// import BaseButton from "@/assets/baseComponents/BaseButton.vue";
// import IconPlay from "@/assets/icons/IconPlay.vue";
// import VideoComponent from "@/assets/baseComponents/VideoComponent.vue";
// import IconMarker from "@/assets/icons/IconMarker.vue";
// import SsrCarousel from "vue-ssr-carousel";
// import ssrCarouselCss from 'vue-ssr-carousel/index.css'
// import IconClose from "@/assets/icons/IconClose.vue";
export default {
  name: "BloggersTrailer",
  components: {
    // IconClose,
    // IconMarker, VideoComponent,
    // IconPlay, BaseButton, BaseRating,
    // SsrCarousel
  },
  data() {
    return {
      isGallery: null,
      keyEpisode: null,
      // ssrCarouselCss,
      isActiveSlide: false
    }
  },
  computed: {
    ...mapGetters('bloggersStore', {
      getTrailerItem: 'getBloggersState'
    }),
    getEpisodes() {
      return this.getTrailer
    },
    getTrailer() {
      let result = {}
      this.getTrailerItem.find(item => {
        if(item.article === this.$route.query.card) {
          result = item
        }
      })
      return result
    },
  },
  methods: {
    ...mapActions('bloggersStore', ['getBloggers']),
    close() {
      this.isActiveSlide = false
    },
    getElementSlide(article) {
      this.keyEpisode = article
      this.isActiveSlide  = true
    },
    showGallery() {
      this.isGallery = !this.isGallery
    },
    transitionMovie(article) {
      this.$router.push({name: 'bloggersPostItem', query: { 'card': article }})
    },
    transitionFilm() {
      this.$router.push({name: 'bloggersVideo', query: { 'card': this.getTrailer.article}})
    },
  },
  mounted() {
    this.getBloggers()
  },
}
</script>

<style lang="sass" scoped>
.main-page
  position: relative

.mp-post-item
  position: absolute
  top: 0
  left: 26px
  cursor: pointer
  @media (width: 1366px)
    left: 13px
  img
    border-radius: 12px

.mp-icon-close
  position: absolute
  top: 0
  right: -30px
  cursor: pointer
  z-index: 150
  @media (max-width: 1366px)
    right: 40px


.movies-video
  position: relative
  width: 100%
  padding-left: 15px

.movie-video
  display: flex
  flex-direction: column
  width: 49%
  //padding-left: 90px
  padding-top: 20px
  span
    font-family: 'Roboto Condensed'
    font-weight: 300
    font-size: 16px
    line-height: 27px
    color: #fff

.movies-desc
  display: flex
  flex-direction: column
  justify-content: space-between
  width: 325px
  &-h3
    color: #fff
    width: 350px
    cursor: default

  span
    font-family: 'Quicksand'
    font-style: normal
    font-weight: 500
    font-size: 16px
    line-height: 20px
    color: #D9D9D9!important
    text-transform: capitalize
  strong
    background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    text-fill-color: transparent
    text-transform: capitalize
    @extend span

.movies-btn
  background: #0AA3E4
  border-radius: 18px
  text-transform: capitalize
  width: 169px
  height: 36px
  margin-top: 20px
  font-weight: 600
  font-size: 14px
  background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
.movies-person
  display: flex
  flex-direction: column
  width: 61%
  color: #0AA3E4!important
  text-transform: capitalize
  @extend span
  &-trailer
    margin-left: 15px
    color: #D9D9D9
.mp-explore
  position: absolute
  right: 17px
  top: 30px
  transform: rotate(-90deg)
  height: 59px
  z-index: 22
  span
    font-family: 'Roboto Condensed'
    font-weight: 700
    font-size: 20px
    line-height: 27px
    color: #0AA3E4
    cursor: pointer





///////// gallery
.mp-gallery
  //margin-right: 16px
  animation-name: gallery
  animation-duration: 0.7s
  animation-fill-mode: forwards
  height: 920px
  overflow-y: scroll
  width: 100%
  @keyframes gallery
    from
      transform: scale(0.9)
      opacity: 0.6
    to
      transform: scale(1)
      opacity: 1

.mp-gallery::-webkit-scrollbar
  background-color: #13161a   /* цвет бегунка */



.nomination-gallery
  margin-right: 21px
  animation-name: nomination
  animation-duration: 0.7s
  animation-fill-mode: forwards
  @keyframes nomination
    from
      transform: scale(0)
      opacity: 0.6
    to
      transform: scale(1)
      opacity: 1


////////////// menu
.mp-menu
  position: absolute
  width: 136px
  left: -69px

.active-menu
  position: absolute
  width: 163px
  left: -97px
  animation: example
  animation-duration: 0.7s
  animation-fill-mode: forwards
  @keyframes example
    from
      transform: translateY(0px)
    to
      text-transform: uppercase
      transform: translateY(-300px)


.no-active-menu
  position: absolute
  width: 163px
  left: -10px
  animation: no-active-menu
  animation-duration: 0.7s
  animation-fill-mode: forwards
  @keyframes no-active-menu
    from
      transition: none
      transform: translateY(-300px)
    to
      transition: none
      transform: translateY(0px)

/////////////////// marker
.mp-marker
  height: 25px
  width: 25px
  transform: rotate(90deg)
  margin: 0 auto
  cursor: pointer


.active-marker
  cursor: pointer
  animation-name: mp-marker
  animation-duration: 0.7s
  animation-fill-mode: forwards
  @keyframes mp-marker
    from
      transform: translateX(0px)
    to
      transform: translateX(-92px) translateY(28px) rotate(90deg)


.no-active-marker
  animation-name: return-marker
  animation-duration: 0.7s
  animation-fill-mode: forwards
  @keyframes return-marker
    from
      transform: translateX(-92px) translateY(28px) rotate(90deg)
    to
      transform: translateX(0px)


//////////////// episode ///////////  and animation
.mp-episode
  position: absolute
  bottom: 0
  width: 100%
  padding: 2px 2px
  h3
    font-family: 'Roboto Condensed'
    font-style: normal
    font-weight: 700
    font-size: 20px
    line-height: 27px
    color: #FFFFFF
    position: absolute
    z-index: 1
    left: 29px
    bottom: 20px
  &-rating
    display: flex
    justify-content: space-between
    align-items: center
    position: absolute
    z-index: 1
    bottom: -7px
    left: 29px
    span
      font-family: 'Roboto Condensed'
      font-style: normal
      font-weight: 700
      font-size: 13px
      line-height: 18px
      color: #FFFFFF



.mp-episode-fragments
  display: flex
  width: 72%
  justify-content: space-between
  align-items: center
  margin-top: 20px
  img
    height: 175px

.mp-episode-slide
  display: flex
  align-items: center
  justify-content: center
  position: absolute
  top: 0
  left: 0
  right: 0
  img
    height: 100%
    width: 100%
    @media (max-width: 1366px)
      width: 1200px



////////////
.ssr-carousel-track
  justify-content: center!important
  align-items: center!important
  height: 200px


.mp-post
  position: relative
  margin: 0 auto
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
.mp-post-img
  img
    border-radius: 12px
  &-picture
    height: 100%
    width: 100%
    border-radius: 12px
</style>