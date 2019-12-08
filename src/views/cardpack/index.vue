<template>
  <div class="package-main">
    <div @click="$router.go(-1)" class="package-nav">
      <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
      <p>卡包</p>
      <div class="nav-box"></div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="package-list">
          <div class="package-bg">
            <div :style="bgImg" class="package-line">
              <div class="package-left">
                <div class="left-info">
                  <img :src="require('@/assets/imgs/myself/package1.png')" alt />
                  <div class="info-title">
                    <div class="info-price">
                      <span class="price-tips">¥50</span>
                      <span>满550减</span>
                    </div>
                    <div class="info-t1">店铺优惠卷</div>
                    <div class="info-date">2019.1.3-2019.5.11</div>
                  </div>
                </div>
              </div>
              <div class="package-right">
                <a href="#">去使用</a>
              </div>
            </div>
          </div>
          <div class="package-bg">
            <div :style="bgImg" class="package-line">
              <div class="package-left">
                <div class="left-info">
                  <img :src="require('@/assets/imgs/myself/package2.png')" alt />
                  <div class="info-title">
                    <div class="info-price">
                      <span class="price-tips">¥150</span>
                      <span>满1000减</span>
                    </div>
                    <div class="info-t1">店铺优惠卷</div>
                    <div class="info-date">2019.1.3-2019.5.11</div>
                  </div>
                </div>
              </div>
              <div class="package-right">
                <a href="#">去使用</a>
              </div>
            </div>
          </div>
          <div class="package-bg">
            <div :style="bgImg" class="package-line">
              <div class="package-left">
                <div class="left-info">
                  <img :src="require('@/assets/imgs/myself/package3.png')" alt />
                  <div class="info-title">
                    <div class="info-price">
                      <span class="price-tips">¥30</span>
                      <span>满200减</span>
                    </div>
                    <div class="info-t1">店铺优惠卷</div>
                    <div class="info-date">2019.1.3-2019.5.11</div>
                  </div>
                </div>
              </div>
              <div class="package-right">
                <a href="#">去使用</a>
              </div>
            </div>
          </div>
          <div class="package-bg">
            <div :style="bgImg" class="package-line">
              <div class="package-left">
                <div class="left-info">
                  <img :src="require('@/assets/imgs/myself/package4.png')" alt />
                  <div class="info-title">
                    <div class="info-price">
                      <span class="price-tips">¥10</span>
                      <span>满150减</span>
                    </div>
                    <div class="info-t1">店铺优惠卷</div>
                    <div class="info-date">2019.1.3-2019.5.11</div>
                  </div>
                </div>
              </div>
              <div class="package-right">
                <a href="#">去使用</a>
              </div>
            </div>
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
  name: "package",
  data() {
    return {
      bgImg: {
        backgroundImage:
          "url(" + require("@/assets/imgs/icon/package-bg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
        // backgroundPosition: "50px 50px"
      }
    };
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
  methods: {}
};
</script>

<style lang='scss' scoped>
.package-main {
  width: 100%;
  height: 667px;
  position: fixed;
  top: 0;
  background-color: #354e44;
  .package-nav {
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

      .package-list {
        margin-top: 55px;
        background-color: rgb(218, 215, 215);
        border-radius: 25px;
        height: 650px;
        .package-bg {
          width: 95%;
          height: 120px;
          margin: 0 auto;
          padding-top: 20px;
          .package-line {
            width: 100%;
            height: 115px;
            display: flex;
            justify-content: center;
            .package-left {
              width: 91%;
              height: 100%;
              border: 2px dashed #dad7d7;
              .left-info {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                text-align: left;
                img {
                  width: 70px;
                  height: 70px;
                  padding-left: 13px;
                  padding-bottom: 5px;
                }
                .info-title {
                  .info-price {
                    font-size: 16px;
                    font-weight: bolder;
                    .price-tips {
                      font-size: 22px;
                    }
                  }
                  .info-t1 {
                    color: rgba(77, 74, 74, 0.4);
                    font-size: 14px;
                  }
                  .info-date {
                    color: rgba(77, 74, 74, 0.4);
                    font-size: 14px;
                  }
                }
              }
            }
            .package-right {
              width: 30%;
              height: 110px;
              line-height: 110px;
              a {
                text-decoration: none;
                color: #000;
                padding-top: 5px;
                font-size: 16px;
                font-weight: bolder;
              }
              a:visited {
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
