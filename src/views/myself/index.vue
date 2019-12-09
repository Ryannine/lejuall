<template>
  <div class="myself-main">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="myself-concent">
          <div class="myself-header">
            <div class="header-sup">
              <div class="header-myinfo">
                <img :src="require('@/assets/imgs/myself/headimg.png')" class="header-img" alt />
                <div class="header-name">
                  <p>Hi ~</p>
                  <p>你还没有登录呢</p>
                </div>
              </div>
              <a class="header-set" href="#">
                <img :src="require('@/assets/imgs/icon/set.png')" alt />
              </a>
            </div>
            <div class="header-sub">
              <a
                href="#"
                class="header-btn btn1"
                @touchstart="touchstart(1)"
                @touchend="touchend(1)"
              >注册</a>
              <a
                href="#"
                class="header-btn btn2"
                @touchstart="touchstart(2)"
                @touchend="touchend(2)"
              >登录</a>
            </div>
          </div>
          <div class="myself-myorder">
            <router-link tag="a" to="/order" class="myorder-title">
              <div>我的订单</div>
              <a href>
                <img :src="require('@/assets/imgs/icon/jiantou2.png')" alt />
              </a>
            </router-link>
            <div class="myorder-line"></div>
            <div class="myorder-list">
              <router-link tag="a" to="/order/obligation" class="myorder-box">
                <img :src="require('@/assets/imgs/icon/pay.png')" alt />
                <p>待付款</p>
              </router-link>
              <router-link tag="a" to="/order/accountpaid" class="myorder-box">
                <img :src="require('@/assets/imgs/icon/Inbound.png')" alt />
                <p>待收货</p>
              </router-link>
              <router-link tag="a" to="/order/done" class="myorder-box">
                <img :src="require('@/assets/imgs/icon/accomplish.png')" alt />
                <p>已完成</p>
              </router-link>
              <router-link tag="a" to="/staff" class="myorder-box">
                <img :src="require('@/assets/imgs/icon/after-sale.png')" alt />
                <p>售后</p>
              </router-link>
            </div>
          </div>
          <div class="myself-info">
            <div class="info-list">
              <router-link tag="a" to="/collect" class="info-box">
                <img :src="require('@/assets/imgs/icon/collect2.png')" alt />
                <p>收藏</p>
              </router-link>
              <router-link tag="a" to="/brand" class="info-box">
                <img :src="require('@/assets/imgs/icon/brand.png')" alt />
                <p>品牌</p>
              </router-link>
              <router-link tag="a" to="/article" class="info-box">
                <img :src="require('@/assets/imgs/icon/article.png')" alt />
                <p>文章</p>
              </router-link>
            </div>
            <div class="info-list">
              <router-link tag="a" to="/adress" class="info-box">
                <img :src="require('@/assets/imgs/icon/adress.png')" alt />
                <p>地址</p>
              </router-link>
              <router-link tag="a" to="/cardpack" class="info-box">
                <img :src="require('@/assets/imgs/icon/package.png')" alt />
                <p>卡包</p>
              </router-link>
              <router-link tag="a" to="/staff" class="info-box">
                <img :src="require('@/assets/imgs/icon/staff.png')" alt />
                <p>客服</p>
              </router-link>
            </div>
            <div class="info-list">
              <router-link tag="a" to="/safe" class="info-box">
                <img :src="require('@/assets/imgs/icon/safe.png')" alt />
                <p>安全</p>
              </router-link>
              <router-link tag="a" to="/about" class="info-box">
                <img :src="require('@/assets/imgs/icon/about.png')" alt />
                <p>关于</p>
              </router-link>
              <div class="info-box1"></div>
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
  name: "mySelf",
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
  methods: {
    touchstart(val) {
      if (val == 1) {
        $(".btn1").addClass("header-btn-act");
      } else {
        $(".btn2").addClass("header-btn-act");
      }
    },
    touchend(val) {
      if (val == 1) {
        $(".btn1").removeClass("header-btn-act");
      } else {
        $(".btn2").removeClass("header-btn-act");
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.myself-main {
  width: 100%;
  height: 100%;
  background-color: #f1ece7;
  a {
    color: #000;
  }
  .wrapper {
    height: 667px;
    .content {
      height: 700px;
      .myself-concent {
        width: 90%;
        margin: 0 auto;
        .myself-header {
          // background-color: rgb(219, 118, 118);
          width: 100%;
          height: 180px;
          .header-sup {
            display: flex;
            justify-content: space-between;
            .header-myinfo {
              width: 260px;
              height: 120px;
              display: flex;
              justify-content: space-around;
              align-items: center;
              .header-img {
                width: 95px;
                height: 95px;
              }
              .header-name {
                font-size: 18px;
                font-weight: bolder;
                color: #3d4c46;
                letter-spacing: 1px;
              }
            }
            .header-set {
              margin-top: 15px;
              img {
                width: 35px;
                height: 35px;
              }
            }
          }
          .header-sub {
            width: 80%;
            height: 30px;
            margin: 10px auto;
            display: flex;
            justify-content: space-around;
            align-content: center;
            .header-btn {
              color: #3d4c46;
              font-size: 18px;
              font-weight: bolder;
              line-height: 50px;
              width: 110px;
              height: 45px;
              border: 2px solid #000;
              border-radius: 5px;
              background-color: #f1ece7;
            }
            .header-btn-act {
              color: #f1ece7;
              background-color: rgb(65, 64, 64);
            }
          }
        }
        .myself-myorder {
          width: 100%;
          height: 140px;
          background-color: #fff;
          border-radius: 5px;
          font-size: 18px;
          margin-top: 20px;
          .myorder-title {
            display: inline-block;
            width: 88%;
            margin: 0 auto;
            padding-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a {
              width: 25px;
              height: 25px;
              img {
                padding-top: 3px;
                width: 20px;
                height: 20px;
              }
            }
          }
          .myorder-line {
            width: 90%;
            height: 2px;
            margin: 6px auto;
            border-radius: 2px;
            background-color: rgba(184, 177, 177, 0.3);
          }
          .myorder-list {
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .myorder-box {
              -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
              -webkit-user-select: none;
              -moz-user-focus: none;
              -moz-user-select: none;
              font-size: 16px;
              width: 60px;
              height: 60px;
              img {
                padding: 5px;
                width: 35px;
                height: 35px;
              }
            }
          }
        }
        .myself-info {
          margin-top: 20px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-radius: 5px;
          width: 100%;
          height: 100%;
          background-color: #ffffff;

          .info-list {
            padding-top: 20px;
            padding-bottom: 20px;
            width: 100%;
            display: flex;
            font-size: 16px;
            color: #000;
            justify-content: space-around;
            align-items: center;
            .info-box {
              -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
              -webkit-user-select: none;
              -moz-user-focus: none;
              -moz-user-select: none;
              width: 55px;
              height: 55px;
              img {
                width: 45px;
                height: 45px;
              }
              p {
                padding-top: 10px;
              }
            }
            .info-box1 {
              width: 50px;
            }
          }
        }
      }
    }
  }
}
</style>
