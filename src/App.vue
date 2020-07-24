<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/collect">收藏</router-link> |
      <router-link to="/video">影片</router-link>
    </div>
    <router-view />
        <!-- <router-view :key="$route.path"></router-view> -->

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* color: #2c3e50; */
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
