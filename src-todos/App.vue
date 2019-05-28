<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"  :toggleTodo="toggleTodo"/>
      <Footer  :todos="todos" :checkAllTodos="checkAllTodos"/>
    </div>
  </div>
</template>
<script>
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

