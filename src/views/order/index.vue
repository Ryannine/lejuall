<template>
  <div class="order-main">
    <div class="order-nav">
      <router-link tag="a" to="/myself">
        <img :src="require('@/assets/imgs/icon/jiantou.png')" alt>
      </router-link>
      <p>我的订单</p>
      <div class="nav-box"></div>
    </div>
    <ul class="order-go">
      <router-link
        class="order-link"
        tag="li"
        v-for="item in list"
        :key="item.title"
        :to="item.path"
      >
        <p class="order-title">{{ item.title }}</p>
        <div class="acc"></div>
      </router-link>
    </ul>
    <transition
      mode="out-in"
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutRight"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import $ from "jquery";
import "@/assets/css/animate.css";
export default {
  name: "order",
  data() {
    return {
      list: [
        {
          title: "全部",
          path: "/order/all"
        },
        {
          class: "acc",
          title: "待付款",
          path: "/order/obligation"
        },
        {
          class: "acc",
          title: "已付款",
          path: "/order/accountpaid"
        },
        {
          class: "acc",
          title: "已完成",
          path: "/order/done"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.order-main {
  width: 100%;
  height: 667px;
  position: fixed;
  top: 0;
  margin: 0 auto;
  background-color: #354e44;
  .order-nav {
    position: fixed;
    top: 0;
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
  .order-go {
    position: fixed;
    top: 50px;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #354e44;
    padding-bottom: 10px;
    z-index: 999;
    .order-link {
      height: 18px;
      margin: 0 auto;
      font-size: 18px;
      font-weight: bolder;
      padding: 5px;
      transition: 0.3s ease-in;
      border-bottom: 0.08rem solid transparent;
      .acc {
        margin-top: 6px;
        width: 60px;
        height: 4px;
        transition: 0.3s ease-in;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background-color: #354e44;
        opacity: 0;
      }
    }
    .router-link-exact-active {
      .acc {
        background-color: rgb(173, 171, 171);
        opacity: 1;
      }
    }
  }
}
</style>
