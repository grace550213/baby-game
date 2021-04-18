<template>
  <div class="Home-wrap">
    <div class="shapeWrap" :style="shapPosition" @click="changeShape">
      <!-- 形狀 -->
      <div v-if="index < 18" :id="showImg[index]" class="shape"></div>
      <!-- 水果圖片 -->
      <div v-else-if="index >= 18 && index < 39" :class="showImg[index]" class="shape"></div>
      <!-- 數字 -->
      <div v-else :class="showImg[index]" class="shape number">{{ showImg[index] }}</div>
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
        // 下面為水果圖片(39)
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
        'watermelon',
        // 下面為數字(50)
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      // 形狀顏色
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
      // 顯示第幾個
      index: 0,
      // 位置
      shapPosition: 'top:0;left:0'
    };
  },
  computed: {},
  created() {},
  methods: {
    // 隨機數字
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    // 按下圖片，變換位置與顯示圖片
    changeShape() {
      const root = document.documentElement;
      root.style.setProperty('--primary', `${this.color[this.getRandomInt(19)]}`);
      this.index = this.getRandomInt(50);
      this.shapPosition = `top:${this.getRandomInt(60)}vh;left:${this.getRandomInt(40)}vw`;
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
// .fruit {
// background-position: center;
// background-repeat: no-repeat;
// background-size: contain;
// }
.number {
  font-size: 100px;
  font-weight: bold;
  color: var(--primary);
}
</style>
