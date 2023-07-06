<template>
  <div class="son">
    <h3>我是子组件:曹植{{ money }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 组件内部的数据是对外关闭的
// 如果想让外部访问需要通过defineExpose方法对外暴露
let money = ref(100);
let fly = () => {
  console.log("飞飞");
};
defineExpose({ money, fly });
</script>

<style scoped>
.son {
  width: 300px;
  height: 200px;
  background: cyan;
}
</style>
