<template>
<div class="post-detail-modal">
  <div class="left-part">
    <span class="post-name">{{ detailInfo.postName }}</span>
    <div class="intro-container">
      <span class="regular-span">职位介绍：</span>
      <div class="intro">
        {{ detailInfo.introduction }}
      </div>
    </div>
    <div class="req-container">
      <span class="regular-span">招聘需求：</span>
      <div class="req-wrap">
        <div class="req" v-for="requirement in detailInfo.requirements" :key="requirement.content">
          <img :src="require('../assets/post/' + requirement.status + '.png')" alt="">
          <div class="content">
            {{ requirement.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="right-part">
    <div class="additional-container">
      <span class="regular-span">附加笔试题：</span>
      <div class="additional-wrap">
        <div class="ques-container" v-for="(ques,index) in detailInfo.addition" :key="ques.content">
          <span class="regular-span">附加题{{ index + 1 }}：</span>
          <div class="ques">
            {{ ques.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="tag-container">
      <span class="regular-span">标签：</span>
      <div class="tag-wrap">
        <div class="tag" v-for="tag in detailInfo.tags" :key="tag">
          {{ tag }}
        </div>
        <div class="tag" v-for="(tag,index) in holders" :key="index" style="visibility: hidden">
        </div>
      </div>
    </div>
    <div class="date-container">
      <div class="date-wrap">
        <span class="regular-span">报名截止日期：</span>
        <div class="date">{{ detailInfo.startTime }}</div>
      </div>
      <div class="date-wrap">
        <span class="regular-span">招新结束日期：</span>
        <div class="date">{{ detailInfo.endTime }}</div>
      </div>
    </div>
  <button class="hvr-fade" @click="$emit('close')">返回</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'PostDetailModal',
  props: {
  },
  methods: {
  },
  data () {
    return {
      detailInfo: {}
    }
  },
  mounted: async function () {
    const res = await require('../../static/tests/postdetail.json')
    this.detailInfo = res
  },
  computed: {
    holders () {
      return 3 - (this.detailInfo.tags.length % 3)
    }
  }
}
</script>

<style lang="scss" scoped>
// * {
//   overflow: scroll;
// }
.post-detail-modal {
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F0FAFF;

  .left-part {
    flex: 1;
    margin-right: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .post-name {
      font-size: 30px;
      font-family: PingFang SC, sans-serif;
      font-weight: 500;
      line-height: 42px;
      color: #4E94DD;
    }

    .intro-container {
      height: 258px;
      width: 100%;
      margin-top: 25px;
      .intro {
        height: 230px;
        padding: 15px 20px;
        background: #FFFFFF;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.16);
        border-radius: 15px;
        font-size: 18px;
        font-family: PingFang SC, sans-serif;
        font-weight: 400;
        line-height: 25px;
        color: #707070;
        overflow:scroll;
      }
    }

    .req-container {
      height: 258px;
      width: 100%;
      margin-top: 25px;
      .req-wrap {
        height: 230px;
        background: #FFFFFF;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.16);
        border-radius: 15px;
        padding: 15px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
        .req {
          width: 100%;
          // height: 30px;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          &:last-child {
            margin: 0;
          }
          img {
            width: 30px;
            margin: 5px 5px 5px 0;
            align-self: flex-start;
          }
          .content {
            width: 100%;
            background: #F0FAFF;
            border-radius: 10px;
            padding: 10px 15px;
            font-size: 18px;
            font-family: PingFang SC, sans-serif;
            font-weight: 400;
            line-height: 25px;
            color: #707070;
          }
        }
      }
    }
  }
  .right-part {
    height: 95%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    // justify-content: space-between;
    .additional-container {
      height: 209px;
      width: 100%;
      margin-bottom: 50px;
      .additional-wrap {
        height: 181px;
        padding: 15px 20px;
        background: #FFFFFF;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 15px;
        overflow: scroll;
        .ques-container {
          height: 130px;
          margin-bottom: 10px;
          &:last-child {
            margin: 0;
          }
          span {
            margin-left: 18px;
            margin-bottom: 2px;
          }
          .ques {
            height: 100px;
            overflow: scroll;
            background: #FFFFFF;
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.16);
            border-radius: 15px;
            padding: 10px 15px;
            font-size: 18px;
            font-family: PingFang SC,sans-serif;
            font-weight: 400;
            line-height: 25px;
            color: #707070;
          }
        }
      }
    }
    .tag-container {
      height: 144px;
      margin-bottom: 37px;
      width: 100%;
      .tag-wrap {
        height: 116px;
        background: #FFFFFF;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 15px;
        overflow: scroll;
        padding: 21px 42px 6px 42px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .tag {
          width: 180px;
          height: 30px;
          margin-bottom: 15px;
          background: #F0FAFF;
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.16);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-family: PingFang SC, sans-serif;
          font-weight: 400;
          line-height: 25px;
          color: #707070;
        }
      }
    }
    .date-container {
      width: 100%;
      height: 41px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      .date-wrap {
        display: flex;
        height: 100%;
        margin-top: 20px;
        justify-content: space-between;
        align-items: center;
        .date {
          width: 185px;
          height: 100%;
          background: #FFFFFF;
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.16);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 25px;
          color: #707070;
        }
      }
    }
    button {
      align-self: flex-end;
      position: absolute;
      bottom: -20px;
      width: 110px;
      height: 46px;
      background: #FFFFFF;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
      border-radius: 10px;
      font-size: 20px;
      font-family: PingFang SC, sans-serif;
      font-weight: 500;
      line-height: 28px;
      color: #4E94DD;
      &:hover {
        background:#bdc3c7;
        color: #FFF;
      }
    }
  }
}

.regular-span {
  font-size: 20px;
  font-family: PingFang SC, sans-serif;
  font-weight: 500;
  line-height: 30px;
  color: #707070;

}
</style>
