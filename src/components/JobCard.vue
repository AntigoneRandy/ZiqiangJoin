<template>
  <div class="job-card">
    <div class="title">
      <span class="num">{{ index + 1 }}</span>
      {{ info.name }}
    </div>
    <p class="poster"> 发布人：{{ info.poster }}</p>
    <div class="more-info">
      <p>发布状态：{{ info.status }}</p>
      <p>发布时间：{{ info.begin_time }}</p>
      <p>截止时间：{{ info.end_time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    index: Number,
    info: {
      type: Object,
      default: () => ({
        name: '岗位名称',
        poster: '技术中心产品组',
        status: '审核中',
        begin_time: '2020-02-02',
        end_time: '2020-02-10'
      })
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.job-card {
  cursor: pointer;
  pointer-events: auto;
  min-width: 500px;
  width: 500px;
  height: 325px;
  background: #FFFFFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  padding: 39px 80px;
  margin-top: 50px;
  .title {
    font-size: 30px;
    font-family: PingFang SC, sans-serif;
    font-weight: 500;
    line-height: 42px;
    color: #4E94DD;
    .num {
      font-size: 40px;
      font-family: Yuppy SC, sans-serif;
      font-weight: 400;
      line-height: 56px;
      color: #3185FF;
    }
  }
  .poster {
    margin-top: 33px;
    font-size: 25px;
    font-family: PingFang SC, sans-serif;
    font-weight: 400;
    line-height: 36px;
    color: #707070;
  }
  .more-info p {
    margin: 10px 0;
    font-size: 20px;
    font-family: PingFang SC, sans-serif;
    font-weight: 400;
    line-height: 28px;
    color: #707070;
  }
}
</style>
