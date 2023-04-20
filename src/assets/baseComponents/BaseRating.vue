<template>
  <div class="rating" style="display: flex; align-items: center">
    <ul class="list" :class="{'disabled': disabled}" :style="styleRating">
      <li :key="star" v-for="star in maxstars" @mouseover="hoverStar(star)"
          @mouseleave="mouseLeftStar" :class="[{ 'active': star <= stars }]" @click="rate(star)" class="star">
        <font-awesome-icon :class="`fa-${starsize}`" :icon="[star <= stars ? 'fas' : 'far', 'star']"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas);
library.add(far);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "BaseRating",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      // stars: this.star,
      star_desc: this.getRatingDesc(this.star)
    };
  },
  props: {
    styleRating: {
      type: String,
      default: ''
    },
    stars: {
      type: Number,
      default: 0
    },
    star: {
      type: Number,
    },
    maxstars: {
      type: Number,
      default: 5
    },
    hasresults: {
      type: Boolean,
      default: true
    },
    hasdescription: {
      type: Boolean,
      default: true
    },
    ratingdescription: {
      type: Array,
      default: () => {
      }
    },
    starsize: {
      type: String,
      default: "2x"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    rate(star) {
      if (this.disabled) {
        return;
      }
      if (star <= this.maxstars && star >= 0) {
         this.stars === star ? star - 1 : star;
      }
    },
    hoverStar() {
      if (this.disabled) {
        return;
      }
      // console.log(star)
      // if (star <= this.maxstars && star >= 0) {
      //   this.star_desc = this.ratingdescription[star - 1];
      // }
    },
    mouseLeftStar() {
      if (this.disabled) {
        return;
      }
      // if (this.stars) {
      //   this.star_desc = this.ratingdescription[this.stars - 1];
      //   return this.star_desc;
      // } else {
      //   this.star_desc = "";
      // }
    },
    getRatingDesc(star) {
      if (star) {
        this.star_desc = this.ratingdescription[star - 1];
      }
      return this.star_desc;
    }
  }
};
</script>

<style lang="scss">
$active-color: #f3d23e;
$white-color: #fff;
$poor-color: rgb(186, 186, 186);
$below-average-color: rgb(245, 195, 87);
$average-color: rgb(255, 172, 90);
$good-color: rgb(193, 215, 89);
$excellent-color: rgb(72, 150, 77);
$no-star-desc-color: rgb(00, 00, 00);
.rating {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
ul.list li,
span {
  display: inline-block;
  margin: 2px;
}
//.star:hover {
////  .star {
//  color: $active-color;
////  }
//}
.list {
  margin: 0 0 5px 0;
  padding: 0;
  list-style-type: none;
  color: $white-color;
  width: 42%;
  &:hover {
    .star {
      color: $active-color;
      transition: 0.9s;
    }
  }
  span {
    width: 130px;
    margin-left: 5px;
    padding: 5px;
    color: $white-color;
    border-radius: 2px;
    font-size: 13px;
    text-align: center;
    font-weight: bold;
    transition: 0.2s;
    line-height: 25px;
  }
}
.star.active {
  color: $active-color;
}

.list.disabled {
  &:hover {
    .star {
      color: black;
      cursor: default;
    }
    .star.active {
      color: $active-color;
    }
  }
}
.star {
  cursor: pointer;
  &:hover {
    & ~ .star {
      &:not(.active) {
        color: inherit;
      }
    }
  }
}
.active {
  color: $active-color;
}
.star-poor {
  background: $poor-color;
}
.star-belowAverage {
  background: $below-average-color;
}
.star-average {
  background: $active-color;
}
.star-good {
  background: $good-color;
}
.star-excellent {
  background: $excellent-color;
}
.nostar_desc {
  background: $no-star-desc-color;
}
.svg-inline--fa.fa-w-18 {
  width: 15px;
}
</style>
