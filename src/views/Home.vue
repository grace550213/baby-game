<template>
  <div class="Home-wrap">
    <div class="shapeWrap" :style="shapPosition" @click="changeShape">
      <div :id="shapes[index]" class="shape"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      shapes: [
        'square',
        'rectangle',
        'circle',
        'oval',
        'triangle-up',
        'triangle-down',
        'triangle-left',
        'triangle-topleft',
        'trapezoid',
        'parallelogram',
        'star-six',
        'star-five',
        'pentagon',
        'heart',
        'diamond',
        'pacman',
        'moon',
        'cross'
      ],
      color: [
        'AntiqueWhite',
        'Aquamarine',
        'Brown',
        'Chartreuse',
        'CornflowerBlue',
        'DarkCyan',
        'DarkGoldenRod',
        'GoldenRod',
        'GreenYellow',
        'HotPink',
        'MediumPurple',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'black',
        'gray'
      ],
      index: 0,
      shapPosition: 'top:0;left:0'
    };
  },
  computed: {},
  created() {},
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    changeShape() {
      const root = document.documentElement;
      root.style.setProperty('--primary', `${this.color[this.getRandomInt(19)]}`);
      this.index = this.getRandomInt(18);
      this.shapPosition = `top:${this.getRandomInt(70)}vh;left:${this.getRandomInt(60)}vw`;
    }
  }
};
</script>
<style scoped lang="scss">
@import url('~@/assets/styles/shapes.css');
.shapeWrap {
  padding: 20px;
  position: absolute;
}
.shape {
  animation: box 0.8s infinite;
}
@keyframes box {
  0% {
    margin-top: 20px;
  }
  20% {
  }
  50% {
    margin-top: 0px;
  }
  80% {
  }
  100% {
    margin-top: 20px;
  }
}
</style>
