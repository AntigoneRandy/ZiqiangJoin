<template>
  <div class="container">
    <div class="login-form">
      <div class="box-container">
        <div class="input-box">
          <div class="input-container">
            <img src="../assets/login/zhanghao.png" />
            <input type="text"
                   name="username"
                   placeholder="手机号/邮箱"
                   autocomplete="false" />
          </div>
          <div class="input-container">
            <img src="../assets/login/icon_list_mima.png" />
            <input type="password"
                   name="password"
                   placeholder="请输入密码" />
          </div>
        </div>
        <a>找回密码</a>
        <div class="captcha">
          <input type="text"
                 name="captcha" />
          <button>获取验证码</button>
        </div>
        <button class="login-btn"
                @click="submitForm()">登录</button>
        <a>立即注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
button {
  border: none;
  cursor: pointer;
}
.container {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/login/bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  .login-form {
    position: absolute;
    padding: 100px;
    right: 13%;
    top: 22%;
    width: 700px;
    height: 600px;
    display: flex;
    flex-direction: column;
    background-color: rgba(220, 243, 255, 0.7);
    backdrop-filter: blur(5px);
    border-radius: 25px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    .box-container {
      display: flex;
      flex-direction: column;
    }
    .input-box {
      margin: 0;
      height: 135px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .input-container {
      display: flex;
      align-items: center;
      box-sizing: content-box;
      width: 500px;
      height: 50px;
      background: #ffffff;
      border-radius: 10px;
      img {
        margin: 0px 15px;
        width: 40px;
      }
      input {
        font-family: PingFangSC-Regular, sans-serif;
        color: #707070;
        font-size: 25px;
        line-height: 36px;
        margin-left: 15px;
        height: 100%;
        width: 400px;
        border: none;
      }
    }
    a {
      font-family: PingFangSC-Regular, sans-serif;
      color: #707070;
      font-size: 20px;
      display: inline-block;
      margin-top: 10px;
      align-self: flex-end;
      text-decoration: underline;
      cursor: pointer;
      margin-bottom: 30px;
    }
  }
}
.captcha {
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    width: 240px;
    height: 50px;
    background: #ffffff;
    opacity: 0.9;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    font-size: 25px;
    font-family: PingFang SC, sans-serif;
    font-weight: 400;
    line-height: 36px;
    color: #000000;
  }
  input {
    border: none;
    width: 240px;
    height: 50px;
    background: #ffffff;
    border-radius: 10px;
    font-size: 25px;
    font-family: PingFang SC, sans-serif;
    text-align: center;
    vertical-align: center;
    font-weight: 400;
    line-height: 36px;
    color: #000000;
  }
  margin-bottom: 30px;
}
.login-btn {
  cursor: pointer;
  border: none;
  width: 500px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  font-size: 30px;
  font-family: PingFang SC, sans-serif;
  font-weight: 500;
  line-height: 42px;
  color: #4e94dd;
}
</style>
