<template>
  <div class="login" @mousewheel.prevent>
    <!-- 头部logo -->
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="header">
          <img :src="logo" alt>
        </div>
        <!-- 输入框 -->
        <div class="contents">
          <div class="square">
            <img :src="aite" alt>
            <input type="text" placeholder="请输入手机号/邮箱" name="username" v-model="form.username">
            <img src style="margin-right:5px">
          </div>
          <div class="square">
            <img :src="lock" alt>
            <input :type="passwordType" placeholder="请输入密码" name="password" v-model="form.password">
            <div class="bg" @touchstart="openEye">
              <img class="eyes" :src="eyes" alt>
            </div>
          </div>
          <van-button class="loginBtn" @click="login" :loading="loading" loading-text="加载中...">登录</van-button>
          <div class="sub-text">
            <div class="sub-left">海外手机号登录</div>
            <div class="sub-right">忘记密码</div>
          </div>
          <router-link to="/register">立即注册</router-link>
        </div>
        <!-- footer -->
        <div class="footer">
          <van-divider>第三方软件登录</van-divider>
          <div class="icon">
            <img :src="QQ" alt class="qq">
            <img :src="weibo" alt class="wb">
            <img :src="weixin" alt class="wx">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: "login",

  data() {
    return {
      logo: require("@/assets/imgs/icon/logo.png"),
      aite: require("@/assets/imgs/icon/@.png"),
      lock: require("@/assets/imgs/icon/lock.png"),
      eyes: require("@/assets/imgs/icon/eyes.png"),
      QQ: require("@/assets/imgs/icon/QQ.png"),
      weixin: require("@/assets/imgs/icon/weixin.png"),
      weibo: require("@/assets/imgs/icon/weibo.png"),
      form: {
        username: "",
        password: ""
      },
      //切换显示
      flag: true,
      passwordType: "password",
      loading: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  },
  methods: {
    //   登录
    login() {
      this.$router.push("/home");
    },
    //   密码切换
    openEye() {
      if (this.flag) {
        this.eyes = require("@/assets/imgs/icon/eyes-act.png");
        this.passwordType = "text";
        this.flag = false;
      } else {
        this.eyes = require("@/assets/imgs/icon/eyes.png");
        this.passwordType = "password";
        this.flag = true;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
html,
body {
  width: 100%;
  height: 100%;
}

.login ::v-deep {
  overflow: hidden;
  .wrapper {
    height: 400px;
  }
  background-color: #f1ece7;
  width: 100%;
  height: 100%;
  .footer {
    width: 210px;
    margin: 14px auto;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #a5a5a5;
    letter-spacing: 0.86px;
    .icon {
      width: 120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    img {
      width: 25px;
      height: 25px;
    }
    .van-divider::before,
    .van-divider::after {
      display: block;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      box-sizing: border-box;
      height: 0.02667rem;
      border-color: gainsboro;
      border-style: inherit;
      border-width: 0.02667rem 0 0;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 46.5px;
    a {
      display: block;
      margin-top: 90px;
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: #354e44;
      letter-spacing: 1.43px;
    }
    .sub-text {
      display: flex;
      width: 210px;
      margin: 0 auto;
      justify-content: space-between;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #a5a5a5;
      margin-top: 10px;
    }
    .loginBtn {
      width: 210px;
      height: 37px;
      line-height: normal;
      background: #354e44;
      border-radius: 7px;
      margin-top: 3px;
      span {
        font-family: PingFangSC-Semibold;
        font-size: 15px;
        color: #ffffff;
        letter-spacing: 1.07px;
      }
    }
    .square {
      width: 210px;
      height: 35.5px;
      margin-bottom: 18px;
      background-color: rgba(61, 76, 70, 0.08);
      border-radius: 7px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        width: 14px;
        height: 14px;
        margin-left: 5px;
      }
      img.eyes {
        width: 14px;
        height: 7px;
        margin-right: 5px;
      }
    }
    input {
      outline: none;
      background: none;
      font-size: 12px;
      font-family: DFPYuanW3;
      color: gray;
      width: 70%;
      border: none;
      height: 100%;
      margin-left: 3px;
    }
  }
  .header {
    overflow: hidden;
    text-align: center;
    img {
      margin-top: 50px;
      width: 53px;
      height: 53px;
      border-radius: 50%;
    }
  }
}
</style>
