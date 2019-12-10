<template>
  <div class="home">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!-- 头部 -->
        <div class="header" v-if="$route.meta.headerShow">
          <swiper class="swiper1" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <img :src="banner1" alt />
            </swiper-slide>
            <swiper-slide>
              <img :src="banner2" alt />
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="header-c">
            <img :src="left" alt class="left" />
            <div class="center">
              <router-link to="/home/tuijian">
                推荐
                <span class="underline"></span>
              </router-link>
              <router-link to="/home/brand" style="margin-left:10px">
                品牌
                <span class="underline"></span>
              </router-link>
            </div>
            <div class="right">
              <img :src="search" @click="$router.push('/search')" alt class="search" />
              <img
                :src="shop"
                style="margin-left:10px"
                @click="$router.push('/shop')"
                alt
                class="shop"
              />
            </div>
          </div>
        </div>
        <div class="header header2" v-else>
          <img class="bg" :src="bg" alt />
          <div class="header-c">
            <img :src="left" alt class="left" />
            <div class="center">
              <router-link to="/home/tuijian">
                推荐
                <span class="underline"></span>
              </router-link>
              <router-link to="/home/brand" style="margin-left:10px">
                品牌
                <span class="underline"></span>
              </router-link>
            </div>
            <div class="right">
              <img :src="search" alt class="search" @click="$router.push('/search')" />
              <img :src="shop" style="margin-left:10px" alt class="shop" />
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: "home",
  data() {
    return {
      left: require("@/assets/imgs/icon/news.png"),
      search: require("@/assets/imgs/icon/search.png"),
      shop: require("@/assets/imgs/icon/shop.png"),
      banner1: require("@/assets/imgs/homeImg/banner1.png"),
      banner2: require("@/assets/imgs/homeImg/banner2.png"),
      bg: require("@/assets/imgs/homeImg/bg.png"),
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {},
  components: {},
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        tap: true,
        momentum: true
      });
      this.scroll.refresh();
      // this.scroll.maxScrollY = -250;
      this.$store.state.wrapper = this.scroll;
    });
  }
};
</script>
<style lang="scss" scoped>
html,
body {
  height: 100%;
}
.home ::v-deep {
  height: 100%;
  .wrapper {
    height: calc(100% - 174px);
  }

  .wrapper .content {
    overflow: hidden;
    // 头部
    .header {
      position: relative;
      width: 100%;
      //   background-image: url(~@/assets/imgs/homeImg/banner1.png);
      //   background-repeat: no-repeat;
      height: 274px;
      background-size: cover;
      overflow: hidden;
      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -150px;
      }
      .swiper1 {
        height: 100%;
        .swiper-pagination {
          bottom: 20px;
          .swiper-pagination-bullet {
            background-color: black;

            &.swiper-pagination-bullet-active {
              background-color: gainsboro;
              border-radius: 50%;
            }
          }
        }
        .swiper-slide {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      //   头部导航
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
  }
}
</style>

