<template>
  <div class="find-main">
    <div class="header" v-if="$route.meta.tabShow">
      <div class="nav-bar">
        <router-link to="/find/writings">
          精选文章
          <span class="underline"></span>
        </router-link>
        <router-link to="/find/recommend">
          好物推荐
          <span class="underline"></span>
        </router-link>
      </div>
    </div>
    <div class="header header2" v-else>
      <div class="nav-bar">
        <router-link to="/find/writings">
          精选文章
          <span class="underline"></span>
        </router-link>
        <router-link to="/find/recommend">
          好物推荐
          <span class="underline"></span>
        </router-link>
      </div>
    </div>
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
export default {
  name: "index.vue",
  data() {
    return {};
  },

  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.find-main {
  height: 100%;
}
.header.header2 {
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 999;
}
.header {
  width: 100%;
  height: 103px;
  background: #354e44;
  text-align: center;
  overflow: hidden;
  .nav-bar {
    margin-top: 45px;
    a {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 1.14px;
      text-decoration: none;
      margin-right: 20px;
      position: relative;
      display: inline-block;
      &.router-link-exact-active {
        .underline {
          opacity: 1;
        }
      }
      &:nth-child(2) {
        margin-right: 0;
      }
      // 下划线
      .underline {
        position: absolute;
        bottom: -10px;
        right: 0px;
        display: block;
        background-color: white;
        width: 32px;
        height: 3px;
        border-radius: 1.5px;
        opacity: 0;
        transition: all 0.2s linear;
      }
    }
  }
}
</style>
