<template>
  <div class="idea">
    <img
      :src="stick"
      style="position:fixed;right:10px;bottom:20px;z-index:999;width:35px;height:35px"
      @click="go"
    >
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!-- 头部 -->
        <div class="header">
          <div class="header-c">
            <van-nav-bar @click.native="$router.go(-1)" :border="false" title="创意家具" left-arrow/>
          </div>
        </div>
        <div class="bar">
          <router-link to="/idea/new">
            新品
            <span class="underline"></span>
          </router-link>
          <router-link to="/idea/count">
            销量
            <span class="underline"></span>
          </router-link>
          <router-link to="/idea/price">
            价格
            <span class="underline"></span>
          </router-link>
          <router-link to="/idea/screen">
            筛选
            <span class="underline"></span>
          </router-link>
        </div>
        <!-- 中间内容部分 -->
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import BScroll from "@better-scroll/core";
export default {
  name: "idea",
  data() {
    return {
      left: require("@/assets/imgs/icon/news.png"),
      search: require("@/assets/imgs/icon/search.png"),
      shop: require("@/assets/imgs/icon/shop.png"),
      stick: require("@/assets/imgs/icon/Stick.png")
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
  methods: {
    //   回到顶部
    go() {
      console.log("1");
      //   $(".content").animate({}, 500, function() {
      //     $(this).css({ transform: "translateY(0)" });
      //   });
      this.scroll.scrollTo(0, 0, 500);
    }
  }
};
</script>

<style lang='scss' scoped>
.idea ::v-deep {
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
    height: 120px;
    overflow: hidden;
    background: #354e44 100%;
    .van-icon {
      color: white;
    }
    // 导航
    .van-nav-bar {
      background: #354e44 100%;
      margin-top: 20px;
      .van-nav-bar__text {
        font-family: PingFangSC-Regular;
        font-size: 17px;
        letter-spacing: 1.21px;
        color: white;
      }
      .van-ellipsis {
        font-family: PingFangSC-Regular;
        font-size: 17px;
        color: #ffffff;
        letter-spacing: 1.21px;
      }
    }
  }
  //   路由导航
  .bar {
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin: 0 auto;
    height: 30px;
    position: relative;
    margin-top: -40px;
    z-index: 999;
    margin-bottom: 10px;
    a {
      display: block;
      color: white;
      font-family: PingFangSC-Regular;
      font-size: 15px;
      color: #ffffff;
      letter-spacing: 1.07px;
      position: relative;
      .underline {
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
        width: 31px;
        height: 3px;
        background: white;
        border-radius: 5px 5px 0 0;
        opacity: 0;
        transition: all 0.2s linear;
      }
      &.router-link-active .underline {
        opacity: 1;
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
    margin-top: -15px;
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
