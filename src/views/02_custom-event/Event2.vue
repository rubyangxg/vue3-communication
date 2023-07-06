<template>
  <div class="child">
    <p>我是子组件2</p>
  <button @click="handle">点击我出发自定义事件</button>
  </div>
</template>

<script setup lang="ts">
let emits =  defineEmits(['xxx'])
const handle = () => {
  emits('xxx', 121212)
}
</script>

<style scoped>
.child {
  width: 400px;
  height: 200px;
  background: pink;
}
</style>