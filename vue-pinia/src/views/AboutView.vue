<template>
<div class="title">
  this is a count text!
</div>

<div class="content">
  <div class="count1">每次递增1的结果是: {{ count.count }}</div>
  <div class="count2">每次递增两倍的结果是: {{ count.doubleCount }}</div>
  <button @click="count.increment()">点击按钮</button>
</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const count = useCounterStore();
</script>

<style>

</style>