<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo"/>
      <List :todos="todos"   />
      <Footer  >
        <input type="checkbox" v-model="isCheck"  slot="left"/>
        <span slot="center">
          <span>已完成{{completedCount}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" v-show="completedCount>0" slot="right">清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>
<script>
  import PubSub from 'pubsub-js'
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  import storageUtils from './utils/storageUtils'
	export default {
  	data(){
  		return {
        todos:storageUtils.getTodos()
      }
    },
    computed: {
      // 已完成的数量
      completedCount () {
        return this.todos.reduce((pre, todo) => pre + (todo.completed ? 1 : 0), 0)
      },
      isCheck: {
        get () {
          return this.todos.length === this.completedCount && this.completedCount>0
        },
        set (value) {
          this.checkAllTodos(value)
        }
      }
    },
    mounted(){
      this.token = PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })
      this.$bus.$on('toggleTodo', (todo) => {
        this.toggleTodo(todo)
      })
    },
    beforeDestroy() {
      // 取消消息订阅
      PubSub.unsubscribe(this.token)
      // 解除事件监听绑定
      this.$bus.$off('toggleTodo')
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      // 删除指定todo
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      // 切换指定todo的是否完成的属性值
      toggleTodo (todo) {
        todo.completed = !todo.completed
      },
      checkAllTodos (isCheck) {
        this.todos.forEach(todo => todo.completed = isCheck)
      },

    },
    watch: {
      todos: {
        deep: true, // 深度监视
        /*handler (val) {  // todos发生变化
         // 将最新的todos保存到local
         storageUtils.saveTodos(val)
         },*/
        handler: storageUtils.saveTodos
      },
    },


    components: {
			Header,List,Footer
    }
	}
</script>
<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>

