<template>
  <svg :width="width" :height="height" :style="iconStyle" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 5.40192C14.5 6.55662 14.5 9.44338 12.5 10.5981L5 14.9282C3 16.0829 0.500001 14.6395 0.500001 12.3301L0.500002 3.66987C0.500002 1.36047 3 -0.0829038 5 1.0718L12.5 5.40192Z" fill="white"/>
  </svg>

</template>

<script>
export default {
  name: "IconPlay",
  props: {
    width: {
      type: Number,
      default: 20
    },
    height: {
      type: Number,
      default: 16
    },
    iconStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>