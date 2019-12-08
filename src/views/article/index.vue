<template>
  <div class="article-main">
    <div @click="$router.go(-1)" class="article-nav">
      <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
      <p>文章</p>
      <div class="nav-box"></div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="article-list">
          <div class="article-box">
            <div class="article-info">
              <div class="info-head">
                <img :src="require('@/assets/imgs/myself/article1.png')" alt />
              </div>
              <div class="info-title">
                <p class="info-name">莲花吊灯</p>
                <p class="info-fans">1426人以收藏</p>
                <div class="info-summary">一把有温度的好椅子是…</div>
              </div>
            </div>
            <div class="article-info">
              <div class="info-head">
                <img :src="require('@/assets/imgs/myself/article2.png')" alt />
              </div>
              <div class="info-title">
                <p class="info-name">现代极简实木椅休闲椅</p>
                <p class="info-fans">1426人以收藏</p>
                <div class="info-summary">一把有温度的好椅子是…</div>
              </div>
            </div>
            <div class="article-info">
              <div class="info-head">
                <img :src="require('@/assets/imgs/myself/article3.png')" alt />
              </div>
              <div class="info-title">
                <p class="info-name">欧式屏风隔断</p>
                <p class="info-fans">1426人以收藏</p>
                <div class="info-summary">一把有温度的好椅子是…</div>
              </div>
            </div>
            <div class="article-info">
              <div class="info-head">
                <img :src="require('@/assets/imgs/myself/article4.png')" alt />
              </div>
              <div class="info-title">
                <p class="info-name">现代极简吊灯</p>
                <p class="info-fans">1426人以收藏</p>
                <div class="info-summary">一把有温度的好椅子是…</div>
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
  name: "article",
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
.article-main {
  width: 100%;
  height: 667px;
  position: fixed;
  top: 0;
  background-color: #354e44;
  .article-nav {
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
      .article-list {
        margin-top: 55px;
        background-color: rgb(218, 215, 215);
        border-radius: 25px;
        height: 650px;
        .article-box {
          position: relative;
          width: 92%;
          margin: 0 auto;
          padding-top: 30px;
          display: flex;
          justify-content: space-around;
          align-items: start;
          flex-wrap: wrap;
          vertical-align: top;
          .article-info {
            width: 47%;
            padding-bottom: 10px;
            margin-bottom: 20px;
            border-radius: 10px;
            background-color: #fff;
            .info-head {
              border-radius: 10px;
              img {
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                width: 100%;
              }
            }
            .info-title {
              width: 155px;
              text-align: left;
              line-height: 30px;
              font-weight: bolder;
              overflow: hidden;
              .info-name {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-top: 20px;
                width: 80%;
                margin: 0 auto;
                font-size: 16px;
                color: rgb(77, 74, 74);
              }
              .info-fans {
                width: 80%;
                margin: 0 auto;
                font-size: 11px;
                color: #8d8d8d;
                letter-spacing: 0.79px;
              }
              .info-summary {
                width: 80%;
                margin: 0 auto;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 11px;
                color: #b1b1b1;
                letter-spacing: 0.79px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
