<template>
  <div class="interviewee-detail-modal-app">
    <div class="interviewee-header-line">
      <div class="interviewee-photo">
        <!-- <img src="intervieweeInfo.avatarURL" alt=""> -->
        照片
      </div>
      <div class="interviewee-baseinfo-1">
        <div class="name">
          <strong class="strong-size">姓名：</strong>
          <span class="regular">{{ intervieweeInfo.user.name }}</span>
        </div>
        <div class="gender">
         <span class="regular"> 性别： {{ intervieweeInfo.user.gender }}</span>
        </div>
        <div class="birth">
          <span class="regular">生日：{{ intervieweeInfo.user.birth }}</span>
        </div>
      </div>
      <div class="interviewee-baseinfo-2">
        <div class="grade">年级：{{ intervieweeInfo.user.grade }}</div>
        <div class="college">学院：{{ intervieweeInfo.user.college }}</div>
        <div class="stu-id">学号：{{ intervieweeInfo.user.stuId}}</div>
      </div>
      <div class="interviewee-baseinfo-3">
        <div class="phone">手机：{{ intervieweeInfo.user.phone }}</div>
        <div class="email">邮箱：{{ intervieweeInfo.user.email }}</div>
        <div class="wechat">微信：{{ intervieweeInfo.user.wechat }}</div>
        <div class="qq">QQ：{{ intervieweeInfo.user.qq }}</div>
      </div>
      <div class="resume">
        <strong class="name">简历</strong>
        <span class="slim">大小：10k</span>
        <!-- <img src="" alt=""> -->
        <div class="slim-big">下载附件</div>
      </div>
      <div class="work">
        <strong class="name">作品</strong>
        <span class="slim">大小：10k</span>
        <!-- <img src="" alt=""> -->
        <div class="slim-big">下载附件</div>
      </div>
    </div>
    <div class="ques-area">
      <div class="q-container" v-for="(q, index) in intervieweeInfo.ques" :key="q.id">
        <strong class="regular">问答题{{ index + 1 }}：</strong>
        <div class="q-wrap">
          <div class="q-que">
            问题：{{ q.q }}
          </div>
          <div class="q-ans">
            回答：{{ q.a }}
          </div>
        </div>
      </div>
    </div>
    <button class="failed">未通过</button>
    <button class="stared">标星</button>
    <button class="pass">已通过</button>
    <div class="next"></div>
  </div>
</template>

