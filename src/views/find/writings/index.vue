
<template>
  <div class="nivo">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!-- 头部 -->

        <div class="container">
          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 轮播 -->
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <router-link tag="a" to="/articledetail">
                <div class="box box1">
                  <div class="img"></div>
                  <div class="footer">
                    <div class="left">
                      <img :src="eyes" alt />
                      <span>6851</span>
                    </div>
                    <div class="right">
                      <img :src="zan" alt />
                      <img :src="forward" alt />
                    </div>
                  </div>
                </div>
              </router-link>
              <div class="box box2">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
              <div class="box box3">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
              <div class="box box4">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="box cub1">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
              <div class="box cub2">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
              <div class="box cub3">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
              <div class="box cub4">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="box chair1">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
              <div class="box chair2">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
              <div class="box chair3">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
              <div class="box chair4">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="box hua1">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
              <div class="box hua2">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
              <div class="box hua3">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
              <div class="box hua4">
                <div class="img"></div>
                <div class="footer">
                  <div class="left">
                    <img :src="eyes" alt />
                    <span>6851</span>
                  </div>
                  <div class="right">
                    <img :src="zan" alt />
                    <img :src="forward" alt />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <!-- Optional controls -->
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var text;
import BScroll from "@better-scroll/core";
export default {
  name: "find",

  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.1
      },
      zan: require("@/assets/imgs/icon/zan.png"),
      forward: require("@/assets/imgs/icon/forward-act.png"),
      eyes: require("@/assets/imgs/icon/eyes-act.png")
    };
  },

  methods: {},
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        tap: true,
        momentum: true
      });
      this.$store.state.wrapper = this.scroll;
    });
  }
};
</script>

<style lang='scss' scoped>
.nivo ::v-deep {
  height: 100%;
  .wrapper {
    height: calc(100% - 150px);
  }
  // 头部
  .header {
    width: 100%;
    height: 103px;
    background: #354e44;
    text-align: center;
    overflow: hidden;
    .nav-bar {
      margin-top: 45px;
      a {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 1.14px;
        text-decoration: none;
        margin-right: 20px;
        position: relative;
        display: inline-block;
        &.router-link-exact-active {
          .underline {
            opacity: 1;
          }
        }
        &:nth-child(2) {
          margin-right: 0;
        }
        // 下划线
        .underline {
          position: absolute;
          bottom: -10px;
          right: 0px;
          display: block;
          background-color: white;
          width: 32px;
          height: 3px;
          border-radius: 1.5px;
          opacity: 0;
          transition: all 0.2s linear;
        }
      }
    }
  }
  // container
  .container {
    border-radius: 30px 30px 0 0;
    margin-top: -30px;
    background-color: #f1ece7;
    overflow: hidden;
    // 分页器
    .swiper-pagination {
      width: 90%;
      margin-left: 50%;
      transform: translateX(-50%);
      margin-top: 15px;
      .swiper-pagination-bullet {
        width: 42px;
        height: 42px;
        background: url(~@/assets/imgs/icon/light-green.png) no-repeat center;
        // background-color: white;
        opacity: 1;
        background-size: 70% 85%;
        margin-right: 30px;
        &:nth-child(4) {
          margin-right: 0;
          background: url(~@/assets/imgs/icon/decorate-green.png) no-repeat
            center;
          background-size: 70% 85%;
        }
        &:nth-child(3) {
          margin-right: 0;
          background: url(~@/assets/imgs/icon/chair-green.png) no-repeat center;
          background-size: 70% 85%;
          margin-right: 30px;
        }
        &:nth-child(2) {
          margin-right: 0;
          background: url(~@/assets/imgs/icon/wardrobe-green.png) no-repeat
            center;
          background-size: 70% 85%;
          margin-right: 30px;
        }

        &.swiper-pagination-bullet-active:nth-child(1) {
          box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
          background: url(~@/assets/imgs/icon/light.png) no-repeat center;
          transform: scale(1.2);
          background-color: #354e44;
          background-size: 70% 85%;
          box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
        }

        &.swiper-pagination-bullet-active:nth-child(2) {
          box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
          background: url(~@/assets/imgs/icon/wardrobe.png) no-repeat center;
          transform: scale(1.2);
          background-color: #354e44;
          background-size: 70% 85%;
          box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
        }
        &.swiper-pagination-bullet-active:nth-child(3) {
          box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
          background: url(~@/assets/imgs/icon/chair.png) no-repeat center;
          transform: scale(1.2);
          background-color: #354e44;
          background-size: 70% 85%;
          box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
        }

        &.swiper-pagination-bullet-active:nth-child(4) {
          box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
          background: url(~@/assets/imgs/icon/decorate.png) no-repeat center;
          transform: scale(1.2);
          background-color: #354e44;
          background-size: 70% 85%;
          box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.26);
        }
      }
    }
    .swiper-container {
      height: calc(100% + 150px);
      margin-top: 80px;
      .swiper-slide {
        // 公共样式
        .box {
          margin-bottom: 30px;
          .img {
            width: 100%;
            height: 191px;
          }
          .footer {
            height: 50px;
            background: white;
            border-radius: 0 0 12px 12px;
            .left {
              float: left;
              margin-left: 25px;
              margin-top: 19px;
              vertical-align: middle;
              span {
                font-family: PingFangSC-Regular;
                font-size: 13px;
                color: #3e3e3e;
                letter-spacing: 0.93px;
                margin-left: 5px;
              }
              img {
                width: 22px;
                height: 14px;
              }
            }
            .right {
              float: right;
              margin-right: 25px;
              margin-top: 19px;
              img {
                width: 20px;
                height: 20px;
                &:nth-child(1) {
                  margin-right: 20px;
                }
              }
            }
          }
        }
        // light
        .box.box1 {
          .img {
            background: url(~@/views/find/imgs/light1.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.box2 {
          .img {
            background: url(~@/views/find/imgs/light2.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.box3 {
          .img {
            background: url(~@/views/find/imgs/light3.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.box4 {
          .img {
            background: url(~@/views/find/imgs/light4.png) no-repeat center;
            background-size: 100% 100%;
          }
        }

        // 衣柜
        .box.cub1 {
          .img {
            background: url(~@/views/find/imgs/cub1.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.cub2 {
          .img {
            background: url(~@/views/find/imgs/cub2.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.cub3 {
          .img {
            background: url(~@/views/find/imgs/cub3.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.cub4 {
          .img {
            background: url(~@/views/find/imgs/cub4.png) no-repeat center;
            background-size: 100% 100%;
          }
        }

        // 椅子
        .box.chair1 {
          .img {
            background: url(~@/views/find/imgs/chair1.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.chair2 {
          .img {
            background: url(~@/views/find/imgs/chair2.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.chair3 {
          .img {
            background: url(~@/views/find/imgs/chair3.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.chair4 {
          .img {
            background: url(~@/views/find/imgs/chair4.png) no-repeat center;
            background-size: 100% 100%;
          }
        }

        //花瓶
        .box.hua1 {
          .img {
            background: url(~@/views/find/imgs/hua1.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.hua2 {
          .img {
            background: url(~@/views/find/imgs/hua2.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.hua3 {
          .img {
            background: url(~@/views/find/imgs/hua3.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .box.hua4 {
          .img {
            background: url(~@/views/find/imgs/hua4.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
</style>
