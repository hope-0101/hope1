<template>
  <div class="app">
    <el-container>
      <el-header>
        <h2>后台管理系统</h2>
        <el-button type="text" @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px"></el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import Rend from "@/inde/rend.vue";
export default {
  // 组件名称
  name: 'demo',
  // 组件状态值
  data() {
    return {}
  },
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {},
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  // components: { Rend },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/')
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {}
}
</script>
<style scoped lang="scss">
.app {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #000;
  color: #fff;
  line-height: 60px;
}
.el-header > .el-button {
  position: absolute;
  top: 10px;
  right: 20px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  // text-align: center;
  // line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.index > .el-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.index > .el-container > .el-container {
  flex: 1;
}
</style>
