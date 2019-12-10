<template>
  <div class="register">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <p class="title">注册</p>
        <!-- input框 -->
        <div class="square">
          <input type="text">
        </div>
        <button>获取短信验证码</button>
        <!-- message小消息 -->
        <p class="message">
          完成注册即代表你同意
          <span class="tag">用户协议</span>
          和
          <span class="tag">隐私政策</span>
        </p>
        <div style="  margin-top: 107px;">
          <router-link to="/login" class="go-login">有账号 去登录</router-link>
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: "register",

  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.register {
  height: 100%;
  overflow: hidden;
  .wrapper {
    height: calc(100% - 300px);
    .content {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
  //   标题 注册
  .title {
    font-family: PingFangSC-Semibold;
    font-size: 30px;
    color: #354e44;
    letter-spacing: 2.14px;
    font-weight: bold;
    align-self: flex-start;
    margin-top: 69px;
    margin-left: 35px;
  }
  //   按钮
  button {
    font-family: PingFangSC-Semibold;
    font-size: 15px;
    color: #ffffff;
    letter-spacing: 1.07px;
    width: 268px;
    height: 47px;
    background-color: #354e44;
    outline: none;
    border: none;
    border-radius: 7px;
    margin-top: 6px;
  }
  //   小消息
  .message {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #a5a5a5;
    letter-spacing: 0.86px;
    margin-top: 10px;
    // 标记
    .tag {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #170000;
      letter-spacing: 0.86px;
      line-height: 17px;
    }
  }
  //   去登陆
  .go-login {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #354e44;
    letter-spacing: 1.14px;
    font-weight: bold;
    overflow: hidden;

    line-height: 18px;
    overflow: hidden;
    .van-icon {
      display: inline-block;
      padding-top: 2px;
    }
  }
}
// input框
.square {
  margin-top: 39px;
  width: 268px;
  height: 35.5px;
  margin-bottom: 18px;
  background-color: rgba(61, 76, 70, 0.08);
  border-radius: 7px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
</style>
