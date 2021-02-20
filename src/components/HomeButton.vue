<template>
  <div class="home-button-div">
    <button class="home-button hvr-fade" @click="goHome">
    <img src="../assets/public/shouye.png" width="30px">  主页</button>
  </div>
</template>

<script>

export default {
  name: 'HomeButton',
  methods: {
    goHome () {
      this.$router.replace('/index')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home-button {
  position: absolute;
  right: 250px;
  top: 60px;
  width: 150px;
  height: 60px;
  background: #f2fcff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 25px;
  font-family: PingFang SC, sans-serif;
  font-weight: 500;
  line-height: 36px;
  color: #4E94DD;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    color: #4E94DD;
  }
  &:hover {
    background:#bdc3c7;
  }
  img {
    margin-right: 10px;
  }
}
</style>
