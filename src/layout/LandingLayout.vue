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
            <router-link :to="$i18nRoute({name: 'landingViewYkadri'})">
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
              <router-link  :to="$i18nRoute({name: 'FormAuth'})">
                Вход
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
      <div class="container">
        <router-view/>
      </div>
    <footer></footer>
  </main>
</template>

<script>
import IconLogoYkadriWhite from "@/assets/icons/IconLogoYkadriWhite.vue";
import iconSearch from "@/assets/icons/IconSearch.vue";
import iconOnline from "@/assets/icons/IconNotification.vue";
export default {
  name: "LandingLayout",
  components: {
    IconLogoYkadriWhite,
    iconSearch,
    iconOnline,
  },
}
</script>

<style lang="sass" scoped>
@import "@/css/src/partials/_colors.sass"
.main-header
  background: #13161a
.main-content
  padding-bottom: 30px

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

</style>