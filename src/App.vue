<template>
  <div id="app">
    <transition :enter-active-class="classname" mode="out-in">
      <router-view/>
    </transition>
    <div id="nav" v-if="$route.meta.show">
      <van-tabbar :value="$route.meta.active">
        <van-tabbar-item to="/home">
          <span>首页</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive">
        </van-tabbar-item>
        <van-tabbar-item to="/sort">
          <span>分类</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon2.active : icon2.inactive">
        </van-tabbar-item>
        <van-tabbar-item to="/find">
          <span>发现</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon3.active : icon3.inactive">
        </van-tabbar-item>
        <van-tabbar-item to="/myself">
          <span>我的</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon4.active : icon4.inactive">
        </van-tabbar-item>
        <span class="line"></span>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classname: "",
      icon: {
        active: require("@/assets/imgs/icon/home-act.png"),
        inactive: require("@/assets/imgs/icon/home.png")
      },
      icon2: {
        active: require("@/assets/imgs/icon/sort-act.png"),
        inactive: require("@/assets/imgs/icon/sort.png")
      },
      icon3: {
        active: require("@/assets/imgs/icon/compass-act.png"),
        inactive: require("@/assets/imgs/icon/compass.png")
      },
      icon4: {
        active: require("@/assets/imgs/icon/my-act.png"),
        inactive: require("@/assets/imgs/icon/my.png")
      }
    };
  },
  watch: {
    $route: function(to, from) {
      var toPath = to.fullPath.split("/").length;
      var fromPath = from.fullPath.split("/").length;
      if (toPath > fromPath) {
        this.classname = "slideInRight animated";
      } else if (toPath < fromPath) {
        this.classname = "slideInLeft  animated";
      } else {
        this.classname = "slideInLeft  animated";
      }
    }
  }
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  background-color: #f1ece7;
}
#app {
  width: 100%;
  height: 100%;
  // 导航
  .van-tabbar {
    height: 88px;

    // 底部导航线条
    .line {
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 134px;
      height: 5px;
      background: #000;
      border-radius: 100px;
    }
    .van-tabbar-item {
      img {
        width: 25px;
        height: 25px;
      }
      // 导航字体
      span {
        height: 15px;
        display: block;
        transform: scale(0.9);
        font-family: PingFangSC-Semibold;
        color: #3d4c46;
      }
    }
  }
}
</style>
