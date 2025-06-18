<template>
    <div class="add-job-container">
      <h3 class="section-title">添加新岗位</h3>
      <form @submit.prevent="submitJob" class="job-form">
        <div class="form-group">
          <label for="jobName">岗位名称</label>
          <input type="text" id="jobName" v-model="job.name" required placeholder="请输入岗位名称" />
        </div>
        <div class="form-group">
          <label for="jobDescription">岗位描述</label>
          <textarea id="jobDescription" v-model="job.description" required placeholder="请输入岗位描述"></textarea>
        </div>
        <div class="form-group">
          <label for="jobRequirements">岗位要求</label>
          <textarea id="jobRequirements" v-model="job.requirements" required placeholder="请输入岗位要求"></textarea>
        </div>
        <div class="form-group">
          <label for="jobBenefits">岗位福利</label>
          <textarea id="jobBenefits" v-model="job.benefits" required placeholder="请输入岗位福利"></textarea>
        </div>
        <!-- 简化处理，实际应用中 typeId 可能需要下拉选择 -->
        <div class="form-group">
          <label for="jobTypeId">岗位类型ID</label>
          <input type="number" id="jobTypeId" v-model.number="job.typeId" required placeholder="请输入岗位类型ID" />
        </div>
        <div class="form-group">
          <label for="jobPositions">招募人数</label>
          <input type="number" id="jobPositions" v-model.number="job.positions" required placeholder="请输入招募人数" min="1" />
        </div>
        <div class="form-group">
          <label for="jobLocation">工作地点</label>
          <input type="text" id="jobLocation" v-model="job.location" required placeholder="请输入工作地点" />
        </div>
        <div class="form-group">
          <label for="jobContact">联系方式</label>
          <input type="text" id="jobContact" v-model="job.contact" required placeholder="请输入联系方式" />
        </div>
        <div class="form-group">
          <label for="jobSalary">薪资范围</label>
          <input type="text" id="jobSalary" v-model="job.salary" required placeholder="请输入薪资范围 (如: 10k-15k)" />
        </div>
        <div class="form-group checkbox-group">
          <input type="checkbox" id="isHot" v-model="job.isHot" />
          <label for="isHot">热门职位</label>
        </div>
        <div class="form-group checkbox-group">
          <input type="checkbox" id="isRecommended" v-model="job.isRecommended" />
          <label for="isRecommended">推荐职位</label>
        </div>
         <div class="form-group">
          <label for="endTime">结束日期 (可选)</label>
          <input type="date" id="endTime" v-model="job.endTime" />
        </div>

        <button type="submit" class="submit-button">添加岗位</button>
      </form>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// 定义 props，接收父组件传递的初始 job 数据
const props = defineProps({
  initialJob: {
    type: Object,
    default: () => ({
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
    })
  }
});

// 使用 ref 创建一个本地的 job 状态，并初始化为 props.initialJob 的副本
const job = ref({ ...props.initialJob });

// 监听 props.initialJob 的变化，并在变化时更新本地 job 状态
// 这确保了父组件重置 initialJob 时，子组件的表单也会重置
watch(() => props.initialJob, (newVal) => {
  job.value = { ...newVal };
}, { deep: true });


// 定义 emit 事件，用于向父组件发送数据
const emit = defineEmits(['add-job']);

function submitJob() {
  // 简单的验证
  if (job.value.name && job.value.description && job.value.requirements && job.value.benefits && job.value.typeId !== null && job.value.positions !== null && job.value.location && job.value.contact && job.value.salary) {
    // 触发 add-job 事件，将当前 job 数据传递给父组件
    emit('add-job', { ...job.value }); // 传递副本

    // 父组件接收到事件后会处理添加逻辑并重置 initialJob，watch 会触发本地 job 的重置
    // job.value = { ...props.initialJob }; // 移除这里的本地重置，依赖 watch
  } else {
    alert('请填写所有必填字段！'); // 简单的提示
  }
}
</script>

<style scoped>
.add-job-container {
    /* 将卡片样式应用到这个容器 */
    background-color: #ffffff; /* 白色背景 */
    padding: 30px; /* 内边距 */
    border-radius: 8px; /* 圆角 */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08); /* 阴影 */
    border: 1px solid #e0e0e0; /* 增加一个浅边框 */
}

.section-title {
    margin-top: 0;
    margin-bottom: 25px;
    color: #333;
    font-size: 1.5em;
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
}

.job-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
  font-size: 1em;
}

.job-form input[type="text"],
.job-form input[type="number"],
.job-form input[type="date"],
.job-form textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  font-size: 1em;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.job-form input[type="text"]:focus,
.job-form input[type="number"]:focus,
.job-form input[type="date"]:focus,
.job-form textarea:focus {
  border-color: #667eea;
  outline: none;
  box-shadow: 0 0 8px rgba(102, 126, 234, 0.4);
}

.job-form textarea {
    resize: vertical;
    min-height: 100px;
}

.checkbox-group {
    display: flex;
    align-items: center;
    gap: 8px;
}

.checkbox-group input[type="checkbox"] {
    width: auto;
    margin: 0;
}

.checkbox-group label {
    margin-bottom: 0;
    font-weight: normal;
    color: #333;
}

.submit-button {
  width: auto;
  padding: 12px 25px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.1s ease;
  align-self: flex-start;
  margin-top: 10px;
  box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
}

.submit-button:hover {
  background-color: #218838;
  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
}

.submit-button:active {
    transform: scale(0.98);
}
</style>