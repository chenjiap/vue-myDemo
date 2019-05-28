<template>
  <div id="app">
    <h1>App</h1>
    <img src="./assets/logo.png" alt="logo" class="logo"/>
    <hello-world></hello-world>
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue'
	export default {
		components: {
			HelloWorld
    }
	}
</script>
<style scoped>
 .logo{
   width: 100px;
   height: 100px;
 }
</style>

