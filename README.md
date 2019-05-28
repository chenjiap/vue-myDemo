1. Vue.js是什么?
1). 一位华裔前Google工程师(尤雨溪)开发的前端js库
2). 作用: 动态构建用户界面
3). 特点:
	* 遵循MVVM模式
	* 编码简洁, 体积小, 运行效率高, 移动/PC端开发
	* 它本身只关注UI, 可以轻松引入vue插件和其它第三库开发项目
4). 与其它框架的关联:
	* 借鉴angular的模板和数据绑定技术
	* 借鉴react的组件化和虚拟DOM技术
5). vue包含一系列的扩展插件(库):
	* vue-cli: vue脚手架
	* vue-resource(axios): ajax请求
	* vue-router: 路由
	* vuex: 状态管理
	* vue-lazyload: 图片懒加载
	* vue-scroller: 页面滑动相关
	* mint-ui: 基于vue的组件库(移动端)
	* element-ui: 基于vue的组件库(PC端)
2. 基本使用
1). 引入vue.js
2). 创建Vue实例对象(vm), 指定选项(配置)对象
	el : 指定dom标签容器的选择器
	data : 指定初始化状态数据的对象/函数(返回一个对象)
3). 在页面模板中使用{{}}或vue指令
3. 说说MVVM设计模式
M: Model(模型), vue中是data(为view提供数据)
V: View(视图), vue中是模板页面(显示data中的数据)
VM: ViewModel(视图模型), vue中是Vue实例对象(管理者: 数据绑定/DOM监听)
4. Vue对象的选项
1). el
指定dom标签容器的选择器
Vue就会管理对应的标签及其子标签
2). data
对象或函数类``型
指定初始化状态属性数据的对象
vm也会自动拥有data中所有属性
页面中可以直接访问使用
数据代理: 由vm对象来代理对data中所有属性的操作(读/写)
3). methods
包含多个方法的对象
供页面中的事件指令来绑定回调
回调函数默认有event参数, 但也可以指定自己的参数
所有的方法由vue对象来调用, 访问data中的属性直接使用this.xxx
4). computed
包含多个方法的对象
对状态属性进行计算返回一个新的数据, 供页面获取显示
一般情况下是相当于是一个只读的属性
利用set/get方法来实现属性数据的计算读取, 同时监视属性数据的变化
如何给对象定义get/set属性
	在创建对象时指定: get name () {return xxx} / set name (value) {}
  	对象创建之后指定: Object.defineProperty(obj, age, {get(){}, set(value){}})
5). watch
包含多个属性监视的对象
分为一般监视和深度监视
	'xxx' : {
		deep : true,
		handler : fun(value)
	}
另一种添加监视方式: vm.$watch('xxx', funn)
5. 过渡动画
利用vue去操控css的transition/animation动画
模板: 使用<transition name='xxx'>包含带动画的标签
css样式
	.fade-enter-active: 进入过程, 指定进入的transition
	.fade-leave-active: 离开过程, 指定离开的transition
	.xxx-enter, .xxx-leave-to: 指定隐藏的样式
编码例子
    .xxx-enter-active, .xxx-leave-active {
      transition: opacity .5s
    }
    .xxx-enter, .xxx-leave-to {
      opacity: 0
    }

    <transition name="xxx">
      <p v-if="show">hello</p>
    </transition>
6. 生命周期
vm/组件对象
生命周期图
主要的生命周期函数(钩子)
	created() / mounted(): 启动异步任务(启动定时器,发送ajax请求, 绑定监听)
	beforeDestroy(): 做一些收尾的工作
7. 自定义过滤器
1). 理解
对需要显示的数据进行格式化后再显示
2). 编码
1). 定义过滤器
	Vue.filter(filterName, function(value[,arg1,arg2,...]){
	  // 进行一定的数据处理
	  return newValue
	})
2). 使用过滤器
	<div>{{myData | filterName}}</div>
	<div>{{myData | filterName(arg)}}</div>
