<template>
  <div class="interviewee-detail-modal-app">
    <div class="interviewee-header-line">
      <div class="interviewee-photo">
        <!-- <img src="intervieweeInfo.avatarURL" alt=""> -->
        照片
      </div>
      <div class="interviewee-baseinfo interviewee-baseinfo-1">
        <div class="name">
          <strong class="strong-size">姓名：{{ intervieweeInfo.user.name }}</strong>
        </div>
        <div class="gender">
         <span class="regular"> 性别： {{ intervieweeInfo.user.gender }}</span>
        </div>
        <div class="birth">
          <span class="regular">生日：{{ intervieweeInfo.user.birth }}</span>
        </div>
      </div>
      <div class="interviewee-baseinfo interviewee-baseinfo-2">
        <div class="grade"><span class="regular">年级：{{ intervieweeInfo.user.grade }}</span></div>
        <div class="college"><span class="regular">学院：{{ intervieweeInfo.user.college }}</span></div>
        <div class="stu-id"><span class="regular">学号：{{ intervieweeInfo.user.stuId}}</span></div>
      </div>
      <div class="interviewee-baseinfo interviewee-baseinfo-3">
        <div class="phone"><span class="regular">手机：{{ intervieweeInfo.user.phone }}</span></div>
        <div class="email"><span class="regular">邮箱：{{ intervieweeInfo.user.email }}</span></div>
        <div class="wechat"><span class="regular">微信：{{ intervieweeInfo.user.wechat }}</span></div>
        <div class="qq"><span class="regular">QQ：{{ intervieweeInfo.user.qq }}</span></div>
      </div>
      <div class="resume square">
        <strong class="name">简历</strong>
        <span class="slim">大小：10K</span>
        <img :src="require('../assets/interview/xiazai.png')" alt="">
        <div class="slim-big">下载附件</div>
      </div>
      <div class="work square">
        <strong class="name">作品</strong>
        <span class="slim">大小：10K</span>
        <img :src="require('../assets/interview/xiazai.png')" alt="">
        <div class="slim-big">下载附件</div>
      </div>
    </div>
    <div class="ques-area">
      <div class="q-container" v-for="(q, index) in intervieweeInfo.ques" :key="q.id">
        <strong class="regular">问答题{{ index + 1 }}：</strong>
        <div class="q-wrap">
          <div class="q-que qq">
           <strong class="strong-size"> 问题：</strong><br />{{ q.q }}
          </div>
          <div class="q-ans qq">
            <strong class="strong-size">回答：</strong><br />{{ q.a }}
          </div>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <div class="before hvr-fade" v-show="!intervieweeInfo.isFirst" @click="actionHandler('before')"><img :src="require('../assets/interview/zuojiantou.png')" alt=""></div>
      <div class="before" v-show="intervieweeInfo.isFirst" style="opacity: 0;"><img :src="require('../assets/interview/zuojiantou.png')" alt=""></div>
      <div class="btn-wrap">
        <button class="failed hvr-fade" @click="actionHandler('fail')"><img :src="require('../assets/interview/fail.png')" alt="">未通过</button>
        <button class="stared hvr-fade" @click="actionHandler('star')"><img :src="require('../assets/interview/star.png')" alt="">标星</button>
        <button class="pass hvr-fade" @click="actionHandler('pass')"><img :src="require('../assets/interview/pass.png')" alt="">已通过</button>
      </div>
      <div class="next hvr-fade" v-show="!intervieweeInfo.isLast" @click="actionHandler('next')"><img :src="require('../assets/interview/youjiantou.png')" alt=""></div>
      <div class="next" v-show="intervieweeInfo.isLast" style="opacity: 0;"><img :src="require('../assets/interview/youjiantou.png')" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntervieweeDetailModal',
  props: {
  },
  data () {
    return {
      intervieweeInfo: Object
    }
  },
  mounted: async function () {
    const res = await require('../../static/tests/intervieweeInfo.json')
    this.intervieweeInfo = res
  },
  methods: {
    actionHandler: function (Case) {
      if (Case === 'star') {

      } else {
        this.getNext(Case)
      }
      // send ajax request to update the status
    },
    getNext: async function (Case) {
      const res = await require('../../static/tests/intervieweeInfo.json')
      this.intervieweeInfo = res
    }
  }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    display: none;
}
strong.strong-size {
  font-size: 20px;
  font-family: PingFang SC, sans-serif;
  font-weight: 600;
  line-height: 28px;
  color: #707070;
}
strong.regular {
  font-size: 20px;
  font-family: PingFang SC, sans-serif;
  font-weight: 500;
  line-height: 28px;
  color: #707070;
}
span.regular {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 28px;
  color: #707070;
}
.interviewee-detail-modal-app {
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #F0FAFF;
  .interviewee-header-line {
    width: 100%;
    height: 140px;
    display: flex;
    .interviewee-photo {
      width: 100px;
      background: #FFFFFF;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      text-align: center;
      margin-right: 50px;
    }
    .interviewee-baseinfo {
      padding: 18px 25px;
      background: #FFFFFF;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 50px;
    }
    .interviewee-baseinfo-1 {
      width: 233px;
    }
    .interviewee-baseinfo-2 {
      width: 323px;
    }
    .interviewee-baseinfo-3 {
      width: 402px;
      padding: 7px 25px;
    }
    .square {
      width: 120px;
      background: #FFFFFF;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      border-radius: 15px;
      margin-right: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      strong.name {
        font-size: 20px;
        font-family: PingFang SC, sans-serif;
        font-weight: 500;
        line-height: 28px;
        color: #707070;
      }
      .slim {
        font-size: 12px;
        font-family: PingFang SC, sans-serif;
        font-weight: 100;
        line-height: 17px;
        color: #707070;
      }
      .slim-big {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 300;
        line-height: 21px;
        color: #707070;
      }
      img {
        width: 50px;
      }
    }
    .work {
      margin: 0;
    }
  }
  .ques-area {
    width: 100%;
    height: 345px;
    overflow: scroll;
    .q-container {
      height: 203px;
      width: 100%;
      margin-bottom: 50px;
      &:last-child {
        margin: 0;
      }
      .q-wrap {
        height: 173px;
        background: #FFFFFF;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.16);
        border-radius: 15px;
        display: flex;
        // align-items: center;
        // justify-content:center;
        overflow: scroll;
        padding: 13px 25px;
        .qq {
          font-size: 18px;
          font-family: PingFang SC, sans-serif;
          font-weight: 400;
          line-height: 25px;
          color: #707070;
        }
        .q-que {
          overflow: scroll;
        }
        .q-ans {
          overflow: scroll;
        }
      }
    }
  }
  .btn-container {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 50px;
      cursor: pointer;
      display: inline-block;
    }
    .btn-wrap {
      width: 42%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: 24%;
        height: 100%;
        background: #FFFFFF;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
        border-radius: 10px;
        font-size: 20px;
        font-family: PingFang SC, sans-serif;
        font-weight: 500;
        line-height: 28px;
        color: #4E94DD;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          background:#bdc3c7;
          // filter: invert(100%);
        }
      }

    }
  }
}
</style>
