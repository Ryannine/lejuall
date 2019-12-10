<template>
  <div class="sort">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!-- 头部 -->
        <div class="header">
          <div class="header-c">
            <img :src="left" alt class="left">
            <div class="center"></div>
            <div class="right">
              <img :src="search" @click="$router.push('/search')" alt class="search">
              <img
                :src="shop"
                style="margin-left:10px"
                @click="$router.push('/shop')"
                alt
                class="shop"
              >
            </div>
          </div>
        </div>
        <!-- 中间内容部分 -->
        <div class="container">
          <div class="idea">
            <div class="intro">
              <router-link to="/idea">
                <p class="title">创意</p>
                <p class="sub-title">Orgianlity</p>
              </router-link>
            </div>
          </div>
          <div class="decoration">
            <div class="intro">
              <router-link to="/nivo">
                <p class="title">装饰品</p>
                <p class="sub-title">Decorations</p>
              </router-link>
            </div>
          </div>
          <div class="style">
            <div class="intro too">
              <router-link to="/idea">
                <p class="title">风格</p>
                <p class="sub-title">Style</p>
              </router-link>
            </div>
          </div>
          <div class="lamp">
            <div class="intro too">
              <router-link to="/idea">
                <p class="title">灯具</p>
                <p class="sub-title">The lamp</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: "sort",
  data() {
    return {
      left: require("@/assets/imgs/icon/news.png"),
      search: require("@/assets/imgs/icon/search.png"),
      shop: require("@/assets/imgs/icon/shop.png")
    };
  },

  computed: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        tap: true,
        momentum: true
      });
      this.$store.state.wrapper = this.scroll;
    });
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.sort ::v-deep {
  height: 100%;
  .wrapper {
    height: calc(100% - 175px);
  }
  // 头部
  .header {
    position: relative;
    width: 100%;
    //   background-image: url(~@/assets/imgs/homeImg/banner1.png);
    //   background-repeat: no-repeat;
    height: 104px;
    overflow: hidden;
    background: #354e44 100%;
    .header-c {
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 999;
      overflow: hidden;
      display: flex;
      margin-top: 20px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 1.14px;
      justify-content: space-between;
      // 左边图标
      .left {
        margin-left: 10px;
      }
      .center {
        width: 150px;
        margin-left: 10px;
        text-align: center;

        a {
          display: inline-block;
          color: white;
          text-align: center;
          width: 40px;
          margin-left: 10px;
          // router-link下划线
          .underline {
            display: block;
            width: 37px;
            height: 3px;
            margin-top: 5px;
            background-color: white;
            border-radius: 4px;
            opacity: 0;
            transition: all 0.2s linear;
          }
        }
        .router-link-active .underline {
          opacity: 1;
        }
      }
      // 右边图标
      .right {
        margin-right: 10px;
      }
      // 头部所有图片
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  // 内容部分 container
  .container {
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    background: #f1ece7;
    margin-top: -22px;
    // 公共部分
    .intro {
      margin-left: 26px;
      margin-top: 74px;
      line-height: 25px;
      .title {
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: #3e3e3e;
        letter-spacing: 1.71px;
      }
      .sub-title {
        font-family: PingFangSC-Regular;
        font-size: 15px;
        color: #7f7f7f;
        letter-spacing: 1.07px;
      }
    }
    .intro.too {
      margin-top: 120px;
    }
    // 创意
    .idea {
      width: 100%;
      height: 151px;
      background: url(~@/views/sort/imgs/idea.png) no-repeat right center;
      background-size: 60% 80%;
      background-color: #d5d5d5;
      border-radius: 10px;
      margin-bottom: 24px;
    }
    // 装饰品
    .decoration {
      width: 100%;
      height: 151px;
      background: url(~@/views/sort/imgs/decoration.png) no-repeat 110px center;
      background-color: white;
      background-size: 60% 110%;
      border-radius: 10px;
      margin-bottom: 24px;
    }
    // 风格
    .style {
      width: 156px;
      height: 221px;
      background: url(~@/views/sort/imgs/style.png) no-repeat center;
      background-size: 100% 100%;
      background-color: white;
      border-radius: 10px;
    }
    // 灯具
    .lamp {
      width: 156px;
      height: 221px;
      background: url(~@/views/sort/imgs/lamp.png) no-repeat center;
      background-size: 100% 100%;
      background-color: white;
      border-radius: 10px;
    }
  }
}
</style>
