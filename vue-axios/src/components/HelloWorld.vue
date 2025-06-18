<template>
<div class="hello">ajsfkljil</div>
<input placeholder="请输入内容~">
<button @click="update(item._id)" >增加</button>
<button @click="del">删除</button>
</template>

<script setup>
import {ref} from "vue";
import axios from 'axios';
getList();


const value = ref('');

const list = ref([
  // {value: "吃饭", isCompleted: true},
  // {value: "睡觉", isCompleted: false},
  // {value: "打豆豆", isCompleted: false},
]);

// function add() {
//   list.value.push({
//       value: value.value,
//       isCompleted: false,
//   })
// }


// 获取接口
async function getList() {
  const res = await axios({
    url:"https://q6zv39.laf.run/get_list",
    method:"GET"
  })

  list.value = res.data.list 
  console.log(res);
  
}

// 添加接口
async function add() {
  await axios({
    url:"https://q6zv39.laf.run/add_todo",
    method:"POST",
    data:{
      value: value.value,
      isCompleted: false,
    },
  })

  getList()
}

// 修改的接口
async function update(id) {
  await axios({
    url:"https://q6zv39.laf.run/update_todo",
    method:"POST",
    data:{
      id,
    },
  })

  getList()
}




// 删除的接口
async function del(id) {
  await axios({
    url:"https://q6zv39.laf.run/del_todo",
    method:"POST",
    data: {
      id: id,
    },
  })
}



</script>

<style lang="scss">

</style>