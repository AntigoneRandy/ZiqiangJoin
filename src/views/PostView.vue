<template>
  <div class="post-app">
    <JobCard v-for="(JobInfo, index) in JobPosts"
             :key="JobInfo.id"
             :index="index"
             :info="JobInfo"/>
    <JobCard v-for="i in holders" :key="i" style="visibility:hidden" />
  </div>
</template>

<script>
import JobCard from '../components/JobCard'
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
        id: '7',
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
      }]
    }
  },
  computed: {
    holders () {
      return 3 - (this.JobPosts.length % 3)
    }
  }
}
</script>
<style style="scss" scoped>
.post-app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
