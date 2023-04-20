<template>
  <div class="main-page" v-if="getFilm">
    <div class="movies-video">
      <div class="movies-gallery">
        <h3 class="movies-gallery-h3">{{getFilm.name}}</h3>
        <base-rating :stars="getFilm.rating" style-rating="margin-left: 27px"/>
        <span @click="transitionTrailer" class="movies-link">
          Trailer
        </span>
        <div class="mp-collection">
          <span>Дивитися більше</span>
          <div class="mp-gallery-episodes">
            <div v-for="episode in getFilmCollection"
                 :key="episode.id"
                 @click="transitionMovie(episode.article)"
                 class="mp-gallery-item"


            >
              <div class="mp-episode">
                <div class="mp-episode-rating">
                  <base-rating :stars="episode.rating" styleRating="width: 100%; z-index: 122;"/>
                  <h3>{{episode.name}}</h3>
                </div>
              </div>
              <div class="mp-post">
                <div class="mp-post-img">
                  <img :src="require('@/assets/images/serials/' + episode.img)" alt="" style="width: 250px" class="mp-post shadow">
                </div>
              </div>
              <div class="mp-post-item">
                <div class="mp-post-img">
                  <img :src="require('@/assets/images/serials/' + episode.img)" alt="" style="width: 250px">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mp-video">
        <video-component :data-poster="require('@/assets/images/serials/' + getFilm.img)" />
        <div class="mp-comment">
          <base-textarea
              label="Comment"
              label-style="font-family: 'Roboto Condensed'; font-weight: 700; font-size: 24px; line-height: 33px; color: #FFFFFF; margin-bottom: 25px"
              placeholder="Comment..."
              textareaStyle="background: #13161a; color: #fff; height: 30px; border-bottom: 1px solide #fff "
              v-model="textarea"
          />
          <div style="position: relative">
            <base-button @click="sendComment"
                         class="mp-btn"
            >
              Відправити
            </base-button>
            <div v-if="form.img && form.comment">
              <span style="color: #FFFFFF">{{form.comment}}</span>
              <img :src="form.img" alt="" width="50" height="50">
            </div>
          </div>
        </div>
      </div>
      <div class="mp-collection">
        <span>Дивитися більше</span>
        <div class="mp-gallery-episodes">
          <div v-for="episode in getFilmCollection"
               :key="episode.id"
               @click="transitionMovie(episode.article)"
               class="mp-gallery-item"


          >
            <div class="mp-episode">
              <h3>{{episode.name}}</h3>
              <div class="mp-episode-rating">
                <base-rating :stars="episode.rating" styleRating="width: 100%; z-index: 122;"/>
              </div>
            </div>
            <div class="mp-post">
              <div class="mp-post-img">
                <img :src="require('@/assets/images/serials/' + episode.img)" alt="" style="width: 250px" class="mp-post shadow">
              </div>
            </div>
            <div class="mp-post-item">
              <div class="mp-post-img">
                <img :src="require('@/assets/images/serials/' + episode.img)" alt="" style="width: 250px">
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
import BaseRating from "@/assets/baseComponents/BaseRating.vue";
import VideoComponent from "@/assets/baseComponents/VideoComponent.vue";
import BaseTextarea from "@/assets/baseComponents/BesaTextarea.vue";
import BaseButton from "@/assets/baseComponents/BaseButton.vue";
export default {
  name: "SerialsVideo",
  components: {
    BaseButton,
    BaseTextarea,
    VideoComponent,
    BaseRating
  },
  data() {
    return {
      textarea: '',
      form: {}
    }
  },
  computed: {
    ...mapGetters('serialsStore', {
      getFilmItem: 'getSerialsState'
    }),
    getFilmCollection() {
      return this.getFilmItem
    },
    getFilm() {
      let result = {}
      this.getFilmItem.find(item => {
        if(item.article === this.$route.query.card) {
          result = item
        }
      })
      return result
    },
  },
  methods: {
    ...mapActions('serialsStore', ['getSerials']),
    transitionMovie(article) {
      this.$router.push({name: 'serialsPublicItem', query: { 'card': article }})
    },
    sendComment() {
      this.form = {
        comment: this.textarea,
        img: '@/assets/commentForm/1.png',
      }
      console.log(this.form)
      this.textarea = ''
    },
    transitionTrailer() {
      this.$router.push({name: 'serialsTrailer', query: { 'card': this.getFilm.article}})
    }
  },
  mounted() {
    this.getFilms()
  },
}
</script>

