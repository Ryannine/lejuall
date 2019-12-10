<template>
  <div class="collect-main">
    <div @click="$router.go(-1)" class="collect-nav">
      <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
      <p>收藏</p>
      <div class="nav-box"></div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="collect-list">
          <div class="collect-box">
            <div class="collect-info">
              <div class="info-head">
                <img :src="require('@/assets/imgs/myself/collect1.png')" alt />
              </div>
              <div class="info-title">
                <p class="info-name">头层牛皮沙发</p>
                <p class="info-number">编号：114534</p>
                <p class="info-norm">规格：长430X宽522X高848mm</p>
                <div class="info-bottom">
                  <p class="info-collect">收藏:241</p>
                  <p class="info-price">¥2719</p>
                </div>
              </div>
            </div>
          </div>
          <div class="collect-box">
            <div class="collect-info">
              <div class="info-head">
                <img :src="require('@/assets/imgs/myself/collect2.png')" alt />
              </div>
              <div class="info-title">
                <p class="info-name">Valley 单人沙发</p>
                <p class="info-number">编号：114534</p>
                <p class="info-norm">规格：长430X宽522X高848mm</p>
                <div class="info-bottom">
                  <p class="info-collect">收藏:241</p>
                  <p class="info-price">¥560</p>
                </div>
              </div>
            </div>
          </div>
          <div class="collect-box">
            <div class="collect-info">
              <div class="info-head">
                <img :src="require('@/assets/imgs/myself/collect3.png')" alt />
              </div>
              <div class="info-title">
                <p class="info-name">切割式床头柜</p>
                <p class="info-number">编号：114534</p>
                <p class="info-norm">规格：长430X宽522X高848mm</p>
                <div class="info-bottom">
                  <p class="info-collect">收藏:241</p>
                  <p class="info-price">¥560</p>
                </div>
              </div>
            </div>
          </div>
          <div class="collect-box">
            <div class="collect-info">
              <div class="info-head">
                <img :src="require('@/assets/imgs/myself/collect4.png')" alt />
              </div>
              <div class="info-title">
                <p class="info-name">手机充电放置器</p>
                <p class="info-number">编号：114534</p>
                <p class="info-norm">规格：长430X宽522X高848mm</p>
                <div class="info-bottom">
                  <p class="info-collect">收藏:241</p>
                  <p class="info-price">¥560</p>
                </div>
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
  name: "collect",
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
  methods: {}
};
</script>

<style lang='scss' scoped>
.collect-main {
  width: 100%;
  height: 667px;
  position: fixed;
  top: 0;
  background-color: #354e44;
  .collect-nav {
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
    background-color: #354e44;
    z-index: 999;

    img {
      width: 25px;
      height: 25px;
      margin-left: 20px;
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
      .collect-list {
        margin-top: 55px;
        background-color: rgb(218, 215, 215);
        border-radius: 25px;
        height: 650px;
        .collect-box {
          width: 90%;
          height: 120px;
          margin: 0 auto;
          padding-top: 30px;
          .collect-info {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: 10px;
            background-color: #fff;
            .info-head {
              width: 80px;
              height: 80px;
              background-color: rgba(27, 26, 26, 0.8);
              border-radius: 10px;
              img {
                width: 80px;
                height: 80px;
              }
            }
            .info-title {
              width: 200px;
              text-align: left;
              line-height: 18px;
              font-weight: bolder;
              .info-name {
                font-size: 18px;
                color: rgb(41, 40, 40);
              }
              .info-number {
                font-size: 12px;
                color: rgb(156, 152, 152);
              }
              .info-norm {
                font-size: 12px;
                color: rgb(165, 156, 156);
              }
              .info-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .info-collect {
                  font-size: 16px;
                  color: rgba(51, 49, 49, 0.8);
                }
                .info-price {
                  font-size: 20px;
                  color: rgb(77, 74, 74);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
