<template>
  <div class="search">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!-- 头部搜索 -->
        <div class="header">
          <div class="search-item">
            <input type="text" placeholder="搜索">
          </div>
          <span class="cancle" @click="$router.go(-1)">取消</span>
        </div>
        <!-- 中间内容 -->
        <div class="container">
          <!-- 热门搜索 -->
          <div class="hot">
            <!-- 标题 -->
            <p class="title">热门搜索</p>
            <div class="imgs">
              <div class="img-item">
                <img :src="chair" alt class="image">
                <div class="name">椅子</div>
              </div>
              <div class="img-item">
                <img :src="wardrobe" alt class="image">
                <div class="name">衣柜</div>
              </div>
              <div class="img-item">
                <img :src="light" alt class="image">
                <div class="name">灯具</div>
              </div>
              <div class="img-item">
                <img :src="wardrobe" alt class="image">
                <div class="name">衣柜</div>
              </div>
              <div class="img-item">
                <img :src="decorate" alt class="image">
                <div class="name">装饰品</div>
              </div>
              <div class="img-item">
                <img :src="brand" alt class="image">
                <div class="name">钻石</div>
              </div>
            </div>
          </div>
          <!-- 历史记录 -->
          <div class="history">
            <p class="title">搜索记录</p>
            <div class="history-box">
              <div class="box-item">椅子</div>
              <div class="box-item">木灯</div>
              <div class="box-item">鞋架</div>
              <div class="box-item">灯具</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

import { Toast } from "vant";
export default {
  name: "search",

  data() {
    return {
      chair: require("@/assets/imgs/icon/chair-act.png"),
      decorate: require("@/assets/imgs/icon/decorate-act.png"),
      light: require("@/assets/imgs/icon/light-act.png"),
      wardrobe: require("@/assets/imgs/icon/wardrobe-act.png"),
      brand: require("@/assets/imgs/icon/brand.png")
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        tap: true,
        momentum: true
      });
    });
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.search ::v-deep {
  height: 100%;
  .wrapper {
    height: 400px;
  }
  // container
  .container {
    width: 90%;
    margin: 0 auto;
    // 图片集
    .imgs {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 24px;
      //   每一张图片盒子
      .img-item {
        width: 96px;
        height: 96px;
        border-radius: 15px;
        background-color: white;
        text-align: center;
        overflow: hidden;
        margin-bottom: 23px;
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6) {
          margin-bottom: 0;
        }
        .image {
          width: 30px;
          height: 30px;
          object-fit: contain;
          margin-top: 20px;
        }
        // 搜索名称
        .name {
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          margin-top: 10px;
        }
      }
    }
    // 公共title样式
    .title {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #3e3e3e;
      letter-spacing: 1.14px;
      margin-top: 30px;
      font-weight: 600;
    }
    // 历史记录
    .history {
      .history-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        flex-wrap: wrap;
        overflow: hidden;
        .box-item {
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          width: 96px;
          height: 43px;
          background: white;
          border-radius: 7px;
          text-align: center;
          line-height: 43px;
          margin-bottom: 23px;
        }
      }
    }
  }
  // 头部
  .header {
    text-align: center;
    display: flex;
    align-items: center;
    margin-top: 20px;
    // 取消搜索
    span.cancle {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #3e3e3e;
      letter-spacing: 1px;
      margin-left: 10px;
    }
    // 搜索框
    .search-item {
      margin-left: 30px;
      width: 272px;
      height: 35px;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.05);
      border-radius: 32px;
      border-radius: 32px;
      background-image: url(~@/assets/imgs/icon/search-act.png);
      background-repeat: no-repeat;
      background-size: 18px 18px;
      background-position: 20px center;
      background-color: #ffffff;
      input {
        outline: none;
        border: none;
        background: none;
        height: 100%;
        width: 75%;
        margin-left: 30px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #6c6c6c;
        letter-spacing: 0.86px;
      }
    }
  }
}
</style>
