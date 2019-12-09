<template>
  <div class="staff-main">
    <div @click="$router.go(-1)" class="staff-nav">
      <img :src="require('@/assets/imgs/icon/jiantou.png')" alt />
      <p>申请售后</p>

      <div class="nav-box"></div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="staff-box">
          <div class="staff-title">
            <p>服务类型</p>
            <div class="staff-radiobox">
              <el-radio-group fill="#354E44" text-color="#fffff" v-model="radio" size="small">
                <el-radio-button class="staff-radio" label="0">换货</el-radio-button>
                <el-radio-button class="staff-radio" label="1">退货</el-radio-button>
                <el-radio-button class="staff-radio" label="2">仅退款</el-radio-button>
              </el-radio-group>
            </div>
          </div>
          <div class="staff-info">
            <div class="info-title">
              <div class="order-number">订单编号：2718371628</div>
              <div class="order-info">
                <img :src="require('@/assets/imgs/myself/satff.png')" alt />
                <div>
                  <div class="goods-name">布袋香薰机</div>
                  <div class="goods-number">
                    <p>编号：114534</p>
                    <p>x1</p>
                  </div>
                  <div class="goods-norm">规格：长430X宽522X高848mm</div>
                </div>
              </div>
              <div class="sum">合计：¥2719</div>
            </div>
          </div>
          <div class="staff-feedback">
            <p>问题描述</p>
            <el-input
              class="staff-text"
              type="textarea"
              :rows="7"
              placeholder="请输入您的评价信息"
              v-model="feedback"
            ></el-input>
            <div class="staff-btnbox">
              <van-button
                class="staff-btn"
                color="rgb(53, 78, 68)"
                style="font-weight:bold"
                round
                type="primary"
                size="large"
              >提交</van-button>
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
  name: "staff",
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
.staff-main {
  width: 100%;
  height: 667px;
  position: fixed;
  top: 0;
  background-color: #354e44;
  .staff-nav {
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
      .staff-box {
        width: 100%;
        height: 650px;
        margin-top: 55px;
        border-radius: 20px;
        background-color: #f1ece7;
        .staff-title {
          width: 90%;
          margin: 0 auto;
          padding-top: 20px;
          p {
            font-size: 18px;
            font-weight: bolder;
            text-align: left;
          }
          .staff-radiobox {
            text-align: left;
            padding-top: 13px;
            .staff-radio {
              padding-right: 15px;
            }
            .staff-radio :nth-child(2) {
              width: 70px;
              border-radius: 5px !important;
              background-color: #f1ece7;
              border: 1px solid rgb(36, 35, 35);
            }
          }
        }
        .staff-info {
          width: 90%;
          height: 180px;
          margin: 0 auto;
          margin-top: 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
          border-radius: 12px;
          .info-title {
            width: 80%;
            margin: 0 auto;
            .order-number {
              width: 100%;
              font-size: 15px;
              text-align: left;
              padding-top: 20px;
              font-weight: bolder;
            }
            .order-info {
              width: 100%;
              padding-top: 15px;
              margin: 0 auto;
              text-align: left;
              display: flex;
              justify-content: space-between;
              align-items: center;
              line-height: 21px;
              font-size: 12px;

              img {
                width: 85px;
                height: 85px;
              }
              .goods-name {
                font-size: 16px;
                font-weight: bolder;
              }
              .goods-number {
                display: flex;
                justify-content: space-between;
              }
            }
            .sum {
              text-align: right;
              font-size: 16px;
              font-weight: bolder;
            }
          }
        }
        .staff-feedback {
          width: 90%;
          height: 100%;
          padding-top: 20px;
          margin: 0 auto;
          p {
            width: 100%;
            font-size: 18px;
            text-align: left;
            font-weight: bolder;
          }
          .staff-text {
            width: 100%;
            height: 150px;
            padding-top: 20px;
            box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
            border-radius: 12px;
            textarea ::v-deep {
              box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
              border-radius: 12px;
            }
          }
          .staff-btnbox {
            width: 80%;
            margin: 0 auto;
            margin-top: 40px;
          }
        }
      }
    }
  }
}
</style>
