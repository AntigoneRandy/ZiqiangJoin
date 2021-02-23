<template>
  <div :class="{'interview-detail-app': true, 'padder' : IntervieweePosts.length!=4}">
    <div :class="{'interview-detail-container': true, 'padder-2': index===IntervieweePosts.length-1}" v-for="(IntervieweePost, index) in IntervieweePosts" :key="index">
      <p class="title" ><span :class="{ editing: isChecked[index], view: true }" @click="toggleChecked(index, false)">{{ IntervieweePost.title }}</span>
      <input
        v-myfoucs="isChecked[index]"
        :class="{ editing: isChecked[index], input: true }"
        type="text"
        ref="titles"
        v-model="IntervieweePost.title"
        @blur="toggleChecked(index, true)"
        @keydown.13="toggleChecked(index, true)"
        />（{{IntervieweePost.content.length}}人）</p>
      <div class="signed-area">
        <IntervieweeCard v-for="(IntervieweeInfo, index) in IntervieweePost.content"
               :key="IntervieweeInfo.id"
               :index="index"
               :info="IntervieweeInfo"/>
        <IntervieweeCard v-for="i in holders(IntervieweePost.content.length)" :key="i"  style="visibility:hidden" />
      </div>
      <div class="footer">
          <img src="../assets/interview/xinxi.png" alt="">
          编辑通知信息
      </div>
    </div>
    <div class="banner" v-show="IntervieweePosts.length!=4" @click="addNewProcess()">
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
      IntervieweePosts: [],
      isChecked: [false, false, false, false]
    }
  },
  computed: {
  },
  directives: {
    myfoucs: {
      update (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  },
  methods: {
    async getIntervieweeData () {
      const res = await require('../../static/tests/msg.json')
      this.IntervieweePosts = res
    },
    holders (length) {
      const total = Math.floor(4 / this.IntervieweePosts.length)
      if (length % total) {
        return total - (length % total)
      }
      return 0
    },
    addNewProcess () {
      this.IntervieweePosts.push({
        title: '未命名流程',
        content: []
      })
      this.isChecked[this.IntervieweePosts.length - 1] = true
      this.$forceUpdate()
      //
      this.$nextTick(() => {
        this.$refs.titles[this.IntervieweePosts.length - 1].select()
      })
    },
    toggleChecked (index, isChanged) {
      this.isChecked[index] = !this.isChecked[index]
      // alert('index:' + index + ' ' + this.isChecked[0] + ' ' + this.isChecked[1] + ' ' + this.isChecked[2])
      this.$forceUpdate()
      if (isChanged) {
        this.$nextTick(() => {
          window.console.log(index + ' ' + this.$refs.titles[index].value)
        })
      }
    }
  },
  mounted: function () {
    window.console.log('ok')
    this.getIntervieweeData()
  }
}
</script>

<style lang="scss" scoped>
.view {
  display: inline;
}
.input {
  display: none;
  border: none;
  width: auto;
  font-size: 30px;
  font-family: PingFang SC, sans-serif;
  font-weight: 500;
  line-height: 42px;
  color: #4E94DD
}
.editing.input {
  display: inline;
}
.editing.view {
  display: none;
}
.interview-detail-app {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .banner {
    cursor: pointer;
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
