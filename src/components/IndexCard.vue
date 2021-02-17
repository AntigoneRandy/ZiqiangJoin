<template>
  <div class="card">
    <img src="pic"
         alt="">
    <p>{{ name }}</p>
    <div class="intro">
      <strong>功能介绍：</strong>
      {{ intro }}
    </div>
    <button @click="jumpLink(url)">进入</button>
  </div>
</template>

<script>
export default {
  name: 'IndexCard',
  props: {
    pic: String,
    name: String,
    intro: String,
    url: String
  },
  methods: {
    jumpLink (url) {
      this.$router.push(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
}
.card {
  width: 500px;
  height: 800px;
  padding: 50px;
  background: #dcf3ff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 25px;
  img {
    width: 100px;
  }
  p {
    font-size: 35px;
    font-family: PingFang SC, sans-serif;
    font-weight: 500;
    line-height: 49px;
    color: #4e94dd;
  }
  .intro {
    margin-top: 50px;
    padding: 50px;
    width: 400px;
    height: 370px;
    background: #F0FAFF;
    border-radius: 20px;
    font-size: 20px;
    font-family: PingFang SC, sans-serif;
    font-weight: 400;
    line-height: 28px;
    color: #707070;
    strong {
      display: block;
      margin-bottom: 10px;
      font-size: 25px;
      font-family: PingFang SC, sans-serif;
      font-weight: 500;
      line-height: 36px;
      color: #707070;
    }
  }
  button {
    margin: 50px 50%;
    transform: translateX(-50%);
    font-size: 35px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 49px;
    color: #4E94DD;
    width: 300px;
    height: 80px;
    background: #C1EAFF;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.16);
    border-radius: 20px;
  }
}
</style>
