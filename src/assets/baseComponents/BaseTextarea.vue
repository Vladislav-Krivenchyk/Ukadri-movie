<template>
  <div>
    <label
        v-if="label"
        :style="labelStyle"
        class="label"
        :class="{ 'error-text-label': hasError }"
    >
      {{ label }}
    </label>

    <textarea
        :style="textareaStyle"
        :placeholder="placeholder"
        class="textarea"
        :class="{ 'error': hasError }"
        v-bind="$attrs"
        v-on="$listeners"
        @input="$emit('update', $event.target.value)">
        </textarea>

    <span class="error-label"
          v-visible="hasError">
            {{ errorMsg }}
        </span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    event: 'update'
  },
  name: "BaseTextarea",
  props: {
    hasError: {
      type: Boolean,
      default: false
    },
    errorMsg: {
      type: String,
      default: '0',
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    textareaStyle: {
      type: [String, Object]
    },
    labelStyle: {
      type: [String, Object]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/css/src/partials/colors'
@import '@/css/src/partials/_geometrics.sass'
@import '@/css/src/partials/_typography.sass'
@import '@/css/src/mixins/setTypography.mixin.sass'

.textarea
  @include set-body-text("3")
  line-height: $medium-line-height
  display: block
  width: 100%
  height: 141px
  overflow-y: auto
  //border-radius: 8px
  //border: 2px solid rgba($grey-3, .4)
  border: none
  background: #fff
  transition: 0.1s all
  padding: 16px 0 0 0
  border-bottom: 2px solid $white-1

    //&:hover
    //  border-bottom: 2px solid $white-1
    //  transition: 0.1s all
  &:focus
    border-bottom: 2px solid $white-1
    transition: 0.1s all
    outline: none
.error-text-label
  color: $red-1
label
  font-family: 'Roboto Condensed'
  font-weight: 700
  font-size: 24px
  line-height: 33px
  color: #FFFFFF
  margin-bottom: 25px
</style>