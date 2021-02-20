<template>
  <div class="home-app">
    <LogoutButton />
    <HomeButton />
    <div class="app-container">
      <TabNav />
      <div class="content-area">
        <vue-page-transition name="fade-in-up">
        <router-view></router-view>
        </vue-page-transition>
      </div>
    </div>
  </div>
</template>

<script>
import LogoutButton from '../components/LogoutButton'
import HomeButton from '../components/HomeButton'
import TabNav from '../components/TabNav'
export default {
  name: 'Interview',
  components: {
    LogoutButton,
    HomeButton,
    TabNav
  }
}
</script>

<style lang="scss">
.home-app {
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
  .app-container {
    height: 880px;
    width: 1700px;
    .content-area {
      width: 1700px;
      height: 800px;
      background: #DCF3FF;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      padding: 0 50px 50px 50px;
      border-radius: 0px 25px 25px 25px;
      overflow: scroll;
    }
  }
}
</style>
