<template>
  <div id="app">
    <transition
      mode="out-in"
      enter-active-class="fadeInRight animated"
      leave-active-class="fadeOutLeft animated"
    >
      <router-view />
    </transition>

    <div id="nav">
      <router-link to="/">首页</router-link>|
      <router-link to="/sort">分类</router-link>|
      <router-link to="/find">发现</router-link>|
      <router-link to="/myself">我的</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  background-color: #354e44;
  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
