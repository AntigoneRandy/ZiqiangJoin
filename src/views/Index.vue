<template>
  <div class="index">
    <div class="card-container">
      <IndexCard v-for="msg in msgs"
                 :key="msg.name"
                 :pic="msg.pic"
                 :name="msg.name"
                 :url="msg.url"
                 :intro="msg.intro"></IndexCard>
    </div>
    <LogoutButton />
  </div>
</template>

<script>
import IndexCard from '../components/IndexCard'
import LogoutButton from '../components/LogoutButton'
export default {
  name: 'Index',
  components: {
    IndexCard,
    LogoutButton
  },
  data () {
    return {
      msgs: [
        {
          name: '招新岗位发布',
          intro: '1、招新岗位发布招新岗位发布招新岗位发布招新岗位发布招新岗位发布2、招新岗位发布招新岗位发布招新岗位发布招新岗位发布招新岗位发布招新岗位发布',
          pic: require('../assets/index/post.png'),
          url: '/home'
        },
        {
          name: '面试流程管理',
          intro: '1、招新岗位发布招新岗位发布招新岗位发布招新岗位发布招新岗位发2、招新岗位发布招新岗位发布招新岗位发布招新岗位发布招新岗位发布招新岗位发布',
          pic: require('../assets/index/interview.png'),
          url: '/home/interview'
        },
        {
          name: '组织架构管理',
          intro: '1、招新岗位发布招新岗位发布招新岗位发布招新岗位发布招新岗位发布2、招新岗位发布招新岗位发布招新岗位发布招新岗位发布招新岗位发布招新岗位发布',
          pic: require('../assets/index/organization.png'),
          url: '/home/organization'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  background-image: url(../assets/index/bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  overflow: hidden;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-container {
  width: 100%;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
