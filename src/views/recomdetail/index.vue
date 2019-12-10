<template>
  <div class="remdetail-main">
    <div @click="$router.go(-1)" class="remdetail-nav">
      <img class="navimg1" :src="require('@/assets/imgs/icon/jiantou.png')" alt />
      <img class="navimg2" :src="require('@/assets/imgs/icon/forward.png')" alt />
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="remdetail-box">
          <div class="img-box">
            <img :src="require('@/assets/imgs/recom/detailbg.png')" alt />
          </div>
          <div class="shopcar">
            <img :src="require('@/assets/imgs/recom/shopcar.png')" alt />
          </div>
          <div class="detail">
            <div class="detail-top">
              <p class="detail-name">切割式床头柜</p>
              <p class="detail-from">by Adrianne Ho</p>
              <div class="detail-bottom">
                <div class="detail-color">
                  <div class="color c1"></div>
                  <div class="color c2"></div>
                  <div class="color c3"></div>
                </div>
                <p class="detail-price">¥560</p>
              </div>
            </div>
            <div class="present">轻北欧风个性与舒适并存，干净简洁的切合拼合外观，时尚简约。切割外观，置于居室增添一抹亮丽风景。</div>
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
  name: "remdetail",
  data() {
    return {
      radio: "0",
      feedback: ""
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
.remdetail-main {
  width: 100%;
  height: 667px;
  position: fixed;
  top: 0;
  background-color: #fff;
  color: aliceblue;
  .remdetail-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 90%;
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
    z-index: 999;
    .navimg1 {
      width: 25px;
      height: 25px;
      transform: rotate(-180deg);
    }
    .navimg2 {
      width: 25px;
      height: 25px;
    }
  }
  .wrapper {
    height: 500px;
    .content {
      height: 550px;
      .remdetail-box {
        position: relative;
        .img-box {
          img {
            width: 100%;
          }
        }
        .shopcar {
          position: absolute;
          top: 480px;
          right: 35px;
          width: 70px;
          height: 70px;
          background-color: #354e44;
          border-radius: 50%;
          text-align: center;
          img {
            width: 40px;
            margin-top: 15px;
          }
        }
        .detail {
          width: 100%;
          height: 300px;
          text-align: left;
          margin-top: 30px;
          .detail-top {
            width: 90%;
            margin: 0 auto;
            .detail-name {
              font-size: 24px;
              border-radius: bolder;
              color: #000;
            }
            .detail-from {
              padding-top: 10px;
              font-size: 18px;
              color: #b0b0b0;
              letter-spacing: 1.1px;
            }
            .detail-bottom {
              width: 100%;
              margin: 0 auto;
              padding-top: 10px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .detail-color {
                width: 55px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .color {
                  width: 12px;
                  height: 12px;
                  border-radius: 50%;
                }
                .c1 {
                  background-color: rgb(72, 145, 228);
                }
                .c2 {
                  background-color: rgb(80, 78, 78);
                }
                .c3 {
                  background-color: rgb(212, 206, 206);
                }
              }
              .detail-price {
                font-size: 26px;
                color: #000;
                font-weight: bold;
              }
            }
          }
          .present {
            width: 90%;
            padding-top: 15px;
            color: #8a8a8a;
            letter-spacing: 1px;
            font-size: 16px;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
