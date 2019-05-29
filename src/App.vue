<template>
  <div id="app">
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <Add/>
    </div>
  </div>
</template>
<script>
  import Add from './components/Add.vue'
	export default {
		components: {Add}
	}
</script>
<style scoped>

</style>
