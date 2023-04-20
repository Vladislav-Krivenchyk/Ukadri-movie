<template>
<div class="main-page" v-if="getTheActor">
  <div class="main-content">
    <div class="mp-inner">
        <div class="mp-desc">
          <div class="mp-img">
            <div class="mp-post">
              <div class="mp-post-img">
                <img :src="require('@/assets/images/films/actors/'  + getTheActor.img)" alt="" class="mp-post shadow" v-if="getTheActor.img">
                <img :src="require('@/assets/no-poster.jpeg')" alt="" v-else>
              </div>
              <div class="mp-post-item">
                <div class="mp-post-img">
                  <img :src="require('@/assets/images/films/actors/'  + getTheActor.img)" alt="" v-if="getTheActor.img">
                  <img :src="require('@/assets/no-poster.jpeg')" alt="" v-else>
                </div>
              </div>
            </div>
          </div>
            <h3>{{getTheActor.name}}</h3>
            <div v-if="getTheActor.career" class="mp-person"><span>Карьера:</span><p>{{getTheActor.career}}</p></div>
            <div v-if="getTheActor.birth" class="mp-person"><span>Дата рождения:</span><p>{{getTheActor.birth}}</p></div>
            <div v-if="getTheActor.locationBirth" class="mp-person"><span>Место рождения:</span><p>{{getTheActor.locationBirth}}</p></div>
            <div v-if="getTheActor.locationBirth" class="mp-person"><span>Жанры:</span><p>{{getTheActor.genre}}</p></div>
            <div v-if="getTheActor.allFilms" class="mp-person"><span>Всего фильмов:</span><p>{{getTheActor.allFilms}}</p></div>
        </div>
        <div class="mp-desc-actor">
            <div class="mp-post">
              <div class="mp-post-img">
                <img :src="require('@/assets/images/films/picture/' + getTheActor.picture)" alt="" class="mp-post shadow" v-if="getTheActor.picture">
                <img :src="require('@/assets/no-poster.jpeg')" alt="" class="mp-images" v-else>
                <p>{{getTheActor.desc}}</p>
              </div>
              <div class="mp-post-item">
                <div class="mp-post-img">
                  <img :src="require('@/assets/images/films/picture/' + getTheActor.picture)" alt="" class="mp-post-img-picture"  v-if="getTheActor.picture">
                  <img :src="require('@/assets/no-poster.jpeg')" alt="" class="mp-images" v-else>
                  <p>{{getTheActor.desc}}</p>
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
  name: "MoviesActor",
  computed: {
    ...mapGetters('filmsStore', {
        getActor: 'getFilmState',
    }),
    getTheActor() {
      let result = {}
      for( let item of this.getActor) {
        item.actors.find(item => {
          if(item.article === this.$route.query.actor) {
            result = item
          }
        })
      }
      return result
    }
  },
  methods: {
      ...mapActions('filmsStore', ['getFilms'])
  },
  mounted() {
    this.getFilms()
  }
}
</script>

<style lang="sass" scoped>

.mp-post
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
  img
    border-radius: 12px
//////// picture

.mp-inner
  display: flex
  h3
    font-family: 'Roboto Condensed'
    font-weight: 700
    font-size: 50px
    line-height: 68px
    color: #fff
  p
    font-family: 'Roboto Condensed'
    font-weight: 300
    font-size: 12px
    line-height: 16px
    color: #FFFFFF


.mp-desc
  display: flex
  flex-direction: column
  min-width: 360px
  padding-right: 20px

.mp-person
  display: flex
  justify-content: space-between
  margin-bottom: 10px
  span
    background: linear-gradient(180deg, rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    text-fill-color: transparent
  p
    font-family: 'Roboto Condensed'
    font-weight: 300
    font-size: 12px
    line-height: 16px
    color: #FFFFFF
    text-align: right

.mp-img
  margin: 0 auto
  img
    border-radius: 12px

.mp-desc-actor
  display: flex
  flex-direction: column
  align-items: center
  width: 72%
  padding-right: 20px
  p
    font-weight: 300
    font-size: 16px
    line-height: 25px
    color: #FFFFFF
    margin-bottom: 20px
    margin-top: 15px
h4
  font-family: 'Roboto Condensed'
  font-weight: 700
  font-size: 20px
  color: #FFFFFF
  margin-bottom: 10px

.mp-images
  height: 600px
  margin: 0 auto

</style>