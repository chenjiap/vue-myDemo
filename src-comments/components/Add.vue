<template>
  <div class="container">
    <div class="col-md-4">
      <form class="form-horizontal">
        <div class="form-group">
          <label>用户名</label>
          <input type="text" class="form-control" placeholder="用户名" v-model="username">
        </div>
        <div class="form-group">
          <label>评论内容</label>
          <textarea class="form-control" rows="6" placeholder="评论内容" v-model="comments"></textarea>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" class="btn btn-default pull-right" @click="submit">提交</button>
          </div>
        </div>
      </form>
    </div>
    <List/>
  </div>
</template>
<script>
  import List from './List.vue'
	export default {
  	data (){
  		return {
  			users:[],
  			username:'',
        comments:''
      }
    },

    methods: {
  		submit(){
        const   user = {
          id: Date.now(),
          username:this.username,
          comments:this.comments
        }

        if(user.username&&user.comments){
        	this.users.unshift(user)
          this.$bus.$emit('users',this.users)
          this.username = ''
          this.comments = ''
        }

      }
    },
		components: {List}
	}
</script>
<style scoped>

</style>
