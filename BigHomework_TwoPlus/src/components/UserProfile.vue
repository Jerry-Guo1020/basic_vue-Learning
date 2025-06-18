<template>
  <div class="profile-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <h3>个人信息</h3>
        </div>
      </template>
      
      <el-form :model="userInfo" label-width="100px">
        <el-form-item label="头像">
          <el-avatar :size="100" :src="userInfo.avatar">
            <img src="../assets/One.jpg"/>
          </el-avatar>
        </el-form-item>

        <el-form-item label="用户名">
          <el-input v-model="userInfo.username" disabled></el-input>
        </el-form-item>

        <el-form-item label="注册时间">
          <el-input v-model="userInfo.registerTime" disabled></el-input>
        </el-form-item>

        <el-form-item label="邮箱">
          <el-input v-model="userInfo.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>

        <el-form-item label="手机号码">
          <el-input v-model="userInfo.phone" placeholder="请输入手机号码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleUpdateProfile">保存修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

const userInfo = reactive({
  username: '哈哈哈',
  avatar: '',
  registerTime: '2024-01-01',
  email: '',
  phone: ''
})

const handleUpdateProfile = () => {
  // 这里添加更新个人信息的逻辑
  ElMessage.success('个人信息更新成功！')
}
</script>

<style scoped>
.profile-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  margin: 0;
  color: #303133;
}
</style> 