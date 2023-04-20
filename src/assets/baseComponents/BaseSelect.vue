<template>
    <div class="v-select">
        <p
            style="color: #FFFFFF"
            class="title"
            @click="areOptionsVisible = !areOptionsVisible"
        >
            {{ selected }}
        </p>
        <div
            v-if="areOptionsVisible "
            class="options"
        >
            <p
                v-for="(option) in supportedLocales"
                :key="option"
                style="color: #FFFFFF"
                @click="selectOption(option)"
            >
                <!--                {{ $t('language.' + option) }}-->
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    supportedLocales: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  // mounted() {
  //   document.addEventListener('click', this.hideSelect.bind(this), true)
  // },
  // beforeDestroy() {
  //   document.removeEventListener('click', this.hideSelect)
  // },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    }

  }
}
</script>

<style scoped>
.v-select {
  position: relative;
  width: 50px;
  cursor: pointer;
  text-align: center;
}
.title {
  /*border: solid 1px #aeaeae;*/
  /*padding: 8px;*/
}
.v-select p {
  margin: 0;
  color: #FFFFFF;
  text-transform: uppercase;
}

.options {
  border: solid 1px #aeaeae;
  background: #000;
  position: absolute;
  top: 30px;
  left: 0;
  width: 35px;
  color: #FFFFFF;
  z-index: 1;
}

.options p:hover {
  background: #e7e7e7;
}
</style>