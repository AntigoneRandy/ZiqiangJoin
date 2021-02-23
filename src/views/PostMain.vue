<template>
  <div class="post-main">
    <vue-page-transition name="fade-in-right">
    <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  name: 'PostMain'
}
</script>

<style>

</style>
