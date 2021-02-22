<template>
  <div class="interviewee-card">
    <img class="avatar" :src="info.avatar" alt="头像">
    <div class="content">
    <p class="name">{{ info.name }}</p>
    <p class="gender">{{ info.gender }}</p>
    <p class="grade">{{ info.grade }}</p>
    <p class="insititude">{{ info.insititude }}</p>
    </div>
    <img class="icon" v-if="info.status" :src="src" alt="star">
  </div>
</template>

<script>
export default {
  name: 'IntervieweeCard',
  props: {
    info: {
      type: Object,
      default: () => ({
        avatar: '',
        name: '张三',
        gender: '女',
        grade: '2020级',
        insititude: '法学院',
        status: 'star'
      })
    }
  },
  data () {
    return {
      src: require('../assets/interview/' + this.info.status + '.png')
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.interviewee-card {
  position: relative;
  cursor: pointer;
  max-width: 335px;
  // width: 335px;
  min-width: 290px;
  margin: 0px auto;
  height: 150px;
  padding: 0 40px;
  margin-top: 30px;
  background: #FFFFFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .avatar {
    width: 75px;
    height: 105px;
    border: 1px solid black;
  }
  .icon {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 18px;
    right: 18px;
  }
  .content {
    margin-left: 20px;
    font-size: 15px;
    font-family: PingFang SC, sans-serif;
    font-weight: 400;
    line-height: 28px;
    color: #707070;
    .name {
      font-size: 20px;
      font-weight: 500;
    }
  }
}
</style>
