<template>
  <div class="main-page" v-if="getFilm">
<!--    <div class="main-content">-->
<!--      <div class="mp-inner">-->
<!--        <div class="mp-episode">-->
<!--          <div class="mp-description">-->

<!--            <div style="padding-right: 20px; width: 50%">-->
<!--              <h3>{{getFilm.name}}</h3>-->
<!--              <div style="display: flex; justify-content: space-between">-->
<!--                <h3 class="mp-episode-start" v-if="getFilm.textStart">{{getFilm.textStart}}</h3>-->
<!--                <h3 class="mp-episode-center" v-if="getFilm.textGreen">{{getFilm.textGreen}}</h3>-->
<!--                <h3 class="mp-episode-end" v-if="getFilm.textEnd">{{getFilm.textEnd}}</h3>-->
<!--              </div>-->
<!--              <div style="width: 338px">-->
<!--                <p>{{getFilm.desc}}</p>-->
<!--              </div>-->
<!--              <BaseRating  :stars="getFilm.rating"/>-->
<!--              <div class="mp-sections">-->
<!--                <div>-->
<!--                  <base-button button-style="-->
<!--                                               width: 169px;-->
<!--                                               height: 36px;-->
<!--                                               border-radius: 18px;-->
<!--                                               text-transform: inherit;-->
<!--                                               background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)"-->
<!--                               @click="goToTheMovie"-->
<!--                  >-->
<!--                    <icon-play/>Перегляд</base-button>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <span @click="goToTheTrailer">Трейлер</span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="post">-->
<!--              <div class="post-img">-->
<!--                <img :src="require('@/assets/images/bloggers/postItem/' + getFilm.imgTop)" class="post shadow" />-->
<!--              </div>-->
<!--              <div class="post-item">-->
<!--                <div class="post-img" >-->
<!--                  <img v-if="getFilm.imgTop" :src="require('@/assets/images/bloggers/postItem/' + getFilm.imgTop)"  />-->
<!--                </div>-->
<!--              </div>-->

<!--            </div>-->

<!--          </div>-->
<!--        </div>-->
<!--        <div class="mp-legends">-->
<!--          <h2>Наступний фільм</h2>-->
<!--          <div v-if="filmName && rating" @click="goToTheFilmWithSliders" class="mp-legends-link">-->
<!--            <div class="mp_scroll">-->
<!--              <span class="m_scroll_arrows unu"></span>-->
<!--              <span class="m_scroll_arrows doi"></span>-->
<!--              <span class="m_scroll_arrows trei"></span>-->
<!--            </div>-->
<!--            <div style="display: flex; flex-direction: column">-->
<!--              <h3>{{filmName}}</h3>-->
<!--              <div style="display: flex; justify-content: end; align-items: center">-->
<!--                <span>{{ratingSeparator}}</span>-->
<!--                <base-rating styleRating="width: 100%" :stars="rating"/>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="background-section" v-if="getFilm.imgTop">-->
<!--        <img :src="require('@/assets/images/bloggers/postItem/' + getFilm.imgTop)" style="width: 100%; height: 1200px" />-->
<!--      </div>-->
<!--      <div class="background-section" v-if="img">-->
<!--        <img :src="require('@/assets/images/bloggers/postItem/' + img)" style="width: 100%; height: 1200px" />-->
<!--      </div>-->
<!--      <div class="overlay"></div>-->
<!--    </div>-->
<!--    <div>-->
<!--      <carousel-3d-->
<!--          :perspective="0"-->
<!--          :space="400"-->
<!--          :display="5"-->
<!--          :height="490"-->
<!--          :width="310"-->
<!--          :controls-visible="true"-->
<!--          :controls-prev-html="'&#10092;'"-->
<!--          :controls-next-html="'&#10093;'"-->
<!--      >-->
<!--        <slide v-for="(slide, index ) in getCatsCard" :key="slide.id" :index="index" >-->
<!--          <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">-->
<!--            <img  :data-index="index"-->
<!--                  :src="require('@/assets/images/films/' + slide?.img )"-->
<!--                  @click="getParamsFilm(slide.name, slide.rating,  slide.ratingSeparator, slide.article, slide.img)"-->
<!--                  :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }"-->
<!--            />-->
<!--          </template>-->
<!--        </slide>-->
<!--      </carousel-3d>-->
<!--    </div>-->
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
// import BaseRating from "@/assets/baseComponents/BaseRating.vue";
// import BaseButton from "@/assets/baseComponents/BaseButton.vue";
// import IconPlay from "@/assets/icons/IconPlay.vue";
export default {
  name: "BloggersItem",
  components: {
    // IconPlay,
    // BaseButton,
    // BaseRating
  },
  data() {
    return {
      filmName: '',
      rating: 0,
      ratingSeparator: 0,
      article: '',
      img: ''
    }
  },
  computed: {
    ...mapGetters('bloggersStore', ['getBloggersState']),

    getCatsCard() {
      return this.getFilmState
    },
    getFilm() {
      let res = {}
      this.getFilmState.find(item => {
        if(item.article === this.$route.query.card) {
          res = item
        }
      })
      return res
    }
  },
  methods: {
    ...mapActions('bloggersStore', ['getBloggers']),

    getParamsFilm(name, rating, ratingSeparator, article, img ) {
      this.filmName = name
      this.rating = rating
      this.ratingSeparator = ratingSeparator
      this.article = article
      this.img = img
    },
    goToTheTrailer() {
      this.$router.push({name: 'bloggersTrailer', query: { 'card': this.getFilm.article}})
    },
    goToTheMovie() {
      this.$router.push({name: 'bloggersVideo', query: { 'card': this.getFilm.article}})
    },
    goToTheFilmWithSliders() {
      this.$router.push({name: 'bloggersPostItem', query: { 'card': this.article}})
    }
  },
  async mounted() {
    await this.getBloggers()
  }
}
</script>

