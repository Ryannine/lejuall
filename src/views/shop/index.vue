<template>
  <div class="idea">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!-- 头部 -->
        <div class="header">
          <div class="header-c">
            <van-nav-bar @click.native="$router.go(-1)" :border="false" title="购物车" left-arrow/>
          </div>
        </div>

        <!-- 中间内容部分 -->
        <div class="container">
          <div class="box" v-for="item in list" :key="item.id">
            <van-checkbox v-model="item.check" icon-size="15px" shape="square"></van-checkbox>
            <img :src="item.src">
            <div class="center">
              <p class="title">{{ item.title }}</p>
              <p class="number">114534</p>
              <p class="count">数量X1</p>
            </div>
            <div class="price">{{ item.price }}</div>
            <van-stepper v-model="item.number"/>
          </div>
        </div>
        <div class="like" style="padding:20px">
          <van-divider>猜你喜欢</van-divider>
          <img :src="img1" alt class="like-item">
          <img :src="img2" alt class="like-item">
          <img :src="img3" alt class="like-item">
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="operate">
        <div class="check">
          <van-checkbox @click="selectZ" shape="square" :value="checkAll">全选</van-checkbox>
          <p class="totalPrice">合计:￥{{ totalPrice }}</p>
          <button @click="$router.push('/order')">结算</button>
        </div>
      </div>
      <span class="underline"></span>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import BScroll from "@better-scroll/core";
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  name: "idea",
  data() {
    return {
      left: require("@/assets/imgs/icon/news.png"),
      img1: require("@/views/shop/imgs/img1.png"),
      img2: require("@/views/shop/imgs/img2.png"),
      img3: require("@/views/shop/imgs/img3.png")
    };
  },
  computed: {
    ...mapGetters({
      totalPrice: "totalPrice",
      checkAll: "checkAll"
    }),
    ...mapState({
      list: "shopList"
    })
  },
  created() {
    var item = JSON.parse(localStorage.getItem("shop"));
    if (item) {
      this.$store.state.shopList = item;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        tap: true,
        momentum: true
      });
      this.$store.state.wrapper = this.scroll;
    });
  },
  methods: {
    ...mapMutations({
      selectZ: "selectZ"
    })
  }
};
</script>

<style lang='scss' scoped>
.idea ::v-deep {
  height: 100%;
  .wrapper {
    height: calc(100% - 175px);
  }
  // 头部
  .header {
    position: relative;
    width: 100%;
    //   background-image: url(~@/assets/imgs/homeImg/banner1.png);
    //   background-repeat: no-repeat;
    height: 120px;
    overflow: hidden;
    background: #354e44 100%;
    .van-icon {
      color: white;
    }
    // 导航
    .van-nav-bar {
      background: #354e44 100%;
      margin-top: 20px;
      .van-nav-bar__text {
        font-family: PingFangSC-Regular;
        font-size: 17px;
        letter-spacing: 1.21px;
        color: white;
      }
      .van-ellipsis {
        font-family: PingFangSC-Regular;
        font-size: 17px;
        color: #ffffff;
        letter-spacing: 1.21px;
      }
    }
  }

  // 内容部分 container
  .container {
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    background: #f1ece7;
    margin-top: -15px;
    .box {
      height: 104px;
      width: 336px;
      background: #ffffff;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
      border-radius: 12px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      padding-left: 15px;

      position: relative;
      //   复选框
      .van-checkbox {
        overflow: unset;
      }
      //  步进器
      .van-stepper {
        position: absolute;
        bottom: 10px;
        right: 30px;
        // 减号
        .van-stepper__minus {
          border-radius: 50%;
          width: 20px;
          height: 20px;
          background: #f1ece7;
        }
        // input
        .van-stepper__input {
          border-radius: 10px;
          height: 20px;
          width: 40px;
          background: #f1ece7;
        }
        // 加号
        .van-stepper__plus {
          border-radius: 50%;
          width: 20px;
          height: 20px;
          background: #f1ece7;
        }
      }
      //   img
      img {
        width: 68px;
        height: 60px;
        margin-left: 20px;
      }
      //   center内容
      .center {
        line-height: 17px;
        margin-left: 30px;
        width: 70px;
        .title {
          font-family: PingFangSC-Semibold;
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          font-weight: bold;
        }
        .number,
        .count {
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #8d8d8d;
          letter-spacing: 0.79px;
        }
      }
      .price {
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #8d8d8d;
        letter-spacing: 0;
        margin-left: 70px;
      }
    }
  }
  //   .like
  .like {
    text-align: center;
    .van-divider {
      width: 80%;
      margin: 0 auto;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #3e3e3e;
      letter-spacing: 1.14px;
    }
    .van-divider::after,
    .van-divider::before {
      display: block;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      box-sizing: border-box;
      height: 0.02667rem;
      border-color: gainsboro;
      border-style: inherit;
      border-width: 0.07667rem 0 0;
      width: 80%;
    }
    img {
      margin-top: 20px;
      width: 104px;
      height: 104px;
      &:nth-child(2) {
        margin-right: 10px;
      }
      &:nth-child(4) {
        margin-left: 10px;
      }
    }
  }
  //   footer
  .footer {
    background: white;
    height: 88px;
    width: 100%;
    position: absolute;
    bottom: 0px;

    .operate {
      // 结算按钮
      button {
        width: 104px;
        height: 40px;
        background: #354e44;
        border-radius: 7px;
        font-family: PingFangSC-Semibold;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 1.29px;
        outline: none;
        border: none;
      }
      // 总价格
      .totalPrice {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #3e3e3e;
        letter-spacing: 1.14px;
      }
      .check {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    .underline {
      width: 132px;
      height: 5px;
      background: #000000;
      border-radius: 100px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
