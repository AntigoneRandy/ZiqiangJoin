<template>
  <div  :class="{'interview-detail-app': true, 'padder' : IntervieweePosts.length!=4}">
    <div :class="{'interview-detail-container': true, 'padder-2': index===IntervieweePosts.length-1}" v-for="(IntervieweePost, index) in IntervieweePosts" :key="IntervieweePost.title">
      <p class="title">{{IntervieweePost.title}}（{{IntervieweePost.content.length}}人）</p>
      <div class="signed-area">
        <IntervieweeCard v-for="(IntervieweeInfo, index) in IntervieweePost.content"
               :key="IntervieweeInfo.id"
               :index="index"
               :info="IntervieweeInfo"/>
        <IntervieweeCard v-for="i in holders" :key="i"  style="visibility:hidden" />
      </div>
      <div class="footer">
          <img src="../assets/interview/xinxi.png" alt="">
          编辑通知信息
      </div>
    </div>
    <div class="banner" v-show="IntervieweePosts.length!=4">
      <img src="../assets/interview/add.png" alt="">
      <p class="blue">新流程</p>
      <p>（剩余{{ 4 - IntervieweePosts.length }}次）</p>
    </div>
  </div>
</template>

<script>
import IntervieweeCard from '../components/IntervieweeCard'
export default {
  name: 'InterviewDetail',
  components: {
    IntervieweeCard
  },
  data () {
    return {
      IntervieweePosts: []
    }
  },
  computed: {
    holders () {
      return 4 - (this.IntervieweePosts.length % 4)
    }
  },
  methods: {
    async getIntervieweeData () {
      const res = await require('../../static/tests/msg.json')
      this.IntervieweePosts = res
    }
  },
  mounted: function () {
    this.getIntervieweeData()
  }
}
</script>

<style lang="scss" scoped>
.interview-detail-app {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .banner {
    position: absolute;
    right: -12px;
    top: 306px;
    height: 120px;
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
      width: 60px;
    }
    p {
      font-size: 15px;
      font-family: PingFang SC, sans-serif;
      font-weight: 400;
      line-height: 21px;
      color: #707070;
    }
    .blue {
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      color: #4E94DD;
    }
  }
}
.padder {
  padding-right: 110px;
}

.interview-detail-container {
  margin-right: 50px;
  flex: 1;
  height: 700px;
  &:last-child {
    margin: 0;
  }
  .title {
    margin-top: 50px;
    font-size: 30px;
    font-family: PingFang SC, sans-serif;
    font-weight: 500;
    line-height: 42px;
    color: #4E94DD;
  }
  .signed-area {
    width: 100%;
    height: 658px;
    padding: 0px 35px 117px 35px;
    background: #F0FAFF;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: scroll;
  }
  .footer {
    transform: translateY(-100%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 87px;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 15px;
    img {
      width: 50px;
      margin: 15px;
    }
    font-size: 25px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 36px;
    color: #4E94DD;
  }

}
.padder-2 {
  margin: 0;
}
</style>