<style lang="sass" scoped>
@import '@/css/src/mixins/arrow.mixin.sass'
@import '@/css/src/mixins/overlayImages.mixin.sass'
.background-section, .overlay
  height: 1200px
  position: absolute
  top: 0
  width: 100%

.overlay
  background: radial-gradient(circle at right top,transparent,rgba(19,22,26,.5)),radial-gradient(circle at left bottom,rgba(19,22,26,.75),transparent),linear-gradient(0deg,#13161a,transparent 40%),radial-gradient(circle at right bottom,transparent,rgba(19,22,26,.5)),radial-gradient(circle at left top,rgba(19,22,26,.75),transparent),linear-gradient(180deg,#13161a,transparent 30%)
  background: radial-gradient(circle at right top,transparent,rgba(19,22,26,.5)),radial-gradient(circle at left bottom,rgba(19,22,26,.75),transparent),-webkit-gradient(linear,left bottom,left top,from(#13161a),color-stop(40%,transparent)),radial-gradient(circle at right bottom,transparent,rgba(19,22,26,.5)),radial-gradient(circle at left top,rgba(19,22,26,.75),transparent),-webkit-gradient(linear,left top,left bottom,from(#13161a),color-stop(30%,transparent))

.main-content
  position: relative




.header
  background: none

.mp-inner
  position: relative
  z-index: 1
  width: 100%

.mp-sections
  display: flex
  width: 75%
  align-items: flex-end
  margin-top: 25px

.mp-description
  display: flex
  padding-bottom: 50px
  justify-content: space-between

.mp-episode
  h3
    font-family: 'Roboto Condensed'
    font-weight: 700
    font-size: 100px
    line-height: 91px
    color: #FFFFFF
    text-transform: uppercase
  &-start
    font-size: 35px !important
    line-height: 48px !important
    letter-spacing: 0.06em
    color: #FFFFFF
  &-center
    font-weight: 100 !important
    font-size: 35px !important
    line-height: 48px !important
    letter-spacing: 0.06em
    color: rgba(16, 176, 67, 1) !important

  &-end
    font-size: 35px !important
    line-height: 48px !important
    letter-spacing: 0.06em
    color: #FFFFFF
  p
    font-family: 'Roboto Condensed'
    font-weight: 300
    font-size: 12px
    line-height: 16px
    color: #F5F5F5
    margin-top: 20px
  span
    font-style: normal
    font-weight: 700
    font-size: 16px
    line-height: 20px
    background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    cursor: pointer
    padding-left: 37px
    &:after
      position: absolute
      content: ""
      width: 22px
      height: 1px
      margin-top: 19px
      margin-left: -54px
      background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
      transition: all 1s
    &:hover:after
      width: 52px

.mp-img
  border-radius: 12px
  width: 100%
  height: 545px

.mp-legends
  display: flex
  align-items: center
  justify-content: space-between
  &-link
    display: flex
    cursor: pointer
  h2
    font-weight: 700
    font-size: 30px
    line-height: 38px!important
    letter-spacing: 0.04em
    color: #FFFFFF

  h3
    text-transform: uppercase
    font-weight: 700
    font-size: 57px
    line-height: 78px!important
    color: #FFFFFF
    height: 59px
    cursor: pointer
  span
    font-weight: 700
    font-size: 30px
    line-height: 41px
    color: #FFFFFF
    margin-right: 10px

</style>