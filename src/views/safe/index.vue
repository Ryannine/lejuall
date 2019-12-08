<template>
  <div class="safe-main">
    <div @click="$router.go(-1)" class="safe-nav">
      <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
      <p>账户与安全</p>
      <div class="nav-box"></div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="safe-list" @touchstart="touchstart" @touchend="touchend">
          <div class="safe-bg1">
            <a href="#" class="safe-line l1">
              <p>Z号</p>
              <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
            </a>
          </div>
          <div class="safe-bg2">
            <a href="#" class="safe-line l2">
              <p>个人信息</p>
              <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
            </a>
          </div>
          <div class="safe-bg3">
            <a href="#" class="safe-line l3">
              <p>绑定手机号</p>
              <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
            </a>
          </div>
          <div class="safe-bg4">
            <a href="#" class="safe-line l4">
              <p>微信账号</p>
              <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
            </a>
          </div>
          <div class="safe-bg5">
            <a href="#" class="safe-line l5">
              <p>QQ账号</p>
              <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
            </a>
          </div>
          <div class="safe-bg6">
            <a href="#" class="safe-line l6">
              <p>支付绑定</p>
              <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
            </a>
          </div>
          <div class="safe-bg7">
            <a href="#" class="safe-line l7">
              <p>设置登录密码</p>
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
  name: "safe",
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
      if (e.target.className === "safe-line l1") {
        $(".safe-bg1").addClass("a-act");
      }
      if (e.target.className === "safe-line l2") {
        $(".safe-bg2").addClass("a-act");
      }
      if (e.target.className === "safe-line l3") {
        $(".safe-bg3").addClass("a-act");
      }
      if (e.target.className === "safe-line l4") {
        $(".safe-bg4").addClass("a-act");
      }
      if (e.target.className === "safe-line l5") {
        $(".safe-bg5").addClass("a-act");
      }
      if (e.target.className === "safe-line l6") {
        $(".safe-bg6").addClass("a-act");
      }
      if (e.target.className === "safe-line l7") {
        $(".safe-bg7").addClass("a-act");
      }
    },
    touchend(e) {
      if (e.target.className === "safe-line l1") {
        $(".safe-bg1").removeClass("a-act");
      }
      if (e.target.className === "safe-line l2") {
        $(".safe-bg2").removeClass("a-act");
      }
      if (e.target.className === "safe-line l3") {
        $(".safe-bg3").removeClass("a-act");
      }
      if (e.target.className === "safe-line l4") {
        $(".safe-bg4").removeClass("a-act");
      }
      if (e.target.className === "safe-line l5") {
        $(".safe-bg5").removeClass("a-act");
      }
      if (e.target.className === "safe-line l6") {
        $(".safe-bg6").removeClass("a-act");
      }
      if (e.target.className === "safe-line l7") {
        $(".safe-bg7").removeClass("a-act");
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.safe-main {
  width: 100%;
  height: 667px;
  position: fixed;
  top: 0;
  background-color: #354e44;
  .safe-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    padding-left: 0.53333rem;
    background-color: #354e44;
    z-index: 999;

    img {
      width: 25px;
      height: 25px;
      transform: rotate(-180deg);
    }
    p {
      font-size: 18px;
      font-weight: bolder;
    }
    .nav-box {
      width: 40px;
    }
  }
  .wrapper {
    height: 500px;
    .content {
      height: 550px;

      .safe-list {
        margin-top: 55px;
        background-color: #fff;
        border-radius: 25px;
        height: 650px;
        .safe-line {
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
          height: 70px;
          margin: 0 auto;
          border-bottom: 1px solid rgb(226, 223, 223);
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
