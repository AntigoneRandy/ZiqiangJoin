<template>
  <div class="post-app">
    <JobCard v-for="(JobInfo, index) in JobPosts"
             :key="JobInfo.id"
             :index="index"
             :info="JobInfo"
             @click.native="showDetail(JobInfo.id)"/>
    <div class="new-job" @click="addNewJob()">
      <div>
        <img src="@/assets/post/add.png" alt="" />
        <p>添加新岗位</p>
      </div>
    </div>
    <JobCard v-for="i in holders" :key="i" style="visibility:hidden" />
  </div>
</template>

<script>
import JobCard from '../components/JobCard'
import PostDetailModal from './PostDetailModal'
export default {
  name: 'PostView',
  components: {
    JobCard
  },
  data () {
    return {
      JobPosts: [{
        id: '1',
        name: '岗位名称',
        poster: '技术中心产品组',
        status: '审核中',
        begin_time: '2020-02-02',
        end_time: '2020-02-10'
      },
      {
        id: '2',
        name: '岗位名称',
        poster: '技术中心产品组',
        status: '审核中',
        begin_time: '2020-02-02',
        end_time: '2020-02-10'
      },
      {
        id: '3',
        name: '岗位名称',
        poster: '技术中心产品组',
        status: '审核中',
        begin_time: '2020-02-02',
        end_time: '2020-02-10'
      },
      {
        id: '4',
        name: '岗位名称',
        poster: '技术中心产品组',
        status: '审核中',
        begin_time: '2020-02-02',
        end_time: '2020-02-10'
      },
      {
        id: '5',
        name: '岗位名称',
        poster: '技术中心产品组',
        status: '审核中',
        begin_time: '2020-02-02',
        end_time: '2020-02-10'
      },
      {
        id: '6',
        name: '岗位名称',
        poster: '技术中心产品组',
        status: '审核中',
        begin_time: '2020-02-02',
        end_time: '2020-02-10'
      },
      {
        id: '8',
        name: '岗位名称',
        poster: '技术中心产品组',
        status: '审核中',
        begin_time: '2020-02-02',
        end_time: '2020-02-10'
      }],
      detailInfo: {}
    }
  },
  computed: {
    holders () {
      return 3 - (this.JobPosts.length % 3) - 1
    }
  },
  methods: {
    addNewJob () {
      this.$router.push('create')
    },
    async showDetail (id) {
      const res = await require('../../static/tests/postdetail.json')
      this.$modal.show(
        PostDetailModal,
        { detailInfo: res },
        {
          adaptive: true,
          height: '71%',
          width: '71%',
          shiftY: 0.6,
          styles: 'border-radius: 20px;'
        }
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.post-app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.new-job {
  min-width: 500px;
  width: 500px;
  height: 325px;
  background: #FFFFFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  padding: 39px 80px;
  margin-top: 50px;
  color: #4E94DD;
  font-size: 35px;
  line-height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100px;
  }
}
</style>
