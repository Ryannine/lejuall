<template>
  <div class="recommend">
    <div class="content">
      <!-- 系列 -->
      <div class="cate">
        <!-- 标题 -->
        <div class="title">
          <div class="left">品类推荐</div>
          <div class="right">更多></div>
        </div>
        <!-- 系列产品 -->
        <div class="series">
          <div class="sofa box">
            <div class="img">
              <img :src="sofa" alt>
              <p class="name">沙发系列</p>
              <p class="sub-name">by Adrianne</p>
            </div>
          </div>
          <div class="chair box">
            <div class="img">
              <img :src="chair" alt>
              <p class="name">木制系列</p>
              <p class="sub-name">by Hanna</p>
            </div>
          </div>
          <div class="idea box">
            <div class="img">
              <img :src="idea" alt class="idea">
              <p class="name">创意系列</p>
              <p class="sub-name">by adais</p>
            </div>
          </div>
        </div>
      </div>
      <div class="special" style="margin-top:100px">
        <div class="title">
          <div class="left">特色优选</div>
          <div class="right">更多></div>
        </div>
        <swiper :options="swiperOption2" ref="mySwiper2">
          <!-- slides -->
          <swiper-slide>
            <div class="bg">
              <img :src="tx1" alt class="left">
              <div class="right">
                <p class="title">现代极简吊灯</p>
                <p class="sub-title">by Adrianne Ho</p>
                <div class="tb">
                  <span class="blue"></span>
                  <span class="red"></span>
                  <span class="yellow"></span>
                </div>
                <p class="word">切割平整圆滑，运用漫反…</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bg">
              <img :src="tx2" alt class="left">
              <div class="right">
                <p class="title">现代极简吊灯</p>
                <p class="sub-title">by Adrianne Ho</p>
                <div class="tb">
                  <span class="blue"></span>
                  <span class="red"></span>
                  <span class="yellow"></span>
                </div>
                <p class="word">切割平整圆滑，运用漫反…</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bg">
              <img :src="tx3" alt class="left">
              <div class="right">
                <p class="title">现代极简吊灯</p>
                <p class="sub-title">by Adrianne Ho</p>
                <div class="tb">
                  <span class="blue"></span>
                  <span class="red"></span>
                  <span class="yellow"></span>
                </div>
                <p class="word">切割平整圆滑，运用漫反…</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",

  data() {
    return {
      sofa: require("@/assets/imgs/homeImg/sofa.png"),
      chair: require("@/assets/imgs/homeImg/chair.png"),
      idea: require("@/assets/imgs/homeImg/idea.png"),
      tx1: require("@/assets/imgs/homeImg/tx1.png"),
      tx2: require("@/assets/imgs/homeImg/tx2.png"),
      tx3: require("@/assets/imgs/homeImg/tx3.png"),
      swiperOption2: {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: true
      }
    };
  },
  mounted() {
    if (this.$store.state.wrapper) {
      this.$store.state.wrapper.maxScrollY = -250;
      console.log(this.$store.state.wrapper);
      this.$store.state.wrapper.refresh();
    }
  },
  created() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.recommend ::v-deep {
  .content {
    width: 95%;
    margin: 0 auto;
  }
  .cate {
  }
  // 公用样式title
  .title {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    .left {
      font-family: PingFangSC-Semibold;
      font-size: 15px;
      color: #3e3e3e;
      letter-spacing: 1.14px;
    }
    .right {
      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #8c8c8c;
      letter-spacing: 0.93px;
    }
  }
  // 系列产品样式
  .series {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    // 白色盒子
    .box {
      width: 104px;
      height: 70px;
      background: #ffffff;
      box-shadow: 0 4px 12px 0 rgba(122, 98, 75, 0.06);
      border-radius: 10px;
      position: relative;
    }
    // 每一张图片外边的盒子
    .img {
      position: absolute;
      transform-style: preserve-3d;
      perspective: 1000;
      width: 90px;
      z-index: 99;
      height: 120px;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      font-family: PingFangSC-Semibold;
      // 图片
      img {
        margin-top: 5px;
        width: 72px;
        height: 70px;
      }
      img.idea {
        object-fit: cover;
      }
      // title
      .name {
        margin-top: 22px;
        font-size: 13px;
        color: #3e3e3e;
        letter-spacing: 0.93px;
      }
      .sub-name {
        margin-top: 2px;
        font-size: 10px;
        color: #b0b0b0;
        letter-spacing: 0.71px;
      }
    }
  }
  // 特别优选
  .special {
    .swiper-container {
      overflow: unset;
    }
    .swiper-wrapper {
      margin-top: 50px;
      height: 130px;
      .swiper-slide {
        position: relative;
        background: #ffffff;
        box-shadow: 0 8px 24px 0 rgba(122, 98, 75, 0.12);
        border-radius: 10px;
        border-radius: 10px;
        // swiper-slide下的盒子 包含图片和内容
        .bg {
          position: relative;
          display: flex;
          justify-content: space-between; // 左边图片
          img {
            width: 97px;
            height: 140px;
            margin-top: -40px;
            margin-left: 18px;
          }
          // 右边文字内容
          .right {
            margin-right: 0px;
            width: 170px;
            line-height: 22px;
            // 标题
            .title {
              font-family: PingFangSC-Semibold;
              font-size: 13px;
              color: #3e3e3e;
              letter-spacing: 0.93px;
            }
            // 小标题
            .sub-title {
              font-family: PingFangSC-Regular;
              font-size: 9px;
              color: #b0b0b0;
              letter-spacing: 0.64px;
            }
            // word内容
            .word {
              font-family: PingFangSC-Regular;
              font-size: 11px;
              color: #3e3e3e;
              letter-spacing: 0.79px;
            }
            // 图标
            .tb {
              display: flex;
              span {
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                margin-left: 5px;
                &.blue {
                  background: #446675;
                }
                &.red {
                  background: #6a4826;
                }
                &.yellow {
                  background: #e7d8bb;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
