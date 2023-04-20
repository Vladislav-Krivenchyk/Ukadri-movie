<template>
  <div style="width: 654px; height: 377px">
    <vue-plyr :options="options">
      <video
          controls
          crossorigin
          playsinline
          :data-poster="dataPoster"
      >
        <source
            size="576"
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
            type="video/mp4"
        >
        <source
            size="720"
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
            type="video/mp4"
        >
        <source
            size="1080"
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
            type="video/mp4"
        >
        <track
            default
            kind="captions"
            label="English captions"
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
            srclang="en"
        >
        <track
            kind="captions"
            label="Légendes en français"
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
            srclang="fr"
        >
      </video>
    </vue-plyr>
  </div>
</template>

<script>
import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js'
import 'vue-plyr/dist/vue-plyr.css'
export default {
  name: 'VideoComponent',
  data() {
    return {
      options: { quality: { default: '1080p' } },
    }
  },
  props: {
    dataPoster: {
      type: String,
      default: ''
    },
  },
  components: {
    VuePlyr
  },

};
</script>

<style lang="css">


</style>



