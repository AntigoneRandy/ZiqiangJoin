<template>
  <div class="interview-app">
    <InterviewCard v-for="(InterviewInfo, index) in InterviewPosts"
             :key="InterviewInfo.id"
             :index="index"
             :info="InterviewInfo"
             />
    <InterviewCard v-for="i in holders" :key="i" style="visibility:hidden" />
  </div>
</template>

<script>
import InterviewCard from '../components/InterviewCard.vue'
export default {
  name: 'InterviewView',
  components: {
    InterviewCard
  },
  data () {
    return {
      InterviewPosts: [{
        id: '1',
        name: '岗位名称',
        poster: '技术中心产品组',
        num: '23',
        plan: '50',
        end_time: '2020-02-10'
      },
      {
        id: '2',
        name: '岗位名称',
        poster: '技术中心产品组',
        num: '23',
        plan: '50',
        end_time: '2020-02-10'
      },
      {
        id: '3',
        name: '岗位名称',
        poster: '技术中心产品组',
        num: '23',
        plan: '50',
        end_time: '2020-02-10'
      },
      {
        id: '4',
        name: '岗位名称',
        poster: '技术中心产品组',
        num: '23',
        plan: '50',
        end_time: '2020-02-10'
      },
      {
        id: '5',
        name: '岗位名称',
        poster: '技术中心产品组',
        num: '23',
        plan: '50',
        end_time: '2020-02-10'
      },
      {
        id: '6',
        name: '岗位名称',
        poster: '技术中心产品组',
        num: '23',
        plan: '50',
        end_time: '2020-02-10'
      },
      {
        id: '7',
        name: '岗位名称',
        poster: '技术中心产品组',
        num: '23',
        plan: '50',
        end_time: '2020-02-10'
      },
      {
        id: '8',
        name: '岗位名称',
        poster: '技术中心产品组',
        num: '23',
        plan: '50',
        end_time: '2020-02-10'
      }]
    }
  },
  computed: {
    holders () {
      return 3 - (this.InterviewPosts.length % 3)
    }
  },
  methods: {
  }
}
</script>
<style style="scss" scoped>
.interview-app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