<script>
export default {
  name: 'IntervieweeDetailModal',
  props: {
  },
  data () {
    return {
      intervieweeInfo: {
        user: {
          avatarURL: '',
          name: '张三',
          gender: '女',
          birth: '2002-02-08',
          grade: '2020级',
          college: '法学院',
          stuId: '2020302000202',
          phone: '18300000000',
          email: 'antigonerandy@qq.com',
          wechat: '18300000000',
          qq: '25000000'
        },
        ques: [
          {
            q: '这是问题这是问题Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iure corrupti hic quidem vitae  beatae, velit nulla non nam quae optio fugit repudiandae dignissimos debitis, nisi saepe. Hic expedita similiqueamet   aliquam non, laudantium ullam officia velit? Cupiditate magnam consequuntur beatae, quo quibusdam eveniettenetur   suscipit cum ut quos rerum, dolores quidem repellendus facere debitis ex a sequi! Dolorum numquampraesentium nulla,  tempora earum rerum sit ratione odit voluptates quam perferendis neque. Optio a itaque enimlaudantium et amet   quisquam magnam sapiente, beatae tempore est, quos provident vero sequi illum voluptates omnis?Perspiciatis omnis  labore quis quod fuga ipsam suscipit.',
            a: '这是答案这是答案Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro repellat, animi doloremque soluta debitis ducimus enim obcaecati est voluptatem natus dolores, exercitationem officia ad excepturi reiciendis  ullam eaque eveniet dicta omnis dolore! Nam magnam illum aliquid nisi possimus corrupti. Libero, dicta quis sit  repellendus eos quas impedit deserunt incidunt quos quia provident. Explicabo voluptate fugit blanditiis libero  quaerat repudiandae nihil. Deleniti odit sunt rerum similique nemo omnis, incidunt consequatur dolorum qui nam aut dicta dolores culpa porro fuga iste inventore mollitia quam repellendus corporis. Suscipit laboriosam, aut,laudantium   architecto asperiores perspiciatis neque ullam rerum dignissimos illo porro eius!'
          },
          {
            q: '这是问题这是问题Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iure corrupti hic quidem vitae  beatae, velit nulla non nam quae optio fugit repudiandae dignissimos debitis, nisi saepe. Hic expedita similiqueamet   aliquam non, laudantium ullam officia velit? Cupiditate magnam consequuntur beatae, quo quibusdam eveniettenetur   suscipit cum ut quos rerum, dolores quidem repellendus facere debitis ex a sequi! Dolorum numquampraesentium nulla,  tempora earum rerum sit ratione odit voluptates quam perferendis neque. Optio a itaque enimlaudantium et amet   quisquam magnam sapiente, beatae tempore est, quos provident vero sequi illum voluptates omnis?Perspiciatis omnis  labore quis quod fuga ipsam suscipit.',
            a: '这是答案这是答案Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro repellat, animi doloremque soluta debitis ducimus enim obcaecati est voluptatem natus dolores, exercitationem officia ad excepturi reiciendis  ullam eaque eveniet dicta omnis dolore! Nam magnam illum aliquid nisi possimus corrupti. Libero, dicta quis sit  repellendus eos quas impedit deserunt incidunt quos quia provident. Explicabo voluptate fugit blanditiis libero  quaerat repudiandae nihil. Deleniti odit sunt rerum similique nemo omnis, incidunt consequatur dolorum qui nam aut dicta dolores culpa porro fuga iste inventore mollitia quam repellendus corporis. Suscipit laboriosam, aut,laudantium   architecto asperiores perspiciatis neque ullam rerum dignissimos illo porro eius!'
          },
          {
            q: '这是问题这是问题Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iure corrupti hic quidem vitae  beatae, velit nulla non nam quae optio fugit repudiandae dignissimos debitis, nisi saepe. Hic expedita similiqueamet   aliquam non, laudantium ullam officia velit? Cupiditate magnam consequuntur beatae, quo quibusdam eveniettenetur   suscipit cum ut quos rerum, dolores quidem repellendus facere debitis ex a sequi! Dolorum numquampraesentium nulla,  tempora earum rerum sit ratione odit voluptates quam perferendis neque. Optio a itaque enimlaudantium et amet   quisquam magnam sapiente, beatae tempore est, quos provident vero sequi illum voluptates omnis?Perspiciatis omnis  labore quis quod fuga ipsam suscipit.',
            a: '这是答案这是答案Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro repellat, animi doloremque soluta debitis ducimus enim obcaecati est voluptatem natus dolores, exercitationem officia ad excepturi reiciendis  ullam eaque eveniet dicta omnis dolore! Nam magnam illum aliquid nisi possimus corrupti. Libero, dicta quis sit  repellendus eos quas impedit deserunt incidunt quos quia provident. Explicabo voluptate fugit blanditiis libero  quaerat repudiandae nihil. Deleniti odit sunt rerum similique nemo omnis, incidunt consequatur dolorum qui nam aut dicta dolores culpa porro fuga iste inventore mollitia quam repellendus corporis. Suscipit laboriosam, aut,laudantium   architecto asperiores perspiciatis neque ullam rerum dignissimos illo porro eius!'
          },
          {
            q: '这是问题这是问题Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iure corrupti hic quidem vitae  beatae, velit nulla non nam quae optio fugit repudiandae dignissimos debitis, nisi saepe. Hic expedita similiqueamet   aliquam non, laudantium ullam officia velit? Cupiditate magnam consequuntur beatae, quo quibusdam eveniettenetur   suscipit cum ut quos rerum, dolores quidem repellendus facere debitis ex a sequi! Dolorum numquampraesentium nulla,  tempora earum rerum sit ratione odit voluptates quam perferendis neque. Optio a itaque enimlaudantium et amet   quisquam magnam sapiente, beatae tempore est, quos provident vero sequi illum voluptates omnis?Perspiciatis omnis  labore quis quod fuga ipsam suscipit.',
            a: '这是答案这是答案Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro repellat, animi doloremque soluta debitis ducimus enim obcaecati est voluptatem natus dolores, exercitationem officia ad excepturi reiciendis  ullam eaque eveniet dicta omnis dolore! Nam magnam illum aliquid nisi possimus corrupti. Libero, dicta quis sit  repellendus eos quas impedit deserunt incidunt quos quia provident. Explicabo voluptate fugit blanditiis libero  quaerat repudiandae nihil. Deleniti odit sunt rerum similique nemo omnis, incidunt consequatur dolorum qui nam aut dicta dolores culpa porro fuga iste inventore mollitia quam repellendus corporis. Suscipit laboriosam, aut,laudantium   architecto asperiores perspiciatis neque ullam rerum dignissimos illo porro eius!'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
