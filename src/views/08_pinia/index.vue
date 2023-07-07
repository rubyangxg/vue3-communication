<template>
  <div class="box">
    <div class="container">
      <Child1 />
      <Child2></Child2>
    </div>
  </div>
</template>

<script setup lang="ts">
// vuex:集中式状态管理器，可以实现任意组件间值的传递
// 核心概念：state/ mutations/actions/getters/modules
//pinia:也是集中式状态管理容器，可以实现任意组件间的通信
// 核心概念：state/actios/getters
import Child1 from "./Child1.vue";
import Child2 from "./Child.vue";
</script>

<style scoped>
.box {
  width: 600px;
  height: 400px;
  background: skyblue;
}
.container {
  display: flex;
}
</style>
