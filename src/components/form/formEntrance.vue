<template>
    <div>
        <form
            disabled
            action="#"
        >
            <div
                class="df"
            >
                <label>Ім’я</label>
                <base-input
                    v-model="name"
                    input-style="width: 433px; margin-top: 15px; margin-bottom: 30px; border: 3px solid rgba(38, 242, 169, 0.99)"
                    type="text"
                />
                <label>Пароль</label>
                <base-input
                    v-show="!showPassword"
                    v-model="password"
                    input-style="width: 433px; margin-top: 15px; border: 3px solid rgba(38, 242, 169, 0.99)"
                    type="password"
                />
                <div
                    class="authorization__overlay-form-icon-hidden"
                    @click="toggleShowPassword"
                >
                    <icon-show-password
                        v-show="!showPassword"
                    />
                </div>

                <base-input
                    v-show="showPassword"
                    v-model="password"
                    input-style="width: 433px; margin-top: 15px; border: 3px solid rgba(38, 242, 169, 0.99)"
                    type="text"
                />
                <div
                    class="authorization__overlay-form-icon"
                    @click="toggleShowPassword"
                >
                    <icon-hidden-password
                        v-show="showPassword"
                        @click="toggleShowPassword"
                    />
                </div>
                <div class="authorization__overlay-form-forgot-password">
                  <router-link :to="({ name: 'PasswordRecovery'})">
                    <span>Забули пароль?</span>
                  </router-link>
                </div>
                <base-button
                    v-if="!areHoverButton"
                    button-style="background: rgba(0, 0, 0, 0);border: 3px solid rgba(38, 242, 169, 0.99); width: 471px;"
                    @mouseover="areHoverButton = true"
                    @mouseleave="areHoverButton = false"
                >
                    Увійти
                </base-button>
                <base-button
                    v-else
                    button-style="width: 471px; background: linear-gradient( 180deg,rgba(38, 242, 169, 0.99) 0%, #0F6858 100%);"
                    @mouseover="areHoverButton = true"
                    @mouseleave="areHoverButton = false"
                    @click.enter="saveForm"
                >
                    Увійти
                </base-button>

                <div class="authorization__overlay-form-entrance">
                    <div class="authorization__overlay-form-entrance-google">
                        <icon-google />
                        <span>Увійти через Google</span>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import baseInput from "@/assets/baseComponents/BaseInput.vue";
import baseButton from "@/assets/baseComponents/BaseButton.vue";
import iconGoogle from "@/assets/icons/IconGoogle.vue";
import iconHiddenPassword from "@/assets/icons/IconHiddenPassword.vue";
import iconShowPassword from "@/assets/icons/IconShowPassword.vue";
export default {
  name: "FormEntrance",
  components: {
    baseInput,
    baseButton,
    iconGoogle,
    iconHiddenPassword,
    iconShowPassword
  },
  data() {
    return {
      name: '',
      password: '',
      email: '',
      repeatPassword: '',
      showPassword: false,
      areHoverButton: false,
    }
  },
  methods: {
    registerUserAndGetToken(name, password) {
      let form = {
        'name': name,
        'password': password
      }
       sessionStorage.setItem('token', JSON.stringify(form))
       if(sessionStorage.getItem('token') !== form.name && form.password) {
        this.$router.push( {name: 'mainViewYkadri', path:  '' })
      }
      location.reload(false)

      return form
    },
    saveForm() {
      const name = this.name
      const password = this.password

      this.registerUserAndGetToken(name, password)
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword
    }
  },
  mounted() {
  }
}
</script>

<style lang="sass" scoped>

.authorization
  &__overlay-form
    &-choose
      display: flex
      justify-content: space-between
      margin-top: 10px
      margin-bottom: 30px
    &-icon
      position: absolute
      bottom: 371px
      left: 540px
      &-hidden
        position: absolute
        bottom: 373px
        left: 540px

    &-icon-registration
      position: absolute
      bottom: 354px
      left: 523px
    &-icon-hidden-registration
      position: absolute
      bottom: 210px
      left: 523px

    &-forgot-password
      margin-right: 18px
      margin-top: 40px
      margin-bottom: 25px
      text-align: right
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

</style>