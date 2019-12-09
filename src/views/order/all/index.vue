<template>
  <div class="all-main">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="all-list">
          <div class="box">
            <div class="all-box">
              <div class="all-title">
                <div class="ordernumber">订单编号：1727384727</div>
                <div class="status">待付款</div>
              </div>
              <div class="all-info">
                <img :src="require('@/assets/imgs/myself/collect1.png')" alt />
                <div class="all-information">
                  <div class="info-box">
                    <p class="info-name">头层牛皮沙发</p>
                    <p class="info-price">¥560</p>
                  </div>
                  <div class="info-box">
                    <p class="goods-number">编号：114534</p>
                    <p class="goods-number">x1</p>
                  </div>
                  <p class="goods-number">规格：长430X宽522X高848mm</p>
                  <p class="goods-total">合计：¥560</p>
                </div>
              </div>
              <div class="all-btn">
                <van-button plain class="btn1" size="small" type="primary">取消订单</van-button>
                <van-button plain class="btn2" size="small" type="primary">付款</van-button>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="all-box">
              <div class="all-title">
                <div class="ordernumber">订单编号：2718371628</div>
                <div class="status">已发货</div>
              </div>
              <div class="all-info">
                <img :src="require('@/assets/imgs/myself/satff.png')" alt />
                <div class="all-information">
                  <div class="info-box">
                    <p class="info-name">布袋香薰机</p>
                    <p class="info-price">¥392</p>
                  </div>
                  <div class="info-box">
                    <p class="goods-number">编号：114534</p>
                    <p class="goods-number">x1</p>
                  </div>
                  <p class="goods-number">规格：948X472mm</p>
                  <p class="goods-total">合计：¥392</p>
                </div>
              </div>
              <div class="all-btn">
                <van-button plain class="btn1" size="small" type="primary">查看物流</van-button>
                <van-button plain class="btn2" size="small" type="primary">确认收货</van-button>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="all-box">
              <div class="all-title">
                <div class="ordernumber">订单编号：8271829234</div>
                <div class="status">已发货</div>
              </div>
              <div class="all-info">
                <img :src="require('@/assets/imgs/myself/order3.png')" alt />
                <div class="all-information">
                  <div class="info-box">
                    <p class="info-name">圆形垂吊装饰品</p>
                    <p class="info-price">¥1527</p>
                  </div>
                  <div class="info-box">
                    <p class="goods-number">编号：182910</p>
                    <p class="goods-number">x1</p>
                  </div>
                  <p class="goods-number">规格：长1628mm</p>
                  <p class="goods-total">合计：¥1527</p>
                </div>
              </div>
              <div class="all-btn">
                <van-button plain class="btn1" size="small" type="primary">查看物流</van-button>
                <van-button plain class="btn2" size="small" type="primary">确认收货</van-button>
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
export default {
  name: "all",
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
.all-main {
  position: fixed;
  top: 100px;
  width: 100%;
  height: calc(100%-100px);
  margin: 0 auto;
  .wrapper {
    width: 100%;
    height: 600px;
    .content {
      width: 100%;
      height: 700px;
      .all-list {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: #f1ece7;
        .box {
          padding-top: 25px;
          .all-box {
            width: 90%;
            height: 180px;
            border-radius: 15px;
            margin: 0 auto;
            background-color: #fff;
            .all-title {
              width: 85%;
              padding-top: 15px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 0 auto;
              .ordernumber {
                font-size: 16px;
              }
              .status {
                font-size: 16px;
                font-weight: bold;
              }
            }
            .all-info {
              width: 85%;
              padding-top: 15px;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
              align-items: center;
              text-align: left;
              img {
                width: 90px;
                height: 90px;
              }
              .all-information {
                line-height: 20px;
                .info-box {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  .info-name {
                    font-size: 14px;
                    font-weight: bold;
                  }
                  .info-price {
                    font-size: 15px;
                  }
                }
                .goods-number {
                  font-size: 13px;
                  color: #bbbab9;
                }
                .goods-total {
                  text-align: right;
                }
              }
            }
            .all-btn {
              width: 85%;
              margin: 0 auto;
              text-align: right;
              .btn1 {
                margin-right: 10px;
                color: rgb(145, 131, 131);
                font-size: 12px;
                font-weight: bold;
                border: 1px solid rgb(95, 94, 94);
                border-radius: 6px;
              }
              .btn2 {
                width: 70px;
                color: rgb(90, 89, 89);
                font-size: 12px;
                font-weight: bold;
                border: 1px solid #000;
                border-radius: 6px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
