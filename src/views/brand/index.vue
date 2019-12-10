<template>
  <div class="brand-main">
    <div @click="$router.go(-1)" class="brand-nav">
      <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
      <p>品牌</p>
      <div class="nav-box"></div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="brand-list">
          <div class="brand-box">
            <div class="brand-info">
              <div class="info-head">
                <img :src="require('@/assets/imgs/myself/brand1.png')" alt />
              </div>
              <div class="info-title">
                <p class="info-name">Hartford 系列</p>
                <p class="info-fans">粉丝:91893</p>
              </div>
            </div>
            <a href="#" class="info-line">
              <span class="info-icon"></span>
              <span class="info-icon"></span>
              <span class="info-icon"></span>
            </a>
          </div>
          <div class="brand-box">
            <div class="brand-info">
              <div class="info-head">
                <img :src="require('@/assets/imgs/myself/brand2.png')" alt />
              </div>
              <div class="info-title">
                <p class="info-name">迪欧 极简系列</p>
                <p class="info-fans">粉丝:18293</p>
              </div>
            </div>
            <a href="#" class="info-line">
              <span class="info-icon"></span>
              <span class="info-icon"></span>
              <span class="info-icon"></span>
            </a>
          </div>
          <div class="brand-box">
            <div class="brand-info">
              <div class="info-head">
                <img :src="require('@/assets/imgs/myself/brand3.png')" alt />
              </div>
              <div class="info-title">
                <p class="info-name">KUOKUYO品牌家具</p>
                <p class="info-fans">粉丝:271890</p>
              </div>
            </div>
            <a href="#" class="info-line">
              <span class="info-icon"></span>
              <span class="info-icon"></span>
              <span class="info-icon"></span>
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
  name: "brand",
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
.brand-main {
  width: 100%;
  height: 667px;
  position: fixed;
  top: 0;
  background-color: #354e44;
  .brand-nav {
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
      .brand-list {
        margin-top: 55px;
        background-color: rgb(218, 215, 215);
        border-radius: 25px;
        height: 650px;
        .brand-box {
          position: relative;
          width: 90%;
          height: 120px;
          margin: 0 auto;
          padding-top: 30px;
          .brand-info {
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
              width: 155px;
              text-align: left;
              line-height: 30px;
              font-weight: bolder;
              overflow: hidden;
              .info-name {
                font-size: 18px;
                color: rgb(77, 74, 74);
              }
              .info-fans {
                font-size: 14px;
                color: rgba(77, 74, 74, 0.6);
              }
            }
          }
          .info-line {
            position: absolute;
            top: 35px;
            right: 5px;
            width: 25px;
            height: 6px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: 10px;
            background-color: rgba(122, 121, 121, 0.1);
            .info-icon {
              display: inline-block;
              margin: 0 auto;
              width: 3px;
              height: 3px;
              border-radius: 50%;
              background-color: rgb(167, 164, 164);
            }
          }
        }
      }
    }
  }
}
</style>
