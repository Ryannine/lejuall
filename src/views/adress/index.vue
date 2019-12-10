<template>
  <div class="adress-main">
    <div @click="$router.go(-1)" class="adress-nav">
      <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
      <p>收货地址</p>
      <div class="nav-box"></div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="adress-list">
          <div class="adress-box">
            <div class="adress-line">
              <div class="adress-left">
                <div class="info-head">
                  <p>勿</p>
                </div>
                <div class="info-title">
                  <p class="info-username">勿忘我</p>
                  <p class="info-adress">地址：湖南省长沙市镇北街</p>
                  <p class="info-tel">联系方式：1328394722</p>
                </div>
              </div>
              <div class="adress-right">
                <a href="#">编辑</a>
              </div>
            </div>
          </div>
          <div class="adress-box">
            <div class="adress-line">
              <div class="adress-left">
                <div class="info-head">
                  <p>叶</p>
                </div>
                <div class="info-title">
                  <p class="info-username">叶小飞</p>
                  <p class="info-adress">地址：河南省郑州市金水区80号</p>
                  <p class="info-tel">联系方式：1527364527</p>
                </div>
              </div>
              <div class="adress-right">
                <a href="#">编辑</a>
              </div>
            </div>
          </div>
          <div class="adress-box">
            <div class="adress-line">
              <div class="adress-left">
                <div class="info-head">
                  <p>韩</p>
                </div>
                <div class="info-title">
                  <p class="info-username">韩立</p>
                  <p class="info-adress">地址：河南省郑州市郑东新区60号</p>
                  <p class="info-tel">联系方式：1837264829</p>
                </div>
              </div>
              <div class="adress-right">
                <a href="#">编辑</a>
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
  name: "adress",
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
.adress-main {
  width: 100%;
  height: 667px;
  position: fixed;
  top: 0;
  background-color: #354e44;
  .adress-nav {
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
      margin-left: 20px;
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
      .adress-list {
        margin-top: 55px;
        background-color: rgb(218, 215, 215);
        border-radius: 25px;
        height: 650px;
        .adress-box {
          width: 90%;
          height: 120px;
          margin: 0 auto;
          padding-top: 30px;
          .adress-line {
            width: 100%;
            height: 115px;
            display: flex;
            justify-content: center;
            background-color: #fff;
            border-radius: 10px;
            .adress-left {
              width: 91%;
              height: 100%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              padding-left: 10px;
              .info-head {
                width: 50px;
                height: 50px;
                text-align: center;
                background-color: rgba(27, 26, 26, 0.8);
                border-radius: 50%;
                p {
                  width: 100%;
                  height: 100%;
                  line-height: 50px;
                  color: #fff;
                  font-size: 30px;
                }
              }
              .info-title {
                width: 155px;
                text-align: left;
                line-height: 20px;
                font-size: 12px;
                font-weight: bolder;
                overflow: hidden;
                .info-username {
                  font-size: 16px;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  color: rgb(77, 74, 74);
                }
                .info-adress {
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  color: rgba(77, 74, 74, 0.6);
                }
                .info-tel {
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  -o-text-overflow: ellipsis;

                  color: rgba(77, 74, 74, 0.6);
                }
              }
            }
          }
          .adress-right {
            width: 30%;
            height: 110px;
            line-height: 110px;
            a {
              width: 70px;
              height: 50px;
              text-decoration: none;
              color: #000;
              padding-left: 10px;
              padding-right: 10px;
              font-size: 18px;
              font-weight: bolder;
              border-left: 1px solid rgb(202, 200, 200);
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
</style>
