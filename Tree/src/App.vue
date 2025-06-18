<template>
  <view class="container">
    <view class="image-container">
      <image src="/static/tree-character.png" class="character-image"></image>
    </view>
    <view class="title">大学生心灵树洞</view>
    <view class="subtitle">不必强撑坚强<br>「心灵树洞」做你无声的倾听者</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffe0b2;
}

.image-container {
  margin-top: 20vh;
}

.character-image {
  width: 150px;
  height: auto;
}

.title {
  font-size: 24px;
  color: #ff9800;
  margin-top: 20px;
}

.subtitle {
  font-size: 14px;
  color: #ff9800;
  text-align: center;
  margin-top: 10px;
}
</style>