8. vue内置指令
v-text/v-html: 指定标签体
	* v-text : 当作纯文本
	* v-html : 将value作为html标签来解析
v-if v-else, v-else-if v-show: 显示/隐藏元素
	* v-if : 如果vlaue为true, 当前标签会输出在页面中
	* v-else : 与v-if一起使用, 如果value为false, 将当前标签输出到页面中
	* v-show: 就会在标签中添加display样式, 如果vlaue为true, display=block, 否则是none
v-for : 遍历
	* 遍历数组 : v-for="(person, index) in persons"
	* 遍历对象 : v-for="value in person"   $key
v-on : 绑定事件监听
	* v-on:事件名, 可以缩写为: @事件名
	* 监视具体的按键: @keyup.keyCode   @keyup.enter
	* 停止事件的冒泡和阻止事件默认行为: @click.stop   @click.prevent
	* 隐含对象: $event
v-bind : 强制绑定解析表达式
	* html标签属性是不支持表达式的, 就可以使用v-bind
	* 可以缩写为:  :id='name'
	* :class
	  * :class="a"
		* :class="{classA : isA, classB : isB}"
		* :class="[classA, classB]"
	* :style
		:style="{color : color}"
v-model
	* 双向数据绑定
	* 自动收集用户输入数据
ref : 标识某个标签
	* ref='xxx'
	* 读取得到标签对象: this.$refs.xxx
9. 自定义指令
1). 注册全局指令
Vue.directive('my-directive', function(el, binding){
  el.innerHTML = binding.value.toUpperCase()
})
2). 注册局部指令
directives : {
  'my-directive' : function(el, binding) {
      el.innerHTML = binding.value.toUpperCase()
  }
}
3). 使用指令
<div v-my-directive='xxx'>


1. vue脚手架
用来创建vue项目的工具包
创建项目:
    npm install -g vue-cli
    vue init webpack VueDemo
开发环境运行:
    cd VueDemo
    npm install
    npm run dev
生产环境打包发布
    npm run build
    npm install -g serve
    serve dist
    http://localhost:5000
2. eslint
用来做项目编码规范检查的工具
基本原理: 定义了很多规则, 检查项目的代码一旦发现违背了某个规则就输出相应的提示信息
有相应的配置, 可定制检查
3. 组件化编程
vue文件包含3个部分
    <template>
      <div></div>
    </template>
    <script>
        export default {
		 props: []/{}
          data(){},
		 computed: {}
          methods: {},

		  watch: {}
		  filters: {}
		  directives: {}
		  components: {}
        }
    </script>
    <style>
    </style>
组件化编码的基本流程
	1). 拆分界面, 抽取组件
	2). 编写静态组件
	3). 编写动态组件
    	初始化数据, 动态显示初始化界面
    	实现与用户交互功能


day01
1. 说说MVVM设计模式
M: Model(模型), vue中是data(为view提供数据)
V: View(视图), vue中是模板页面(显示data中的数据)
VM: ViewModel(视图模型), vue中是Vue实例对象(管理者: 数据绑定/DOM监听)
2. 说说你对计算属性的理解
什么时候用计算属性?
   模板显示要显示的数据是根据n个已有的相关数据进行计算来确定
getter: get方法, 当读取属性值时/相关数据发生了改变自动调用, 根据相关数据进行计算并返回结果, this就是vm
setter: set方法, 当修改了当前属性的值自动调用, 监视属性值的变化去更新相关数据, this就是vm
3. 区别computed与method和watch
1). computed与method: computed有缓存可以避免重复计算, 而method不可以
2). computed与watch:
    get(): 可以监视所有依赖数据, 编码简洁, 但只能同步计算产生一个需要显示的结果数据
    watch: 可以监视所有依赖数据, 编码麻烦, 可以进行异步/长时间处理后更新数据显示
4. 说说回调函数的判断及相关问题
1. 什么函数?
    1). 你定义的
    2). 你没有调用
    3). 但最终执行了(在后面的某个时刻或者某个条件下)
