<template>
  <div class="logout-button-div">
    <button class="logout-button hvr-fade" @click="logout">退出登录</button>
  </div>
</template>

<script>

export default {
  name: 'LogoutButton',
  methods: {
    logout () {
      // delete the token and jump to the login page
      this.$router.replace('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.logout-button {
  position: absolute;
  right: 50px;
  top: 60px;
  width: 150px;
  height: 60px;
  background: #f2fcff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 25px;
  font-family: PingFang SC, sans-serif;
  font-weight: 500;
  color: #7B8183;
  border-radius: 15px;
  &:hover {
    background:#bdc3c7;
  }
}
</style>
