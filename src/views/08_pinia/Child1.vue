<template>
  <div class="child1">{{ infoStore.count }}</div>
  <button @click="modify">点击我修改仓库的数据</button>
</template>

<script setup lang="ts">
import useInfoStore from "../../store/modules/info";
let infoStore = useInfoStore();
let modify = () => {
  // infoStore.count++;  /可以直接修改
  infoStore.udateNum(); // 可以通过方法中action进行修改
};
</script>

<style scoped>
.child1 {
  width: 200px;
  height: 200px;
  background: hotpink;
}
</style>