2. 关于回调函数相关的3个问题
    1). 什么时候调用
    2). 用来做什么的
    3). this是谁
5. 说说2种类型的数据容器
1). 对象
  属性值才是我们要存的数据
  属性名是数据的标识名称, 根据标识名来操作数据
2). 数组
  数组中的元素就是我们要存的数据
  元素的下标就是数据的标识名称, 根据标识名来操作数据
3). 选择哪种容器
  一般有序的用数组, 不强调顺序的可用对象
  如果需要根据标识数据查找数据对象, 用对象容器比用数组容器效率高
6. git的6个基本操作
1). 创建本地仓库
   创建.gitignore配置文件
   git init
   git add *
   git commit -m "xxx"
2). 创建远程仓库
   New Repository
   指定名称
   创建
3). 将本地仓库推送到远程仓库
   git remote add origin https://github.com/zxfjd3g/xxx.git 关联远程仓库
   git push origin master
4). 如果本地有更新, 推送到远程
   git add *
   git commit -m "xxx"
   git push origin master
5). 如果远程有更新, 拉取到本地
   git pull origin master
6). 克隆远程仓库到本地
   git clone https://github.com/zxfjd3g/xxx.git
7. 函数的2个角色, 方法与属性, 方法与函数
1). 函数的2个角色:
    函数: 通过()调用
    对象: 通过.操作属性或方法, 此时可以称之为函数对象
2). 方法与属性
    方法是一个特别的属性: 属性值是函数
3). 方法与函数
    在对象内定义的常称为方法, 通过对象调用的常称为方法, 其它常称为函数
day02
1. data中的数组与对象属性不同处理
数组: 重写数组更新数组元素的方法, 只要调用数组的这些方法, 就会更新相应的界面
对象: 对对象中的属性进行setter监视, 只要设置了新的属性值, 就会更新相应的界面
2. 写出7个指令及其作用
v-text: 设置标签体文本
v-html: 设置标签体子标签
v-if/v-else/v-show: 显示/隐藏
v-for: 遍历显示列表
v-bind: 强制绑定表达式, 简写:
v-on: 绑定事件监听, 简写@
v-model: 双向数据绑定
3. 写出vue 7个配置选项及其作用
el: 最外层元素选择器
props: 声明接收哪些属性
data: 状态数据
computed: 计算属性
methods: 事件回调函数
watch: 监视属性变化
directives: 注册局部指令
filters: 注册局部过滤器
components: 局部注册组件
4. 说说vue的生命周期
1). 初始化
   beforeCreate()
   created()
   beforeMount()
   mounted(): 异步任务(发ajax请求/启动定时器)
2). 更新
   beforeUpdate()
   updated()
3). 死亡
   beforeDestroy(): 收尾工作(清除定时器)
   destroyed()
5. 说说项目开发中常用的ES6新语法
比较简单
比较重要/有点难度的

定义变量/常量: const/let
解构赋值: let {a, b} = this.props / import {aa} from 'xxx' / function f ({name}) {}
对象的简洁表达: {a, b, c () {}}
箭头函数:
   组件的自定义方法: xxx = () => {}
   匿名函数作为实参
   优点:
      * 简洁
      * 没有自己的this,使用引用this查找的是外部this
扩展运算符: ...
类: class/extends/constructor/super
ES6模块化: export/default/import
异步: promise, async/await
6. 比较函数的call()/apply()/bind()
1). call(obj, param1, param2)/apply(obj, [[param1, param2])
   调用/执行函数
   只是强制指定函数中的this为第一个参数指定的对象
   如果函数执行需要传参数, call是依次传递, apply需要封装成数组传递
2). bind(obj)
   返回一个新函数, 不会自动执行, 需要手动执行
   新函数内部会通过原函数对象的call来调用原本的函数, 并指定函数的this为obj
   如果直接调用原来函数, this没有绑定为obj
day03
