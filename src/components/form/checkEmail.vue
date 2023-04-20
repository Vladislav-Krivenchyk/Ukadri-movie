<template>
    <div class="authorization">
        <div class="authorization__overlay">
            <div class="authorization__overlay-wrapper">
                <div class="authorization__overlay-block">
                    <div class="authorization__overlay-inner">
                        <div>
                            <icon-check-email />
                        </div>
                        <h1>Будь- ласка, <br> Перевірте свій Email</h1>
                        <router-link :to="{ name: 'authorization' }">
                            <base-button
                                v-if="!areHoverButton"
                                button-style="background: rgba(0, 0, 0, 0);border: 3px solid rgba(38, 242, 169, 0.99); width: 433px; margin-top: 90px"
                                @mouseover="areHoverButton = true"
                                @mouseleave="areHoverButton = false"
                            >
                                Повернутись до входу
                            </base-button>
                        </router-link>
                        <router-link :to="{ name: 'authorization' }">
                            <base-button
                                v-if="areHoverButton"
                                button-style="width: 433px; background: linear-gradient( 180deg,rgba(38, 242, 169, 0.99) 0%, #0F6858 100%); margin-top: 90px"
                                @mouseover="areHoverButton = true"
                                @mouseleave="areHoverButton = false"
                            >
                                Повернутись до входу
                            </base-button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconCheckEmail from "@/assets/icons/IconCheckEmail.vue";
import baseButton from "@/assets/baseComponents/BaseButton.vue";

export default {
  name: "CheckEmail",
  components: {
    IconCheckEmail,
    baseButton
  },
  data() {
    return {
      areHoverButton: false
    }

  },
}
</script>

<style lang="sass" scoped>

.authorization
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100vh
  &__overlay
    display: flex
    justify-content: center
    background: rgba(0, 0, 0, 0.65)
    backdrop-filter: blur(7.5px)
    margin-top: -21px

  &__overlay-wrapper
    overflow: hidden
    width: 686px
    margin-top: 8rem

  &__overlay-block
    height: 900px
    background-color: rgba(255, 255, 255, 0.2)
    border: 1px solid rgba(38, 242, 169, 0.99)
    position: relative
    border-radius: 8px
  //border-top-right-radius: 355px 300px

  &__overlay-inner
    display: flex
    flex-direction: column
    width: 100%
    align-items: center
    margin-top: 200px
  a
    text-decoration: none

  h1
    font-family: 'Roboto Condensed'
    text-transform: inherit
    margin-top: 15px
    font-size: 55px
    line-height: 80px
    color: #FFFFFF
    text-align: center
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)


</style>

