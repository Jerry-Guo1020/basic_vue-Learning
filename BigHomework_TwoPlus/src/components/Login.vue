<template>
  <div class="login-container">
    <el-card class="login-card">
      <strong><h1 class="login-title">用户登录</h1></strong>
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef">

        <el-form-item prop="mail" label="邮箱地址">
            <el-input prefix-icon="User"v-model="loginForm.mail" placeholder="请输入邮箱地址"></el-input>
        </el-form-item>
        
        <el-form-item prefix-icon="Lock"  prop="password" label="密码">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="flex">
                <div class="fcheckbox-container">
                    <el-checkbox>记住我</el-checkbox><br>
                    <!--忘记密码的一个跳转链接-->
                    <el-link type="primary" :underline="false" @click="$router.push('/register')">忘记密码?</el-link>
                </div>
              </el-form-item> 
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
          <el-button @click="$router.push('/register')">注册账号</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginFormRef = ref(null)

const loginForm = reactive({
  username: '',
  password: ''
})

const rules = {
  mail: [{ required: true, message: '请输入邮箱地址', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const handleLogin = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      // 这里添加登录逻辑
      router.push('/home')
    }
  })
}

const login = () => {

if (registerData.value.username === "aabb" && registerData.value.password === "123456") {
    ElMessage.success("登录成功");
    router.push({ name: "main" });
}
else {
    ElMessage.console.error("登录失败");
}
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  width: 400px;
}

.login-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  color: #303133;
  font-weight: 500;
}

/* 表单整体居中 */
:deep(.el-form) {
  width: 85%;
  margin: 0 auto;
}

/* 标签文字居中 */
:deep(.el-form-item__label) {
  justify-content: center;
}

/* 移除默认的左边距 */
:deep(.el-form-item__content) {
  margin-left: 0 !important;
}

/* 按钮居中 */
:deep(.el-form-item:last-child .el-form-item__content) {
  display: flex;
  justify-content: center;
  gap: 20px;  /* 按钮之间的间距 */
}

/* 可选：美化按钮样式 */
:deep(.el-button) {
  width: 120px;  /* 统一按钮宽度 */
}
</style>