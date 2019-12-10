<template>
  <div class="buy">
    <van-popup v-model="show" closeable close-icon="close" @close="$router.go(-1)">
      <div class="header">
        <img :src="item.src[0]" alt class="header-img">
        <div class="box">
          <p class="title">{{ item.title }}</p>
          <p class="sub-title">库存：1028</p>
        </div>
      </div>
      <div class="color content">
        <p class="title">颜色分类</p>
        <ul>
          <li v-for="(item,index) in item.src" :key="item">经典款【绿色{{ index }}】</li>
        </ul>
      </div>
      <div class="service content">
        <p class="title">特色服务</p>
        <ul>
          <li>
            <span>送货入户</span>
            <span>【商家赠送】</span>
          </li>
          <li>
            <span>送货入户</span>
            <span>【商家赠送】</span>
          </li>
        </ul>
      </div>
      <van-divider/>
      <div class="count">
        <span>购买数量</span>
        <van-stepper/>
      </div>
      <button class="btn">确定</button>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "buy",

  data() {
    return {
      show: true,
      item: {}
    };
  },

  methods: {},
  created() {
    var item1 = this.$store.state.list.find(
      el => el.id == this.$route.params.id
    );
    this.item = item1;
    console.log(item1);
  }
};
</script>

<style lang='scss' scoped>
.buy ::v-deep {
  height: 100%;
  .van-popup {
    height: 462px;
    width: 314px;
    border-radius: 10px;
    overflow: unset;
    position: relative;
    // 头部
    .header {
      display: flex;
      .box {
        line-height: 18px;
        margin-left: 10px;
        margin-top: 20px;
      }
      .title {
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #3e3e3e;
        letter-spacing: 1px;
        font-weight: bold;
      }
      .sub-title {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #b0b0b0;
        letter-spacing: 0.86px;
      }
    }
    .color,
    .content {
      margin-top: 27px;
      .title {
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #3e3e3e;
        letter-spacing: 1px;
        font-weight: bold;
        margin-left: 45px;
      }
      ul {
        list-style: none;
        height: 100px;
        margin-left: 45px;
        li {
          width: 121px;
          height: 30px;
          background-color: rgba(53, 78, 68, 0.06);
          float: left;
          margin-top: 10px;
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          line-height: 30px;
          text-align: center;
          &:nth-child(2) {
            margin-left: 8px;
          }
        }
      }
    }
    .service.content {
      margin-top: 0px;
      ul {
        li {
          display: flex;
          width: 190px;
          height: 30px;
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          justify-content: space-around;
          &:nth-child(2) {
            margin-left: 0;
          }
        }
      }
    }
    .van-divider {
      width: 245px;
      border-width: 0.4px;
      margin-left: 45px;
    }
    .count {
      display: flex;
      justify-content: space-between;
      width: 245px;
      margin-left: 45px;
      span {
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #3e3e3e;
        letter-spacing: 1px;
        font-weight: bold;
      }
      //  步进器
      .van-stepper {
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
    }
    .btn {
      width: 104px;
      height: 40px;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 1.14px;
      background: #354e44;
      border-radius: 7px;
      outline: none;
      border: none;
      margin-left: 50%;
      margin-top: 20px;
      transform: translateX(-50%);
    }
    img {
      width: 96px;
      height: 96px;
      margin-left: 40px;
      border-radius: 10px;
      margin-top: -30px;
      object-fit: cover;
      box-shadow: 5px 5px 10px 1px black;
    }
  }
}
</style>
