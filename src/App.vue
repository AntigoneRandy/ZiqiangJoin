<template>
  <div id="app">
    <vue-page-transition name="fade">
    <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

::-webkit-scrollbar {
    display: none;
}

a {
  text-decoration: none;
}
li {
  list-style: none;
}
button {
  cursor: pointer;
}
</style>
