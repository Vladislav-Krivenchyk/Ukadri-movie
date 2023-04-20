<template>
    <button
        v-if="!isLoading"
        class="agri-button"
        :class="computedType"
        :style="buttonStyle"
        v-bind="$attrs"
        v-on="$listeners">
        <slot v-if="!isLoading" />
        <icon-loading
            v-else
            size="40px"
            color="#eed713"
        />
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    inheritAttrs: false,
    data() {
      return {
        rippleOptions:
          {
            time: 1.2,
            ease: "linear",
            color: "rgb(102, 148, 177)",
            startingOpacity: 0.6,
            borderRadius: 18 + 'px'
          }
      }
    },
    props: {
        buttonType: {
            type: String,
            default: () => 'primary',
            styleBoard(value) {
            return [
              'primary',
              'dismiss',
              'empty',
              'lightgrey',
              'delete',
              'white',
              'componentTv-details',
              'yellow',
              'red',
              'orange',
              'blue',
            ].includes(value)
            },
        },
        buttonStyle: {
            type: [String, Object],
            default: () => null
        },
        isLoading: {
            type: Boolean,
            default: false,
        }
    },
  computed: {
        computedType() {
            if (this.isLoading) {
                return 'agri-button-loading';
            }
            return 'agri-button-' + this.buttonType.trim();
        }
    },
  mounted() {
    // function createRipple(event) {
    //   const button = event.currentTarget;
    //
    //   const circle = document.createElement("span");
    //   const diameter = Math.max(button.clientWidth, button.clientHeight);
    //   const radius = diameter / 2;
    //
    //   circle.style.width = circle.style.height = `${diameter}px`;
    //   circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    //   circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    //   circle.classList.add("ripple");
    //
    //   const ripple = button.getElementsByClassName("ripple")[0];
    //
    //   if (ripple) {
    //     ripple.remove();
    //   }
    //
    //   button.appendChild(circle);
    // }
    //
    // const buttons = document.getElementsByTagName("button");
    // for (const button of buttons) {
    //   button.addEventListener("click", createRipple);
    // }

  }
}
</script>
<style lang="sass">
    @import '@/css/src/partials/_geometrics.sass'
    @import '@/css/src/partials/_colors.sass'
    @import '@/css/src/partials/_typography.sass'
    @import '@/css/src/mixins/setTypography.mixin.sass'
    @import '@/css/src/mixins/breakpoints.mixin.sass'


    .agri-button
        position: relative
        width: 228px
        height: 48px
        background: none
        border: none
        outline: none
        display: flex
        align-items: center
        justify-content: center
        column-gap: 7px
        color: #fff
        font-size: 12px
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3)
        line-height: $default-line-height
        text-transform: uppercase
        transition: background 400ms
        @include respond-to('small')
            width: unset
            min-width: 97px
            height: 40px
        &:disabled
            background: $grey-4
            color: $grey-3
            pointer-events: none
            box-shadow: none

        span.ripple
          position: absolute
          border-radius: 50%
          transform: scale(0)
          animation: ripple 600ms linear
          background-color: rgba(255, 255, 255, 0.7)


          @keyframes ripple
            to
              transform: scale(4)
              opacity: 0



    .agri-button-loading
        opacity: .5
        pointer-events: none

    .agri-button-primary
        background: $green-1
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($green-1, 0.24)
        transition: 0.2s all
        & *
            @include set-button-text
        &:hover
            //box-shadow: 0 21px 20px -15px rgba($grey-1, 0.35)
            background: $green-2
    .agri-button-blue
        background: #2280D3
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($green-1, 0.24)
        transition: 0.2s all
        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba(#2280D3, 0.35)
            background: #2280D3

    .agri-button-dismiss
        background: $grey-3
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($grey-3, 0.24)
        transition: 0.2s all
        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba(#a2a2a2, 0.35)
            background: #a2a2a2

    .agri-button-empty
        width: unset
        height: unset
        background: none
        border-radius: $default-border-radius
        box-shadow: none
        transition: 0.2s all
        color: $grey-6
        padding: 0
        & *
            @include set-button-text
        &:hover
            color: $green-1

    .agri-button-lightgrey
        background: $grey-8
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($grey-3, 0.14)
        transition: 0.2s all
        color: #646464
        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba($grey-3, 0.10)
            background: $grey-1


    .agri-button-delete
        background: $red-1
        border-radius: $default-border-radius
        transition: 0.2s all

        &:hover
            box-shadow: 0px 21px 20px -15px rgba($red-1, 0.24)

    .agri-button-white
        background: white
        border: solid 1px $green-1
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($grey-3, 0.14)
        transition: 0.2s all
        color: $green-1

        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba($grey-3, 0.10)

    .agri-button-red
        background: white
        border: solid 1px $red-1
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba($red-1, 0.14)
        transition: 0.2s all
        color: $red-1

        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba($grey-3, 0.10)

    .agri-button-orange
        background: #f1a527
        border: solid 1px #f1a527
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba(#ffdb59, 0.14)
        transition: 0.2s all
        color: #fff

        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba(#ffebc9, 0.35)

    .agri-button-yellow
        background: #ffdb59
        border: solid 1px #ffdb59
        border-radius: $default-border-radius
        //box-shadow: 0 21px 20px -15px rgba(#ffdb59, 0.14)
        transition: 0.2s all
        color: #5e5e5e

        & *
            @include set-button-text
        &:hover
            box-shadow: 0 21px 20px -15px rgba(#ffdb59, 0.10)

    .agri-button-show-details
        @extend .agri-button-empty
        color: $green-1
        display: inline
    @media (max-width: 768px)
        .agri-button
            min-width: 0
</style>