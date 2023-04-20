<template>
    <form
        class="authorization__overlay-form-registration"
        action="#"
    >
        <label>Ім’я</label>

        <base-input
            v-model="name"
            input-style="width: 433px; margin-top: 15px; margin-bottom: 30px; border: 3px solid rgba(38, 242, 169, 0.99)"
            type="text"
        />


        <label>Email</label>

        <base-input
            v-model="email"
            input-style="width: 433px; margin-top: 15px; margin-bottom: 30px; border: 3px solid rgba(38, 242, 169, 0.99)"
            type="email"
        />

        <!--         Пароль      -->

        <label>Пароль</label>

        <base-input
            v-show="!showPassword"
            v-model="password"
            input-style="width: 433px; margin-top: 15px; border: 3px solid rgba(38, 242, 169, 0.99); margin-bottom: 20px;"
            type="password"
        />
        <div
            class="authorization__overlay-form-icon-registration-password"
            @click="toggleShowPassword"
        >
            <icon-repeat-password
                v-show="!showPassword"
            />
        </div>

        <base-input
            v-show="showPassword"
            v-model="password"
            input-style="width: 433px; margin-top: 15px; border: 3px solid rgba(38, 242, 169, 0.99); margin-bottom: 20px;"
            type="text"
        />
        <div
            class="authorization__overlay-form-icon-hidden-registration-password"
            @click="toggleShowPassword"
        >
            <icon-hidden-password
                v-show="showPassword"
            />
        </div>


        <!--         Повторити пароль              -->


        <label>Повторити пароль</label>


        <base-input
            v-show="!showRepeatPassword"
            v-model="repeatPassword"
            input-style="width: 433px; margin-top: 15px; border: 3px solid rgba(38, 242, 169, 0.99); margin-bottom: 30px;"
            type="password"
        />
        <div
            class="authorization__overlay-form-icon-registration-repeat"
            @click="toggleShowPasswordRepeat"
        >
            <icon-show-password
                v-show="!showRepeatPassword"
            />
        </div>




        <base-input
            v-show="showRepeatPassword"
            v-model="repeatPassword"
            input-style="width: 433px; margin-top: 15px; border: 3px solid rgba(38, 242, 169, 0.99); margin-bottom: 30px;"
            type="text"
        />
        <div
            class="authorization__overlay-form-icon-hidden-registration-repeat"
            @click="toggleShowPasswordRepeat"
        >
            <icon-hidden-repeat-password
                v-show="showRepeatPassword"
            />
        </div>



        <!--     ///////////////    -->


        <base-button
            v-if="!areHoverButton"
            button-style="background: rgba(0, 0, 0, 0);border: 3px solid rgba(38, 242, 169, 0.99); width: 471px; margin-top: 30px"
            @mouseover="areHoverButton = true"
            @mouseleave="areHoverButton = false"
        >
            Увійти
        </base-button>
        <base-button
            v-else
            button-style="width: 471px; background: linear-gradient( 180deg,rgba(38, 242, 169, 0.99) 0%, #0F6858 100%); margin-top: 30px"
            @mouseover="areHoverButton = true"
            @mouseleave="areHoverButton = false"
        >
            Увійти
        </base-button>
    </form>
</template>

<script>
import baseInput from "@/assets/baseComponents/BaseInput.vue";
import baseButton from "@/assets/baseComponents/BaseButton.vue";
import iconHiddenRepeatPassword from "@/assets/icons/iconHiddenRepeatPassword.vue";
import iconRepeatPassword from "@/assets/icons/iconRepeatPassword.vue";
import iconHiddenPassword from "@/assets/icons/IconHiddenPassword.vue";
import iconShowPassword from "@/assets/icons/IconShowPassword.vue";
export default {
  name: "FormRegistration",
  components: {
    baseInput,
    baseButton,
    iconHiddenPassword,
    iconShowPassword,
    iconHiddenRepeatPassword,
    iconRepeatPassword
  },
  data() {
    return {
      name: '',
      password: '',
      email: '',
      repeatPassword: '',
      showPassword: false,
      showRepeatPassword: false,
      areHoverButton: false,
    }
  },
  methods: {
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
  &__overlay-form

    &-icon-registration-password
      position: absolute
      bottom: 250px
      left: 540px

    &-icon-hidden-registration-password
      position: absolute
      bottom: 248px
      left: 540px

    &-icon-registration-repeat
      position: absolute
      bottom: 140px
      left: 540px
    &-icon-hidden-registration-repeat
      position: absolute
      bottom: 137px
      left: 540px

  h1
    font-family: 'Roboto Condensed'
    margin-top: 100px
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