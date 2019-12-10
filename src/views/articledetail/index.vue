<template>
  <div class="articdetail-main">
    <div @click="$router.go(-1)" class="articdetail-nav">
      <img class="navimg1" :src="require('@/assets/imgs/icon/jiantou.png')" alt />
      <div class="title"></div>
      <img class="navimg2" :src="require('@/assets/imgs/icon/forward.png')" alt />
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="articdetail-box">
          <div class="img-box">
            <img :src="require('@/assets/imgs/article/articlede1.png')" alt />
          </div>
          <div class="shopcar">
            <img :src="require('@/assets/imgs/article/love.png')" alt />
          </div>
          <div class="detail">
            <div class="detail-top">
              <p class="detail-name">莲花吊灯</p>
              <p class="detail-from">by MacMaster</p>
              <div class="detail-bottom">
                <div class="detail-color">
                  <div class="color c1"></div>
                  <div class="color c2"></div>
                  <div class="color c3"></div>
                </div>
                <p class="detail-price">¥560</p>
              </div>
            </div>
            <div class="detail-title">手工雕刻 材质细腻</div>
            <div
              class="present"
            >由英国顶尖设计师MacMaster——木质莲花灯罩，匠心由光阴成就，也馈赠出不负岁月的作品。木质莲花灵动曼妙的形态，清新自然，每个细节都可放大品味。</div>
          </div>
          <div class="detail-info">
            <img :src="require('@/assets/imgs/article/articlede2.png')" alt />
            <p>由英国顶尖设计师MacMaster——木质莲花灯罩，匠心由光阴成就，也馈赠出不负岁月的作品。木质莲花灵动曼妙的形态，清新自然，每个细节都可放大品味。</p>
          </div>
          <img class="img-bottom" :src="require('@/assets/imgs/article/articlede3.png')" alt />
        </div>
        <div class="article-status">
          <div class="atatus-box">
            <div class="status-line">
              <p>1028</p>
              <img :src="require('@/assets/imgs/icon/comment.png')" alt />
            </div>
            <div class="status-line">
              <p>458</p>
              <img :src="require('@/assets/imgs/icon/collect-act.png')" alt />
            </div>
            <div class="status-line">
              <p>781</p>
              <img :src="require('@/assets/imgs/icon/zan.png')" alt />
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
  name: "articdetail",
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
.articdetail-main {
  width: 100%;
  height: 667px;
  position: fixed;
  top: 0;
  background-color: #fff;
  color: aliceblue;
  .articdetail-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: #000;
    z-index: 999;
    padding-left: 20px;
    .navimg1 {
      width: 25px;
      height: 25px;
      transform: rotate(-180deg);
    }
    .navimg2 {
      padding-right: 40px;
      width: 25px;
      height: 25px;
    }
    .title {
      width: 50px;
    }
  }
  .wrapper {
    height: 667px;
    .content {
      height: 960px;
      .articdetail-box {
        position: relative;
        .img-box {
          img {
            width: 100%;
          }
        }
        .shopcar {
          position: absolute;
          top: 280px;
          right: 35px;
          width: 70px;
          height: 70px;
          background-color: #354e44;
          border-radius: 50%;

          img {
            width: 40px;
            margin-top: 20px;
          }
        }
        .detail {
          width: 100%;
          height: 210px;
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
                  background-color: #663725;
                }
                .c2 {
                  background-color: #9f4405;
                }
                .c3 {
                  background-color: #cb821b;
                }
              }
              .detail-price {
                font-size: 26px;
                color: #000;
                font-weight: bold;
              }
            }
          }
          .detail-title {
            width: 90%;
            margin: 0 auto;
            color: #000;
            padding-top: 10px;
            text-align: left;
            font-size: 18px;
            font-weight: bold;
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
        .detail-info {
          width: 90%;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          img {
            width: 100px;
          }
          p {
            text-align: left;
            color: rgb(107, 103, 103);
            font-size: 14px;
            width: 190px;
          }
        }
        .img-bottom {
          padding-top: 20px;
          width: 100%;
        }
      }
      .article-status {
        width: 100%;
        padding-top: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .atatus-box {
          width: 90%;
          margin-right: 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .status-line {
            width: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            img {
              width: 30px;
            }
            p {
              color: #000;
              font-size: 18px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