<style lang="sass" scoped>
.movies-video
  display: flex
  justify-content: space-between
  width: 100%
  padding-top: 20px

.mp-video
  animation: scale-page
  animation-duration: 0.7s
  animation-fill-mode: forwards
  @keyframes scale-page
    from
      transform: scale(0.9)
      opacity: 0.7
    to
      transform: scale(1)
      opacity: 1

  h3
    font-family: 'Roboto Condensed'
    font-weight: 700
    font-size: 24px
    line-height: 33px
    color: #FFFFFF
    margin-bottom: 25px

.mp-comment
  position: relative
  margin-top: 20px

.movies-recs-list
  img
    margin-bottom: 20px

.movies-gallery
  padding-right: 10px
  animation: scale-page
  animation-duration: 0.7s
  animation-fill-mode: forwards
  @keyframes scale-page
    from
      transform: scale(0.9)
      opacity: 0.7
    to
      transform: scale(1)
      opacity: 1
  &-h3
    color: #FFFFFF!important
    padding-left: 27px


.movies-link
  font-style: normal
  font-weight: 700
  font-size: 16px
  line-height: 20px
  background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  background-clip: text
  cursor: pointer
  padding-left: 27px
  &:after
    position: absolute
    content: ""
    width: 22px
    height: 1px
    margin-top: 19px
    margin-left: -40px
    background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
    transition: all 1s
  &:hover:after
    width: 40px


.mp-collection
  span
    font-weight: 700
    font-size: 20px
    line-height: 27px
    color: #0AA3E4
    margin-bottom: 20px
    margin-left: 30px

.mp-gallery
  height: 208px
  overflow-y: scroll
  animation: scale-page
  animation-duration: 0.7s
  animation-fill-mode: forwards
  @keyframes scale-page
    from
      transform: scale(0.9)
      opacity: 0.7
    to
      transform: scale(1)
      opacity: 1
  &-episodes
    height: 850px
    width: 325px
    overflow-y: scroll
    animation: scale-page
    animation-duration: 2s
    animation-fill-mode: forwards
    @keyframes scale-page
      from
        transform: scale(0.9)
        opacity: 0.7
      to
        transform: scale(1)
        opacity: 1

  &-item
    position: relative
    margin-bottom: 10px


.mp-gallery::-webkit-scrollbar
  background-color: #13161a   /* цвет бегунка */

.mp-gallery-episodes::-webkit-scrollbar
  background-color: #13161a   /* цвет бегунка */


.mp-episode
  position: absolute
  bottom: 0
  padding: 2px 2px
  width: 97%
  h3
    font-family: 'Roboto Condensed'
    font-style: normal
    font-weight: 700
    font-size: 20px
    line-height: 27px
    color: #FFFFFF
    z-index: 2
    position: absolute
    bottom: 45px
    left: 38px
  &-rating
    display: flex
    justify-content: space-between
    align-items: center
    margin-left: 35px
    span
      font-family: 'Roboto Condensed'
      font-style: normal
      font-weight: 700
      font-size: 13px
      line-height: 18px
      color: #FFFFFF

.mp-episode-img
  margin-top: 37px
  padding-bottom: 80px
  margin-left: 100px

.mp-btn
  width: 93px
  height: 30px
  background: none
  font-size: 16px
  background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  background-clip: text
  text-fill-color: transparent
  text-transform: inherit
  position: absolute
  top: -57px
  right: -8px




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

.mp-post-item
  position: absolute
  top: 0
  left: 29px
  cursor: pointer
  img
    border-radius: 12px




</style>