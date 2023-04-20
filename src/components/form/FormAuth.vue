<template>
    <div class="authorization">
        <div
            :class="{'active-form': !isRecovery}"
            class="authorization__overlay"
        >
            <div class="authorization__overlay-wrapper">
                <div class="authorization__overlay-block">
                    <div class="authorization__overlay-inner">
                      <div class="authorization__overlay-close">
                        <router-link :to="$i18nRoute({ name: 'landingViewYkadri', path: 'ykadri'})">
                          <icon-close/>
                        </router-link>
                      </div>
                        <h1>Ласкаво просимо</h1>
                        <div class="authorization__overlay-form">
                            <div
                                class="authorization__overlay-form-choose"
                                style="display: flex; justify-content: space-between; margin-top: 10px; margin-bottom: 30px"
                            >
                                <div>
                                    <span
                                        class="authorization__overlay-form-choose-entrance"
                                        @click="switchComponent"
                                    >
                                        Вхід
                                    </span>
                                    <div :class="{ 'active': !isRegistration }" />
                                </div>
                                <div>
                                    <span
                                        class="authorization__overlay-form-choose-registration"
                                                                   
                                        @click="switchComponent"
                                    >
                                        Зареєструватись
                                    </span>
                                    <div :class="{ 'active': isRegistration }" />
                                </div>
                            </div>
                            <form-entrance
                                v-if="!isRegistration"
                                :is-recover="isRecovery"
                            />
                            <form-registration v-else />

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            :class="{'active-form': isRecovery}"
            style="color: #ffff"
        >
        </div>
    </div>
</template>

<script>
import FormRegistration from "@/components/form/formRegistration.vue";
import FormEntrance from "@/components/form/formEntrance.vue";
import IconClose from "@/assets/icons/IconClose.vue";
export default {
  name: "FormAuth",
  components: {
    IconClose,
    FormEntrance,
    FormRegistration,
  },
  data() {
    return {
      isRegistration: false,
      isRecovery: true
    }

  },
  methods: {

    switchComponent() {
      this.isRegistration = !this.isRegistration
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    toggleShowPasswordRepeat() {
      this.showRepeatPassword = !this.showRepeatPassword;
    }
  }
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
    margin-top: 80px

    &-choose
      display: flex
      justify-content: space-between
      margin-top: 10px
      margin-bottom: 30px
      span
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: #FFFFFF
        cursor: pointer
        padding-bottom: 4px
      &-entrance
        background: none
        border-top: 10px
      &-registration
        background: none

    &-icon
      position: absolute
      bottom: 436px
      left: 523px
      &-hidden
        position: absolute
        bottom: 436px
        left: 523px


    &-forgot-password
      margin-right: 18px
      margin-top: 40px
      margin-bottom: 25px
      span
        display: inherit
        text-align: right
        font-family: 'Quicksand'
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: #FFFFFF
    &-entrance
        display: flex
        align-items: center
        justify-content: right
        &-google
          width: 43%
          height: 40px
          margin-top: 45px
          display: inherit
          align-items: center
          justify-content: space-between
          border-bottom: 1px solid rgba(38, 242, 169, 0.99)
          border-radius: 2px

          span
            font-family: 'Quicksand'
            font-weight: 500
            font-size: 14px
            line-height: 18px
            color: #FFFFFF
            margin-right: 10px
  a
    text-decoration: none

  h1
    font-family: 'Roboto Condensed'
    margin-top: 50px
    font-size: 55px
    line-height: 103px
    color: #FFFFFF
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)


  form
      label
        font-family: 'Quicksand'
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: #FFFFFF
.active
  border-bottom: 1px solid #14E729
  width: 26px
  margin-top: 2px

//.active-form
//  width: 40px
//  height: 40px
//  background: #0F2026


</style>

