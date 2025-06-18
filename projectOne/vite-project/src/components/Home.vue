<template>
  <div class="home-wrapper">
    <div class="home-container">
      <h2 class="home-title">招聘岗位管理</h2>

      <nav class="home-nav">
        <router-link to="/home/add" active-class="active-link">添加岗位</router-link>
        <router-link to="/home/list" active-class="active-link">岗位列表</router-link>
      </nav>

      <div class="content-area">
        <!-- router-view 将根据当前路由显示 AddJob 或 JobList 组件 -->
        <router-view
          :initial-job="newJob"
          :jobs="jobs"
          @add-job="handleJobAdded"
        ></router-view>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 引入 useRouter 用于导航

// 初始化一个空对象用于新岗位数据
const newJob = ref({
  name: '',
  description: '',
  requirements: '',
  benefits: '',
  typeId: null, // 使用 null 或 0 作为初始值
  positions: null, // 使用 null 或 0 作为初始值
  location: '',
  contact: '',
  salary: '',
  isHot: false,
  isRecommended: false,
  endTime: null // 使用 null 作为初始值
});

const jobs = ref([]); // 存储已发布的岗位列表

const router = useRouter(); // 获取 router 实例

// 处理 AddJob 组件触发的 add-job 事件
function handleJobAdded(jobData) {
  // 将接收到的岗位数据添加到列表中
  jobs.value.push({ ...jobData }); // 使用展开运算符复制对象

  // 重置 newJob 数据，以便 AddJob 组件的表单清空
  newJob.value = {
    name: '',
    description: '',
    requirements: '',
    benefits: '',
    typeId: null,
    positions: null,
    location: '',
    contact: '',
    salary: '',
    isHot: false,
    isRecommended: false,
    endTime: null
  };

  // 添加成功后导航到岗位列表页面
  router.push('/home/list');
}

// 可以在这里添加获取初始岗位列表的逻辑 (例如从 API)
// onMounted(() => { fetchJobs(); });

</script>

<style scoped>
.home-wrapper {
  display: flex;
  justify-content: center;
  /* align-items: flex-start; /* 顶部对齐 */
  min-height: 100vh; /* 确保wrapper至少占满视口高度 */
  width: 100%; /* 确保wrapper撑满宽度 */
  /* 背景现在由body负责，这里移除 */
  /* background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%); */
  padding: 30px;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.home-container {
  background-color: #ffffff; /* 白色背景卡片 */
  padding: 40px;
  border-radius: 12px; /* 与登录页一致的圆角 */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); /* 与登录页一致的阴影 */
  width: 100%;
  max-width: 1200px; /* 限制内容区域最大宽度 */
}

.home-title {
  text-align: center;
  margin-bottom: 30px; /* 调整标题底部间距 */
  color: #333; /* 标题颜色与登录页一致 */
  font-size: 2.5em;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
}

.home-title::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: #667eea; /* 与登录页标题下划线颜色一致 */
    border-radius: 2px;
}

.home-nav {
    margin-bottom: 30px; /* 导航底部间距 */
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
}

.home-nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #555;
    font-size: 1.1em;
    font-weight: 600;
    padding-bottom: 5px;
    transition: color 0.3s ease, border-bottom-color 0.3s ease;
}

.home-nav a:hover {
    color: #007bff;
    border-bottom: 2px solid #007bff;
}

.home-nav a.active-link {
    color: #007bff;
    border-bottom: 2px solid #007bff;
}

.content-area {
    /* 这个区域将由 router-view 填充 */
}


</style>