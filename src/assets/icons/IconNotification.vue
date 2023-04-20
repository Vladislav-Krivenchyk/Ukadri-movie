<template>
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.625 7C17.3212 7 17.9889 6.72344 18.4812 6.23116C18.9734 5.73887 19.25 5.07119 19.25 4.375C19.25 3.67881 18.9734 3.01113 18.4812 2.51884C17.9889 2.02656 17.3212 1.75 16.625 1.75C15.9288 1.75 15.2611 2.02656 14.7688 2.51884C14.2766 3.01113 14 3.67881 14 4.375C14 5.07119 14.2766 5.73887 14.7688 6.23116C15.2611 6.72344 15.9288 7 16.625 7Z" stroke="#0AA3E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.375 10.5V13.125C18.375 14.5174 17.8219 15.8527 16.8373 16.8373C15.8527 17.8219 14.5174 18.375 13.125 18.375H7.875C6.48261 18.375 5.14726 17.8219 4.16269 16.8373C3.17812 15.8527 2.625 14.5174 2.625 13.125V7.875C2.625 6.48261 3.17812 5.14726 4.16269 4.16269C5.14726 3.17812 6.48261 2.625 7.875 2.625H10.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

</template>

<script>
export default {
  name: "IconNotification",
  props: {
    width: {
      type: Number,
      default: 19
    },
    height: {
      type: Number,
      default: 19
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