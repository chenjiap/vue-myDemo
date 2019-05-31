<template>


  <div>
    <h2>home组件</h2>
    <ul class="nav nav-tabs">

      <!-- <li><a href="#/home/news" class="router-link-exact-active activeClass">News</a></li> -->
      <!-- <li><a href="#/home/message" class="">Message</a></li> -->
      <router-link to="/home/news" class="news">News</router-link>
      <router-link to="/home/message">Message</router-link>

    </ul>
    <router-view></router-view>

  </div>

</template>

<script>
  export default {



  }

</script>
<style scoped>
  .news {
    margin-right: 20px
  }

</style>
