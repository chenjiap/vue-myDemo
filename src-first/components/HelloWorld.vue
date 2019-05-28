<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
	export default {
		name:'HelloWord',
		data(){
			return {
         msg:'第一个vue组件'
      }
    },

	}
</script>
<style scoped>
h1{
  color:red;
}
</style>
