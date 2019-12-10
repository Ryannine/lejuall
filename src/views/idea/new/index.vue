<template>
  <div class="news">
    <div class="wrapper">
      <div class="content">
        <div class="contain-box">
          <!-- 每一个图片盒子 -->
          <div class="img-item">
            <router-link to="/sortInfo/1">
              <!-- 图片 -->
              <img :src="img1" alt class="img">
              <!-- 标题 -->
              <div class="Title">
                <p class="title">Valley 单人沙发</p>
                <p class="sub-title">1426人以收藏</p>
              </div>
              <div class="footer">
                <p class="price">¥560</p>
                <p class="address">佛山</p>
              </div>
            </router-link>
          </div>
          <div class="img-item">
            <router-link to="/sortInfo/2">
              <!-- 图片 -->
              <img :src="img2" alt class="img">
              <!-- 标题 -->
              <div class="Title">
                <p class="title">
                  现代极简实木椅
                  休闲椅
                </p>
                <p class="sub-title">1426人以收藏</p>
              </div>
              <div class="footer">
                <p class="price">¥359</p>
                <p class="address">佛山</p>
              </div>
            </router-link>
          </div>
          <div class="img-item">
            <router-link to="sortInfo/3">
              <!-- 图片 -->
              <img :src="img3" alt class="img">
              <!-- 标题 -->
              <div class="Title">
                <p class="title">欧式屏风隔断</p>
                <p class="sub-title">1426人以收藏</p>
              </div>
              <div class="footer">
                <p class="price">¥1721</p>
                <p class="address">佛山</p>
              </div>
            </router-link>
          </div>
          <div class="img-item">
            <router-link to="/sortInfo/4">
              <!-- 图片 -->
              <img :src="img4" alt class="img">
              <!-- 标题 -->
              <div class="Title">
                <p class="title">简约书桌</p>
              </div>
              <div class="footer">
                <p class="price">¥451</p>
                <p class="address">佛山</p>
              </div>
            </router-link>
          </div>
          <div class="img-item">
            <router-link to="/sortInfo/5">
              <!-- 图片 -->
              <img :src="img5" alt class="img">
              <!-- 标题 -->
              <div class="Title">
                <p class="title">Worcester 电视柜</p>
                <p class="sub-title">1426人以收藏</p>
              </div>
              <div class="footer">
                <p class="price">¥4261</p>
                <p class="address">佛山</p>
              </div>
            </router-link>
          </div>
          <div class="img-item">
            <router-link to="/sortInfo/6">
              <!-- 图片 -->
              <img :src="img6" alt class="img">
              <!-- 标题 -->
              <div class="Title">
                <p class="title">Jenner 茶几</p>
                <p class="sub-title">1426人以收藏</p>
              </div>
              <div class="footer">
                <p class="price">¥2162</p>
                <p class="address">佛山</p>
              </div>
            </router-link>
          </div>
          <div class="img-item">
            <router-link to="/sortInfo/7">
              <!-- 图片 -->
              <img :src="img7" alt class="img">
              <!-- 标题 -->
              <div class="Title">
                <p class="title">现代橱柜</p>
                <p class="sub-title">1426人以收藏</p>
              </div>
              <div class="footer">
                <p class="price">¥8234</p>
                <p class="address">佛山</p>
              </div>
            </router-link>
          </div>
          <div class="img-item">
            <router-link to="/sortInfo/8">
              <!-- 图片 -->
              <img :src="img8" alt class="img">
              <!-- 标题 -->
              <div class="Title">
                <p class="title">创意休闲椅</p>
                <p class="sub-title">1426人以收藏</p>
              </div>
              <div class="footer">
                <p class="price">¥829</p>
                <p class="address">佛山</p>
              </div>
            </router-link>
          </div>
          <div class="img-item">
            <router-link to="/sortInfo/9">
              <!-- 图片 -->
              <img :src="img9" alt class="img">
              <!-- 标题 -->
              <div class="Title">
                <p class="title">单人木椅</p>
                <p class="sub-title">1426人以收藏</p>
              </div>
              <div class="footer">
                <p class="price">¥218</p>
                <p class="address">佛山</p>
              </div>
            </router-link>
          </div>
          <div class="img-item">
            <router-link to="/sortInfo/10">
              <!-- 图片 -->
              <img :src="img10" alt class="img">
              <!-- 标题 -->
              <div class="Title">
                <p class="title">几何图形书柜</p>
                <p class="sub-title">1426人以收藏</p>
              </div>
              <div class="footer">
                <p class="price">¥5372</p>
                <p class="address">佛山</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      stick: require("@/assets/imgs/icon/Stick.png"),
      img1: require("@/views/idea/new/imgs/img1.png"),
      img2: require("@/views/idea/new/imgs/img2.png"),
      img3: require("@/views/idea/new/imgs/img3.png"),
      img4: require("@/views/idea/new/imgs/img4.png"),
      img5: require("@/views/idea/new/imgs/img5.png"),
      img6: require("@/views/idea/new/imgs/img6.png"),
      img7: require("@/views/idea/new/imgs/img7.png"),
      img8: require("@/views/idea/new/imgs/img8.png"),
      img9: require("@/views/idea/new/imgs/img9.png"),
      img10: require("@/views/idea/new/imgs/img10.png")
    };
  },

  methods: {},
  mounted() {
    console.log(this.$store.state.wrapper.maxScrollY);
    if (this.$store.state.wrapper) {
      this.$store.state.wrapper.maxScrollY = -750;
      //   this.$store.state.wrapper.refresh();
    }
  }
};
</script>

<style lang='scss' scoped>
.news ::v-deep {
  .stick {
    position: absolute;
    right: 10px;
    z-index: 999;
    top: 150px;
  }
  width: 100%;
  height: 100%;
  .wrapper {
    .content {
      // 内容区域 contain-box
      .contain-box {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
        position: relative;
        // 图片盒子
        .img-item {
          width: 158px;
          border-radius: 5px;
          background-color: white;
          line-height: 20px;
          margin-bottom: 24px;
          &:nth-child(1) {
            height: 208px;
          }
          &:nth-child(4) {
            height: 184px;
          }
          //   图片
          .img {
            width: 100%;
            height: 119px;
            object-fit: cover;
          }
          .Title {
            //   产品名称
            width: 80%;
            margin: 0 auto;
            .title {
              font-family: PingFangSC-Semibold;
              font-size: 13px;
              color: #3e3e3e;
              letter-spacing: 0.93px;
              font-weight: bold;
            }
            // 小标题
            .sub-title {
              font-family: PingFangSC-Regular;
              font-size: 11px;
              color: #8d8d8d;
              letter-spacing: 0.79px;
            }
          }

          div.footer {
            width: 80%;
            margin: 12px auto 0 auto;
            display: flex;
            justify-content: space-between;
            padding-bottom: 10px;
            //   价格
            .price {
              font-family: PingFangSC-Semibold;
              font-size: 13px;
              color: #3e3e3e;
              letter-spacing: 0.93px;
              font-weight: bold;
            }
            // 地点
            .address {
              font-family: PingFangSC-Regular;
              font-size: 11px;
              color: #3e3e3e;
              letter-spacing: 0.79px;
            }
          }
        }
      }
    }
  }
}
</style>
