<template>
  <div class="recommend-main">
    <div class="swiper-box">
      <swiper :options="swiperOption" class="swiper-vertical" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="vertical-slide">
          <div class="swiper1">
            <swiper
              :options="swiperOption1"
              class="swiper1-bg"
              :style="{backgroundImage: 'url(' + bgurl + ')' }"
              data-swiper-parallax="-300"
              ref="mySwiper1"
              @someSwiperEvent="callback"
            >
              <swiper-slide class="swiper1-slide">
                <div class="slide-set">
                  <p class="set-en">Cutting furniture</p>
                  <p class="set-name">
                    切割家具
                    <br />系列
                  </p>
                </div>
                <div class="slide-norm">
                  <div class="norm-top">
                    <p>高度</p>
                    <p>区域</p>
                  </div>
                  <div class="norm-num">
                    <p>60</p>
                    <p>45</p>
                  </div>
                </div>
                <div class="round">
                  <div class="round1">
                    <div class="round2">
                      <div class="round3">
                        <div class="round4"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <router-link tag="a" to="/recomdetail" class="slide-info">
                  <img :src=" require('@/assets/imgs/recom/chest1.png')" alt />
                  <div class="slide-title">
                    <div class="info-name">切割式床头柜</div>
                    <div class="info-from">by Adrianne Ho</div>
                    <div class="info-color">
                      <div class="color c1"></div>
                      <div class="color c2"></div>
                      <div class="color c3"></div>
                    </div>
                    <div class="info-price">¥560</div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide class="swiper1-slide">
                <div class="slide-set">
                  <p class="set-en">Cutting furniture</p>
                  <p class="set-name">
                    切割家具
                    <br />系列
                  </p>
                </div>
                <div class="slide-norm">
                  <div class="norm-top">
                    <p>高度</p>
                    <p>区域</p>
                  </div>
                  <div class="norm-num">
                    <p>50</p>
                    <p>45</p>
                  </div>
                </div>
                <div class="round">
                  <div class="round1">
                    <div class="round2">
                      <div class="round3">
                        <div class="round4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <router-link tag="a" to="/recomdetail" class="slide-info">
                  <img :src=" require('@/assets/imgs/recom/chest2.png')" alt />
                  <div class="slide-title">
                    <div class="info-name">切割式床头柜</div>
                    <div class="info-from">by Adrianne Ho</div>
                    <div class="info-color">
                      <div class="color c1"></div>
                      <div class="color c2"></div>
                      <div class="color c3"></div>
                    </div>
                    <div class="info-price">¥560</div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide class="swiper1-slide">
                <div class="slide-set">
                  <p class="set-en">Cutting furniture</p>
                  <p class="set-name">
                    切割家具
                    <br />系列
                  </p>
                </div>
                <div class="slide-norm">
                  <div class="norm-top">
                    <p>高度</p>
                    <p>区域</p>
                  </div>
                  <div class="norm-num">
                    <p>70</p>
                    <p>45</p>
                  </div>
                </div>
                <div class="round">
                  <div class="round1">
                    <div class="round2">
                      <div class="round3">
                        <div class="round4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <router-link tag="a" to="/recomdetail" class="slide-info">
                  <img :src=" require('@/assets/imgs/recom/chest1.png')" alt />
                  <div class="slide-title">
                    <div class="info-name">切割式床头柜</div>
                    <div class="info-from">by Adrianne Ho</div>
                    <div class="info-color">
                      <div class="color c1"></div>
                      <div class="color c2"></div>
                      <div class="color c3"></div>
                    </div>
                    <div class="info-price">¥560</div>
                  </div>
                </router-link>
              </swiper-slide>
            </swiper>
          </div>
        </swiper-slide>
        <swiper-slide class="vertical-slide">
          <div class="swiper2">
            <swiper
              :options="swiperOption2"
              class="swiper2-bg"
              :style="{backgroundImage: 'url(' + bgurl2 + ')' }"
              ref="mySwiper2"
            >
              <swiper-slide class="swiper1-slide">
                <div class="slide-set">
                  <p class="set-en">Simple wooden type</p>
                  <p class="set-name">
                    简约木式家具
                    <br />系列
                  </p>
                </div>
                <div class="slide-norm">
                  <div class="norm-top">
                    <p>高度</p>
                    <p>区域</p>
                  </div>
                  <div class="norm-num">
                    <p>40</p>
                    <p>110</p>
                  </div>
                </div>
                <div class="round">
                  <div class="round1">
                    <div class="round2">
                      <div class="round3">
                        <div class="round4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <router-link tag="a" to="/recomdetail" class="slide-info">
                  <img :src=" require('@/assets/imgs/recom/chair1.png')" alt />
                  <div class="slide-title">
                    <div class="info-name">切割式床头柜</div>
                    <div class="info-from">by Selena</div>
                    <div class="info-color">
                      <div class="color c1"></div>
                      <div class="color c2"></div>
                      <div class="color c3"></div>
                    </div>
                    <div class="info-price">¥560</div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide class="swiper1-slide">
                <div class="slide-set">
                  <p class="set-en">Simple wooden type</p>
                  <p class="set-name">
                    简约木式家具
                    <br />系列
                  </p>
                </div>
                <div class="slide-norm">
                  <div class="norm-top">
                    <p>高度</p>
                    <p>区域</p>
                  </div>
                  <div class="norm-num">
                    <p>50</p>
                    <p>45</p>
                  </div>
                </div>
                <div class="round">
                  <div class="round1">
                    <div class="round2">
                      <div class="round3">
                        <div class="round4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <router-link tag="a" to="/recomdetail" class="slide-info">
                  <img :src=" require('@/assets/imgs/recom/chair2.png')" alt />
                  <div class="slide-title">
                    <div class="info-name">切割式床头柜</div>
                    <div class="info-from">by Adrianne Ho</div>
                    <div class="info-color">
                      <div class="color c1"></div>
                      <div class="color c2"></div>
                      <div class="color c3"></div>
                    </div>
                    <div class="info-price">¥560</div>
                  </div>
                </router-link>
              </swiper-slide>
            </swiper>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "recommend",
  data() {
    return {
      index: "",
      bgurl: require("@/assets/imgs/recom/recommendbg1.png"),
      bgurl2: require("@/assets/imgs/recom/recommendbg2.png"),
      swiperOption: {
        slidesPerView: 1,
        // spaceBetween: 10,
        direction: "vertical"
        // centeredSlides: true,
        // Autoplay: true,
        // loop: true
      },
      swiperOption1: {
        // parallax: true,
        // loop: true,
        slidesPerView: 1,
        on: {
          slideChange: function() {
            // console.log(this.activeIndex);
            //开启loop 需要格外加两个
            if (this.activeIndex == 0) {
              $(".swiper1-bg").css("background-position-x", "-524px");
            }
            if (this.activeIndex == 1) {
              $(".swiper1-bg").css("background-position-x", "-800px");
            }
            if (this.activeIndex == 2) {
              $(".swiper1-bg").css("background-position-x", "-1100px");
            }
          }
        }
      },
      swiperOption2: {
        slidesPerView: 1,
        on: {
          slideChange: function() {
            console.log(this.activeIndex);
            if (this.activeIndex == 0) {
              $(".swiper2-bg").css("background-position-x", "-130px");
            }
            if (this.activeIndex == 1) {
              $(".swiper2-bg").css("background-position-x", "-500px");
            }
          }
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {},
  mounted() {
    // console.log("this is current swiper instance object", this.swiper);
  },
  methods: {
    callback() {
      console.log(this);
    }
  }
};
</script>

<style lang='scss' scoped>
.recommend-main {
  width: 100%;
  height: 667px;
  .swiper-box {
    width: 100%;
    height: 100%;
    .swiper-vertical {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      background-color: rgb(211, 204, 204);
      .vertical-slide {
        width: 100%;
        height: 667px;
      }
      .swiper1 {
        .swiper1-bg {
          width: 100%;
          height: 100%;
          transition: all 0.3s linear;
          background-position: -524px -70px;
          background-size: 407%;
        }
      }

      .swiper1-slide {
        width: 100%;
        height: 667px;
        .slide-set {
          width: 90%;
          height: 140px;
          margin: 0 auto;
          padding-top: 58px;
          text-align: left;
          line-height: 40px;
          .set-en {
            padding-left: 5px;
            font-size: 13px;
            color: #ffffff;
            letter-spacing: 0.93px;
          }
          .set-name {
            font-size: 36px;
            color: #ffffff;
            letter-spacing: 2.57px;
          }
        }
        .slide-norm {
          width: 90%;
          height: 80px;
          text-align: right;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          // align-items: center;
          color: #fff;
          .norm-top {
            width: 110px;
            font-size: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .norm-num {
            padding-top: 20px;
            width: 110px;
            font-size: 24px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        }
        .round {
          width: 80%;
          height: 70px;
          padding-top: 15px;
          display: flex;
          justify-content: flex-end;
          .round1 {
            width: 45px;
            height: 45px;
            border: 1px solid rgb(92, 90, 90);
            border-radius: 50%;
            .round2 {
              width: 35px;
              height: 35px;
              margin-left: 5px;
              margin-top: 5px;
              border: 1px solid rgb(92, 90, 90);
              border-radius: 50%;
              .round3 {
                position: relative;
                width: 25px;
                height: 25px;
                margin-left: 5px;
                margin-top: 5px;
                background-color: #fff;
                border-radius: 50%;
                .round4 {
                  position: absolute;
                  top: 7.5px;
                  width: 10px;
                  height: 10px;
                  margin-left: 7.5px;
                  background-color: #000;
                  border-radius: 50%;
                }
              }
            }
          }
        }
        .slide-info {
          width: 250px;
          height: 130px;
          color: #000;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-radius: 15px;
          background-color: #fff;
          margin: 0 auto;
          margin-top: 80px;
          img {
            padding-left: 15px;
            width: 90px;
            transform: scale(1.1);
          }
          .slide-title {
            text-align: left;
            margin-right: 5px;
            line-height: 20px;
            .info-name {
              font-size: 16px;
              font-weight: bolder;
            }
            .info-from {
              font-size: 14px;
              color: grey;
            }

            .info-color {
              width: 55px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .color {
                width: 12px;
                height: 12px;
                border-radius: 50%;
              }
              .c1 {
                background-color: rgb(72, 145, 228);
              }
              .c2 {
                background-color: rgb(80, 78, 78);
              }
              .c3 {
                background-color: rgb(212, 206, 206);
              }
            }
            .info-price {
              padding-top: 10px;
              font-size: 16px;
            }
          }
        }
      }
      .swiper2 {
        .swiper2-bg {
          width: 100%;
          height: 100%;
          transition: all 0.3s linear;
          background-position: -130px -180px;
          background-size: 270%;
          .info-color {
            .color.c1 {
              background-color: #553512;
            }
            .color.c2 {
              background-color: #b58349;
            }
            .color.c3 {
              background-color: #f3cea0;
            }
          }
        }
      }
    }
  }
}
</style>
