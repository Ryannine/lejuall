<template>
  <div class="about-main">
    <div @click="$router.go(-1)" class="about-nav">
      <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="about-header">
          <img :src="require('@/assets/imgs/myself/logo.png')" alt />
          <p>造物1.1.01</p>
        </div>
        <div class="about-list" @touchstart="touchstart" @touchend="touchend">
          <div class="about-bg1">
            <a href="#" class="about-line l1">
              <p>隐私声明</p>
              <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
            </a>
          </div>
          <div class="about-bg2">
            <a href="#" class="about-line l2">
              <p>官方网站</p>
              <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
            </a>
          </div>
          <div class="about-bg3">
            <a href="#" class="about-line l3">
              <p>版本更新</p>
              <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
            </a>
          </div>
          <div class="about-bg4">
            <a href="#" class="about-line l4">
              <p>分享APP</p>
              <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import $ from "jquery";
export default {
  name: "about",
  data() {
    return {};
  },

  computed: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        startY: 0,
        startX: 0,
        mouseWheel: true,
        tap: true
      });
      // console.log("bs init done...");
    });
  },
  methods: {
    touchstart(e) {
      // console.log(e.target);
      if (e.target.className === "about-line l1") {
        $(".about-bg1").addClass("a-act");
      }
      if (e.target.className === "about-line l2") {
        $(".about-bg2").addClass("a-act");
      }
      if (e.target.className === "about-line l3") {
        $(".about-bg3").addClass("a-act");
      }
      if (e.target.className === "about-line l4") {
        $(".about-bg4").addClass("a-act");
      }
    },
    touchend(e) {
      if (e.target.className === "about-line l1") {
        $(".about-bg1").removeClass("a-act");
      }
      if (e.target.className === "about-line l2") {
        $(".about-bg2").removeClass("a-act");
      }
      if (e.target.className === "about-line l3") {
        $(".about-bg3").removeClass("a-act");
      }
      if (e.target.className === "about-line l4") {
        $(".about-bg4").removeClass("a-act");
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.about-main {
  width: 100%;
  height: 100%;
  background-color: #354e44;
  .about-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    padding-left: 20px;
    padding-top: 15px;
    background-color: #354e44;

    img {
      width: 25px;
      height: 25px;
      transform: rotate(-180deg);
    }
  }
  .wrapper {
    height: 643px;
    .content {
      height: 700px;
      .about-header {
        margin: 0 auto;
        height: 220px;
        img {
          padding-top: 40px;
          width: 130px;
          height: 130px;
        }
        p {
          padding-top: 10px;
          color: aliceblue;
          font-size: 18px;
        }
      }
      .about-list {
        background-color: #fff;
        padding-bottom: 100px;
        .about-line {
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
          -webkit-user-select: none;
          -moz-user-focus: none;
          -moz-user-select: none;
          color: black;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
          font-weight: bolder;
          width: 95%;
          height: 80px;
          margin: 0 auto;
          border-bottom: 1px solid grey;
          img {
            width: 20px;
            height: 20px;
          }
        }
        .a-act {
          background-color: rgba(134, 131, 131, 0.3);
        }
      }
    }
  }
}
</style>
