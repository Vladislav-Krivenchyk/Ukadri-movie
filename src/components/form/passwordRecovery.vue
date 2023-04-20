<template>
    <div class="authorization">
        <div class="authorization__overlay">
            <div class="authorization__overlay-wrapper">
                <div class="authorization__overlay-block">
                    <div class="authorization__overlay-inner">
                      <div class="authorization__overlay-close">
                        <router-link :to="$i18nRoute({path: '/'})">
                          <icon-close/>
                        </router-link>
                      </div>
                        <h1>Ласкаво просимо</h1>
                        <div class="authorization__overlay-form">
                            <div
                                class="authorization__overlay-form-choose"
                            >
                              <router-link :to="$i18nRoute({ name: 'FormAuth'})">
                                    <span
                                        class="authorization__overlay-form-choose-registration"
                                    >
                                        Повернутись до входу
                                    </span>
                                    <div class="authorization__overlay-form-choose-registration-border" />
                                </router-link>
                            </div>
                            <div class="authorization__overlay-form">
                                <form
                                    action="#"
                                >
                                    <label>Email</label>

                                    <base-input
                                        v-model="email"
                                        input-style="width: 433px; margin-top: 15px; margin-bottom: 70px; border: 3px solid rgba(38, 242, 169, 0.99)"
                                        type="email"
                                    />

                                    <base-button
                                        v-if="!areHoverButton"
                                        button-style="background: rgba(0, 0, 0, 0);border: 3px solid rgba(38, 242, 169, 0.99); width: 433px"
                                        @mouseover="areHoverButton = true"
                                        @mouseleave="areHoverButton = false"
                                    >
                                        Увійти
                                    </base-button>
                                    <base-button
                                        v-else
                                        button-style="width: 433px; background: linear-gradient( 180deg,rgba(38, 242, 169, 0.99) 0%, #0F6858 100%)"
                                        @mouseover="areHoverButton = true"
                                        @mouseleave="areHoverButton = false"
                                    >
                                        Увійти
                                    </base-button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import baseInput from "@/assets/baseComponents/BaseInput.vue";
import baseButton from "@/assets/baseComponents/BaseButton.vue";
import iconClose from "@/assets/icons/IconClose.vue";

export default {
  name: "PasswordRecovery",
  components: {
    baseInput,
    baseButton,
    iconClose
  },
  data() {
    return {
      email: '',
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
    background: url("/src/assets/img.png")
    background-position: center
    margin-top: -21px
    background-size: cover
    //background: rgba(0, 0, 0, 0.65)
    //backdrop-filter: blur(7.5px)
    margin-top: -21px
    &-close
      cursor: pointer
      position: absolute
      right: 15px
      top: 15px

  &__overlay-wrapper
    overflow: hidden
    width: 686px
    margin-top: 7rem
    margin-bottom: 1rem

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

  &__overlay-form
    &-choose
      margin-top: 10px
      margin-bottom: 40px
      span
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: #FFFFFF
        cursor: pointer
        padding-bottom: 4px
        padding-top: 25px
      &-registration-border
        border-bottom: 1px solid #14E729
        margin-top: 2px
        width: 8%

  a
    text-decoration: none
  h1
    font-family: 'Roboto Condensed'
    margin-top: 50px
    font-size: 55px
    line-height: 103px
    color: #FFFFFF
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
    margin-bottom: 100px


  form
    label
      font-family: 'Quicksand'
      font-weight: 700
      font-size: 16px
      line-height: 20px
      color: #FFFFFF

</style>