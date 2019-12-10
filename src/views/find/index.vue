<template>
  <div class="find-main">
    <div class="find-nav">
      <router-link class="find-link" tag="a" to="/find/writings">
        <p>精选文章</p>
        <div class="act"></div>
      </router-link>
      <router-link class="find-link" tag="a" to="/find/recommend">
        <p>好物推荐</p>
        <div class="act"></div>
      </router-link>
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
  width: 100%;
  height: 400px;
  margin: 0 auto;
  .find-nav {
    width: 90%;
    position: fixed;
    top: 15px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 999;
    .find-link {
      transition: all 0.3s ease-in;
      p {
        font-size: 20px;
        color: aliceblue;
        font-weight: bold;
      }
      .act {
        transition: 0.3s linear;

        width: 50px;
        height: 5px;
        margin-top: 10px;
        margin-left: 30px;
        border-radius: 15px;
        background-color: #000;
        opacity: 0;
      }
    }
    .router-link-exact-active {
      .act {
        background-color: rgb(255, 255, 255);
        opacity: 1;
      }
    }
  }
}
</style>
