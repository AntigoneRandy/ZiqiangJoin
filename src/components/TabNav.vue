<template>
  <div class="tab-card">
    <router-link active-class="active" to="/home/post">招新岗位发布</router-link>
    <router-link active-class="active" to="/home/interview">面试流程管理</router-link>
    <router-link active-class="active" to="/home/organization">组织架构管理</router-link>
  </div>
</template>

<script>
export default {
  name: 'TabCard',
  props: {
    tabName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tab-card {
  width: 750px;
  height: 80px;
  display: flex;
  flex-direction: row;
  a {
    flex: 1;
    text-align: center;
    display: block;
    height: 80px;
    line-height: 80px;
    background: #F0FAFF;
    border-radius: 15px 15px 0px 0px;
    font-size: 25px;
    font-family: PingFang SC, sans-serif;
    font-weight: 500;
    color: #707070;
  }
  .active {
    background: #DCF3FF;
  }
}
</style>
