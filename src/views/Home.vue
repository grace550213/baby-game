<template>
  <div class="Home-wrap">
    <div class="shapeWrap" :style="shapPosition" @click="changeShape">
      <div v-if="index < 18" :id="showImg[index]" class="shape"></div>
      <div v-else :id="showImg[index]" class="shape fruit"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      showImg: [
        // 下面為形狀(18)
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
        'cross',
        // 下面為水果圖片
        'apple',
        'banana',
        'blackberry',
        'carambola',
        'cherry',
        'chicken',
        'dragonFruit',
        'grapefruit',
        'grapes',
        'guava',
        'kiwi',
        'lemon',
        'litchi',
        'mango',
        'orange',
        'papaya',
        'peach',
        'pear',
        'pineapple',
        'strawberry',
        'watermelon'
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
      this.index = this.getRandomInt(39);
      this.shapPosition = `top:${this.getRandomInt(70)}vh;left:${this.getRandomInt(55)}vw`;
    }
  }
};
</script>
<style scoped lang="scss">
@import url('~@/assets/styles/shapes.css');
@import url('~@/assets/styles/fruits.css');
.shapeWrap {
  padding: 20px;
  position: absolute;
}
.shape {
  animation: jumping 0.8s infinite;
}
@keyframes jumping {
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
.fruit {
  width: 200px;
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
