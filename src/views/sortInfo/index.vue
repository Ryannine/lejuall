<template>
  <div class="sortInfo">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!-- 头部 -->
        <div class="header">
          <van-icon name="arrow-left" size="30" @click.native="$router.go(-1)"/>
          <img :src="star" alt class="star">
        </div>
        <!-- 中间swiper -->
        <div class="box">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->

            <swiper-slide v-for="item in lists" :key="item.src">
              <div class="title">{{ item.title }}</div>
              <p class="sub-title">{{ item.subtitle }}</p>
              <p class="price">￥560</p>
              <div class="section">
                <p class="name">人体工程</p>
                <p class="word">座、靠、扶手都是按照人体工程学设计，舒适放松。内部填充高回弹海绵，接触面环形包围，承托更舒适。</p>
              </div>
              <div class="section">
                <p class="name">优雅弧度扶手</p>
                <p class="word">翻遍扶手设计，更好满足手臂承托要求。</p>
                <img :src="item.src" alt>
              </div>
              <div class="section">
                <p class="name">高弹海绵</p>
                <p
                  class="word"
                >高弹海绵的泡孔直径巨细混合散布，骨架粗细不一样有很大的开孔率，在受压时会在不一样形变状态下发生不一样支持力和反弹力，因而由高弹海绵制造的餐椅，可提供非常好的舒适度。</p>
              </div>
              <!-- footer -->
              <div class="footer">
                <div class="left">
                  <img :src="left" alt>
                  客服
                </div>
                <div class="right">
                  <button class="shop" @click="addShop(item)"></button>
                  <button class="buy" @click="buy(item)">立即购买</button>
                </div>
                <span class="underline"></span>
              </div>
            </swiper-slide>

            <!-- Optional controls -->
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var text;

export default {
  name: "sortInfo",

  data() {
    return {
      star: require("@/assets/imgs/icon/sort-act.png"),
      yellow: require("@/views/sortInfo/imgs/yellow.png"),
      left: require("@/views/sortInfo/imgs/customer.png"),
      id: "",
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        slidesPerView: 1.1,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      obj: {},
      lists: []
    };
  },

  methods: {
    //   立即购买
    buy(item) {
      this.$router.push("/buy/" + item.id);
    },
    //   添加购物车
    addShop(item) {
      console.log(item);
      if (
        !this.$store.state.shopList.some(el => el.id == item.id) ||
        !this.$store.state.shopList.some(el => el.src == item.src)
      ) {
        this.$store.state.shopList.push(item);
        //   存储本地 防止刷新消失
        localStorage.setItem(
          "shop",
          JSON.stringify(this.$store.state.shopList)
        );
      }
      this.$router.push("/shop");
    },
    // 解析数据
    formatter() {
      if (this.obj.src.length > 1) {
        for (var i = 0; i < this.obj.src.length; i++) {
          var obj = {
            id: this.obj.id,
            title: this.obj.title,
            subtitle: this.obj.subtitle,
            price: this.obj.price,
            src: this.obj.src[i],
            number: 1,
            check: false
          };
          this.lists.push(obj);
        }
        this.$store.state.buyList = this.lists;
      } else if (this.obj.src.length == 1) {
        var obj = {
          id: this.obj.id,
          title: this.obj.title,
          subtitle: this.obj.subtitle,
          price: this.obj.price,
          src: this.obj.src[0],
          number: 1,
          check: false
        };
        this.lists.push(obj);
        this.$store.state.buyList = this.lists;
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
    console.log();
    this.obj = this.$store.state.list.find(el => el.id == this.id);
    this.formatter();
  }
};
</script>

<style lang='scss' scoped>
.sortInfo ::v-deep {
  width: 100%;
  background: white;
  .content {
    background: white;
  }
  // 头部
  .header {
    width: 100%;
    height: 326px;
    background: url(~@/views/sortInfo/imgs/banner.png) no-repeat center;
    background-size: 100% 100%;
    position: relative;
    img {
      width: 50px;
      height: 50px;
      position: absolute;
      bottom: -25px;
      right: 40px;
    }
  }
  //   box
  .box {
    margin: 80px auto 0 auto;
    // swiper
    .swiper-container {
      position: relative;
      overflow: hidden;
      //   wrapper容器
      .swiper-wrapper {
        width: 100%;
        height: 100%;
        .swiper-slide {
          // footer 底部
          .footer {
            margin: 20px auto 0 auto;
            padding-bottom: 10px;
            display: flex;
            justify-content: space-between;
            position: relative;
            align-items: center;

            .underline {
              position: absolute;
              bottom: 0px;
              left: 50%;
              transform: translateX(-50%);
              width: 134px;
              height: 5px;
              background: #000000;
              border-radius: 100px;
            }
            .left {
              img {
                width: 24px;
                height: 24px;
              }
            }
            .right {
              .buy {
                width: 119px;
                height: 40px;
                color: white;
                outline: none;
                border: none;
                background: #354e44;
                font-family: PingFangSC-Semibold;
                font-size: 16px;
                color: #ffffff;
                letter-spacing: 1.14px;
                border-radius: 7px;
                vertical-align: middle;
              }
              .shop {
                text-align: center;
                width: 64px;
                height: 40px;
                background: url(~@/views/sortInfo/imgs/shop.png) no-repeat
                  center;
                vertical-align: middle;
                background-size: 30px 30px;
                background-color: #e2e2e2;
                outline: none;
                border: none;
                border-radius: 7px;
                margin-right: 10px;
              }
            }
          }
          // 标题
          line-height: 21px;
          .title {
            font-family: PingFangSC-Semibold;
            font-size: 18.2px;
            color: #3e3e3e;
            letter-spacing: 1.3px;
            font-weight: bold;
          }
          //   小标题
          .sub-title {
            font-family: PingFangSC-Regular;
            font-size: 15.4px;
            color: #b0b0b0;
            letter-spacing: 1.1px;
          }
          //   价格
          .price {
            font-family: PingFangSC-Regular;
            font-size: 18.2px;
            color: #3e3e3e;
            letter-spacing: 1.3px;
            margin-top: 12px;
          }
          //   段落
          .section {
            line-height: 20px;
            text-align: center;
            .name {
              font-family: PingFangSC-Semibold;
              font-size: 14px;
              color: #3e3e3e;
              letter-spacing: 1px;
              font-weight: bold;
              text-align: left;
              &:nth-child(1) {
                margin-top: 29px;
              }
            }
            .word {
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #8a8a8a;
              letter-spacing: 1px;
              text-align: justify;
            }
            img {
              width: 217px;
              height: 163px;
            }
          }
        }
      }
    }
    //swiper分页器
    .swiper-pagination {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 350px;
      // 分页器
      .swiper-pagination-bullet {
        width: 25px;
        height: 25px;
        opacity: 1;
        margin: 10px;
        &:nth-child(1) {
          background: #b95734;
          //   box-shadow: 0 2px 7px 0 rgba(216, 81, 33, 0.64);
          &.swiper-pagination-bullet-active {
            transform: scale(1.4);
            box-shadow: 0 2px 7px 0 rgba(216, 81, 33, 0.64);
          }
        }
        &:nth-child(2) {
          background: #455d60;
          &.swiper-pagination-bullet-active {
            transform: scale(1.4);
            box-shadow: 0 2px 7px 0 rgba(216, 81, 33, 0.64);
          }
        }
        &:nth-child(3) {
          background: #766165;
          &.swiper-pagination-bullet-active {
            transform: scale(1.4);
            box-shadow: 0 2px 7px 0 rgba(216, 81, 33, 0.64);
          }
        }
      }
    }
  }
}
</style>
