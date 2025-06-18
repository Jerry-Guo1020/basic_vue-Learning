<template>
  <div class="login-wrapper">
    <div class="login-container">
      <h2 class="login-title">欢迎登录</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">账号</label>
          <input type="text" id="username" v-model="username" required placeholder="请输入账号" />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="password" required placeholder="请输入密码" />
        </div>
        <button type="submit" class="login-button">登录</button>
        <div v-if="error" class="error-message">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

function handleLogin() {
// 简单的模拟登录逻辑
if (username.value === 'admin' && password.value === '123456') {
  error.value = '' // 清除错误信息
  router.push('/home')
} else {
  error.value = '账号或密码错误'
}
}
</script>

<style scoped>
.login-wrapper {
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh; /* 确保wrapper至少占满视口高度 */
width: 100%; /* 确保wrapper撑满宽度 */
/* 使用与Home页相似的渐变背景 */
background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
padding: 20px;
box-sizing: border-box;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.login-container {
background-color: #ffffff;
padding: 40px 50px;
border-radius: 12px;
box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); /* 更明显的阴影 */
width: 100%;
max-width: 400px;
text-align: center;
transition: transform 0.3s ease; /* 添加过渡效果 */
}

.login-container:hover {
  transform: translateY(-5px); /* 悬停时稍微上移 */
}

.login-title {
margin-bottom: 30px;
color: #333;
font-size: 2.2em;
font-weight: 600;
position: relative; /* 用于添加下划线伪元素 */
padding-bottom: 10px;
}

.login-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #667eea; /* 与按钮颜色一致 */
  border-radius: 2px;
}

.login-form {
display: flex;
flex-direction: column;
gap: 20px; /* 增加表单项间距 */
}

.form-group {
text-align: left; /* 标签和输入框左对齐 */
}

.form-group label {
display: block; /* 标签独占一行 */
margin-bottom: 8px;
font-weight: bold;
color: #555;
font-size: 1em;
}

.login-form input[type="text"],
.login-form input[type="password"] {
width: 100%;
padding: 12px 15px; /* 增加内边距 */
border: 1px solid #dcdcdc; /* 浅灰色边框 */
border-radius: 6px; /* 输入框圆角 */
font-size: 1em;
box-sizing: border-box;
transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.login-form input[type="text"]:focus,
.login-form input[type="password"]:focus {
border-color: #667eea; /* 聚焦时边框颜色 */
outline: none;
box-shadow: 0 0 8px rgba(102, 126, 234, 0.4); /* 聚焦时阴影 */
}

.login-button {
width: 100%;
padding: 12px 20px;
background-color: #667eea; /* 按钮背景色 */
color: white;
border: none;
border-radius: 6px;
cursor: pointer;
font-size: 1.1em;
font-weight: 600;
transition: background-color 0.3s ease, transform 0.1s ease;
margin-top: 10px;
box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3); /* 按钮阴影 */
}

.login-button:hover {
background-color: #5a67d8; /* 悬停时颜色变深 */
box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.login-button:active {
transform: scale(0.98);
}

.error-message {
margin-top: 15px;
color: #e53e3e; /* 使用更柔和的红色 */
font-weight: bold;
font-size: 0.9em;
}
</style>