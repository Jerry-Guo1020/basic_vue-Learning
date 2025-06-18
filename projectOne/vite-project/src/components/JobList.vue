<template>
    <div class="job-list-container">
      <h3 class="section-title">已发布岗位</h3>
      <ul class="job-list">
        <li v-for="(job, idx) in jobs" :key="idx" class="job-item">
          <div class="job-item-header">
              <div class="job-name">{{ job.name }}</div>
              <div class="job-salary">{{ job.salary }}</div>
          </div>
          <div class="job-meta">
              <span>地点: {{ job.location }}</span>
              <span>人数: {{ job.positions }}</span>
              <span v-if="job.isHot" class="tag hot">热门</span>
              <span v-if="job.isRecommended" class="tag recommended">推荐</span>
          </div>
          <div class="job-details">
              <p><strong>描述:</strong> {{ job.description }}</p>
              <p><strong>要求:</strong> {{ job.requirements }}</p>
              <p><strong>福利:</strong> {{ job.benefits }}</p>
              <p><strong>联系:</strong> {{ job.contact }}</p>
              <p v-if="job.endTime"><strong>结束日期:</strong> {{ job.endTime }}</p>
          </div>
          <!-- 可以添加编辑/删除按钮 -->
        </li>
        <li v-if="jobs.length === 0" class="no-jobs">暂无已发布岗位</li>
      </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 定义 props，接收父组件传递的 jobs 列表
const props = defineProps({
  jobs: {
    type: Array,
    default: () => []
  }
});

// jobs 数据直接通过 props 使用，无需本地 ref
</script>

<style scoped>
.job-list-container {
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

.job-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.job-item {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-left: 5px solid #667eea; /* 左侧强调线 */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.job-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.job-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #eee;
}

.job-name {
  font-weight: bold;
  color: #333;
  font-size: 1.3em;
}

.job-salary {
  font-weight: bold;
  color: #e53e3e;
  font-size: 1.2em;
}

.job-meta {
  margin-bottom: 15px;
  color: #777;
  font-size: 0.9em;
  display: flex;
  gap: 15px;
  align-items: center;
}

.tag {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: bold;
  color: white;
}

.tag.hot {
  background-color: #f6ad55;
}

.tag.recommended {
  background-color: #4299e1;
}

.job-details p {
  margin-bottom: 8px;
  color: #555;
  line-height: 1.6;
  font-size: 0.95em;
}

.job-details p strong {
  color: #333;
  margin-right: 5px;
}

.no-jobs {
    text-align: center;
    color: #777;
    font-style: italic;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    border: 1px dashed #ccc;
}
</style>