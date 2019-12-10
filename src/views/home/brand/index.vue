<template>
  <div class="brand">
    <ul>
      <li>
        <img :src="pp1" alt>
        <div class="box">
          <span class="ball"></span>
          <div class="imgs">
            <img :src="avatar5" alt>
            <img :src="avatar9" alt>
            <img :src="avatar6" alt>
          </div>
          <p class="title">Hartford 系列—休闲椅</p>
          <p class="word">一把有温度的好椅子，让回家的你忘却都…</p>
        </div>
      </li>
      <li>
        <img :src="pp2" alt>
        <div class="box">
          <span class="ball"></span>
          <div class="imgs">
            <img :src="avatar8" alt>
            <img :src="avatar3" alt>
          </div>
          <p class="title">迪欧 极简系列—办公桌</p>
          <p class="word">一把有温度的好椅子，让回家的你忘却都…</p>
        </div>
      </li>
      <li>
        <img :src="pp3" alt>
        <div class="box">
          <span class="ball"></span>
          <div class="imgs">
            <img :src="avatar1" alt>
            <img :src="avatar7" alt>
          </div>
          <p class="title">Manor 创意—现代橱柜</p>
          <p class="word">一把有温度的好椅子，让回家的你忘却都…</p>
        </div>
      </li>
      <li>
        <img :src="pp4" alt>
        <div class="box">
          <span class="ball"></span>
          <div class="imgs">
            <img :src="avatar2" alt>
            <img :src="avatar3" alt>
          </div>
          <p class="title">Lauren 现代感—极简吊灯</p>
          <p class="word">一把有温度的好椅子，让回家的你忘却都…</p>
        </div>
      </li>
      <li>
        <img :src="pp5" alt>
        <div class="box">
          <span class="ball"></span>
          <div class="imgs">
            <img :src="avatar8" alt>
            <img :src="avatar4" alt>
          </div>
          <p class="title">品间居品—现代橱柜</p>
          <p class="word">一把有温度的好椅子，让回家的你忘却都…</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "brand",

  data() {
    return {
      pp1: require("@/assets/imgs/homeImg/pp1.png"),
      pp2: require("@/assets/imgs/homeImg/pp2.png"),
      pp3: require("@/assets/imgs/homeImg/pp3.png"),
      pp4: require("@/assets/imgs/homeImg/pp4.png"),
      pp5: require("@/assets/imgs/homeImg/pp5.png"),
      avatar1: require("@/assets/imgs/homeImg/avatar1.png"),
      avatar2: require("@/assets/imgs/homeImg/avatar2.png"),
      avatar3: require("@/assets/imgs/homeImg/avatar3.png"),
      avatar4: require("@/assets/imgs/homeImg/avatar4.png"),
      avatar5: require("@/assets/imgs/homeImg/avatar5.png"),
      avatar6: require("@/assets/imgs/homeImg/avatar6.png"),
      avatar7: require("@/assets/imgs/homeImg/avatar7.png"),
      avatar8: require("@/assets/imgs/homeImg/avatar8.png"),
      avatar9: require("@/assets/imgs/homeImg/avatar9.png")
    };
  },

  methods: {},
  mounted() {
    if (this.$store.state.wrapper) {
      console.log(this.$store.state.wrapper.maxScrollY);
      this.$store.state.wrapper.refresh();
    }
  }
};
</script>

<style lang='scss' scoped>
.brand {
  list-style: none;
  width: 335px;
  margin: 0 auto;
  position: relative;
  ul {
    margin-top: -150px;
  }
  li {
    height: 306px;
    border-radius: 10px;
    background-color: white;
    margin-bottom: 28px;
    img {
      width: 100%;
      height: 213px;
      object-fit: contain;
    }
    // 每一个li 里边的盒子
    .box {
      position: relative;
      // 小球
      .ball {
        display: block;
        background: #354e44;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        position: absolute;
        top: -9px;
      }
      //图片集合
      .imgs {
        position: absolute;
        right: 20px;
        top: -20px;
        img {
          position: relative;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          margin-left: -7px;
          &:nth-child(1) {
            z-index: 9;
          }
          &:nth-child(2) {
            z-index: 8;
          }
        }
      }
      padding: 20px;
      // 标题
      .title {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #3e3e3e;
        letter-spacing: 1.14px;
      }
      // 长内容
      .word {
        margin-top: 9px;
        font-family: PingFangSC-Regular;
        font-size: 11px;
        color: #b1b1b1;
        letter-spacing: 0.79px;
        transform: scaleY(0.9);
      }
    }
  }
}
</style>
