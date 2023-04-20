<template>
  <div class="main-page">
    <div class="main-content">
      <div class="mp-inner">
        <div class="mp-desc">
          <div>
            <h3>{{getPostFilm.name}}</h3>
            <p>{{getPostFilm.desc}}</p>
            <base-rating :stars="getPostFilm.rating"/>
            <div class="mp-variant">
              <base-button
                  class="mp-button"
                  @click="transitionFilm"

                  v-ripple > <icon-play/>Перегляд</base-button>
              <span class="mp-trailer" @click="transitionTrailer">Трейлер</span>
            </div>
          </div>

          <div>
            <span class="mp-actor">Актори</span>
          </div>
        </div>
        <div class="mp-img" >
          <img :src="require('@/assets/images/sports/' + getPostFilm.img)" alt="" v-if="getPostFilm.img">
          <img :src="require('@/assets/no-poster.jpeg')" alt="" v-else>
        </div>
      </div>
      <div class="mp-actors">
        <div v-for="actor in getPostFilm.actors" :key="actor.id" class="mp-actor-item" @click="seeTheActor(actor.article)">
          <img :src="require('@/assets/images/sports/actors/' + actor.img)" alt="" v-if="actor.img" />
          <img :src="require('@/assets/no-poster.jpeg')" alt="" v-else />
          <h4>{{actor.name}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconPlay from "@/assets/icons/IconPlay.vue";
import BaseButton from "@/assets/baseComponents/BaseButton.vue";
import BaseRating from "@/assets/baseComponents/BaseRating.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SportPublicItem",
  components: {IconPlay, BaseButton, BaseRating},
  computed: {
    ...mapGetters('sportsStore', {
      getFilm: 'getSportState'
    }),
    getPostFilm() {
      let result = {}
      this.getFilm.find( item =>{
        if(item.article === this.$route.query.card) {
          result = item
        }
      })
      return result
    }
  },
  methods: {
    ...mapActions('sportsStore', ['getSport']),
    seeTheActor(article) {
      this.$router.push({name: 'sportActor', query:{ 'actor': article }})
    },
    transitionTrailer() {
      this.$router.push({name: 'sportTrailer', query: { 'card': this.getPostFilm.article}})
    },
    transitionFilm() {
      this.$router.push({name: 'sportVideo', query: { 'card': this.getPostFilm.article}})
    }
  },
  async mounted() {
    await this.getSport()
  }
}
</script>

<style lang="sass" scoped>
.mp-inner
  display: flex
  justify-content: space-between
  h3
    font-family: 'Roboto Condensed'
    font-weight: 700
    font-size: 50px
    line-height: 68px
    color: #fff
  p
    font-family: 'Roboto Condensed'
    font-weight: 300
    font-size: 16px
    line-height: 16px
    color: #FFFFFF
.mp-actors
  display: flex
  justify-content: space-around
  padding-top: 40px
  padding-left: 20px
  padding-right: 20px

.mp-actor-item
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  cursor: pointer
  padding: 0px 4px
  h4
    background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    text-fill-color: transparent
    font-weight: 700
    font-size: 14px
    line-height: 18px
    margin-top: 5px
  span
    font-weight: 400
    font-size: 14px
    line-height: 18px
    color: #FFFFFF

  img
    width: 140px
    height: 220px
    border-radius: 20px
    object-fit: cover


.mp-desc
  display: flex
  flex-direction: column
  justify-content: space-between
  width: 50%
  padding-right: 20px

.mp-variant
  display: flex
  align-items: center
  padding-top: 10px
  span
    position: relative
    height: 20px
    cursor: pointer
    background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    text-fill-color: transparent
    margin-left: 30px
    &:after
      content: ''
      position: absolute
      left: 0
      bottom: 0
      height: 1px
      width: 35px
      background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)

.mp-button
  width: 169px
  height: 36px
  font-weight: 700
  font-size: 14px
  line-height: 18px
  text-transform: capitalize
  background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
  border-radius: 18px

.mp-actor
  font-weight: 700
  font-size: 21px
  line-height: 26px
  letter-spacing: 0.04em
  color: #FFFFFF
  margin-top: 30px

.mp-img
  img
    box-shadow: 2px 2px 20px 7px rgb(255 255 255 / 11%)
    height: 545px
</style>