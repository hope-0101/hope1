<template>
  <div class="app">
    <div class="hope-box">
      <!-- 头像 -->
      <div class="hope-img">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录区 -->
      <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user">></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
          ></el-input>
        </el-form-item>
        <el-form-item class="hope-btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="logincz">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'demo',
  // 组件状态值
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        // 验证用户名
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    logincz() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败！')
        this.$message.success('登录成功')
        window.sessionStorage.setItem('token', res.data.token)
        // console.log(res)
        this.$router.push('/admin')
      })
    }
  }
}
</script>
<style scoped lang="scss">
.app {
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hope-box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
}
.hope-img {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  margin: 0 auto;
  margin-top: -15%;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.el-form {
  padding: 0px 20px 0px 20px;
  margin-top: 30px;
  .el-form-item {
    width: 100%;
    height: 50px;
    font-size: 20px;
    .el-input {
      width: 300px;
      height: 40px;
    }
  }
}
.hope-btn {
  width: 100%;
  margin-top: 20px;
  .el-button {
    width: 100px;
  }
}
</style>
