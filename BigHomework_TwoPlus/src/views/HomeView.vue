<template>
  <el-container class="layout-container">
      <!--左侧菜单-->
      <el-aside width="200px">
          <div class="el-aside_logo"></div>
          <el-menu active-text-color="#ffd04b" background-color="#232323" text-color="#fff">
              <el-menu-item index="1">
                  <el-icon>
                      <Management />
                  </el-icon>
                  <span>文章分类</span>
              </el-menu-item>
              <el-sub-menu index="1">
                  <template #title>
                      <el-icon>
                          <UserFilled />
                      </el-icon>
                      <span>个人信息</span>
                  </template>
                  <el-menu-item index="2-1" @click="UserProfile">个人信息</el-menu-item>
                  <el-menu-item index="2-2">更换头像</el-menu-item>
                  <el-menu-item index="2-3">修改密码</el-menu-item>
              </el-sub-menu>
          </el-menu>
      </el-aside>
        <!--右侧主区域-->
    <el-container>
          <!--头部区域-->
          <el-header style="background-color: #B3C0D1; align-items:left;">
              <div>Jerry</div>
              <el-dropdown placement="bottom-end">
                  <span class="el-dropdown__box">
                      <el-avatar :src="avatar" />
                      <el-icon>
                          <CaretBottom />
                      </el-icon>
                  </span>
                  <template #dropdown>
                      <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item command="profile" :icon="User"@click="UserProfile">基本资料</el-dropdown-item>
                          <el-dropdown-item command="avatar" :icon="Crop">更换头像</el-dropdown-item>
                          <el-dropdown-item command="password" :icon="EditPen">重置密码</el-dropdown-item>
                          <el-dropdown-item command="logout" :icon="SwitchButton"@click="backLogin">退出登录</el-dropdown-item>
                      </el-dropdown-menu>
                  </template>
              </el-dropdown>
          </el-header>
   
          <!--中间区域-->
          <el-main>
              <router-view></router-view>
          </el-main>
          <el-footer>©2024 created by Jerry</el-footer>
      </el-container>
  </el-container>

    
 
</template>

<script setup>
import { CaretBottom, Crop, EditPen, Management, SwitchButton, User, UserFilled } from '@element-plus/icons-vue';
import avatar from '../assets/One.jpg'
import { useRouter } from 'vue-router'

const router = useRouter()

const backLogin = () => {
  console.log('退出登录')
  location.href = '/login'
}
 
const UserProfile = () => {
  router.push('/home/profile')
}
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;



  .el-aside {
      background-color:#232323;

      &_logo {
          height: 120px;
          background: url('../assets/One.jpg')no-repeat center / 80px auto;

          .el-menu {
              border-right: none;
          }
      }

      .el-header {
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .el-dropdown_box {
              display: flex;
              align-items: left;

              .el-icon {
                  color: #999;
                  margin-left: 10px;
              }

              &:active,
              &:focus {
                  outline: none;
              }
          }
      }

      .el-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #666;
      }
  }
}
</style>