<template>
  <div class="register-container">
    <el-card class="register-card">
      <strong><h1 class="register-title">用户注册</h1></strong>
      <el-form :model="registerForm" :rules="rules" ref="registerFormRef">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item prop="mail" label="邮箱地址">
          <el-input 
            v-model="registerForm.mail" 
            type="mail" 
            placeholder="请输入邮箱地址">
          </el-input>
        </el-form-item>

        <el-form-item prop="password" label="密码">
          <el-input 
            v-model="registerForm.password" 
            type="password" 
            placeholder="请输入密码">
          </el-input>
        </el-form-item>
        
        <el-form-item prop="confirmPassword" label="确认密码">
          <el-input 
            v-model="registerForm.confirmPassword" 
            type="password" 
            placeholder="请再次输入密码">
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleRegister">注册</el-button>
          <el-button @click="$router.push('/login')">返回登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const registerFormRef = ref(null)

const registerForm = reactive({
  username: '',
  password: '',
  confirmPassword: ''
})

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== registerForm.password) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, validator: validatePass2, trigger: 'blur' }
  ],
  mail: [
    { required: true, message: '请输入邮箱地址',  },
    { min: 6,  message: '长度在 6 以上字符', trigger: 'blur' }
  ]
}

const handleRegister = () => {
  registerFormRef.value.validate((valid) => {
    if (valid) {
      // 这里添加注册逻辑
      ElMessage.success('注册成功！')
      router.push('/login')
    }
  })
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-card {
  width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style> 