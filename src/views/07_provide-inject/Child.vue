<template>
  <div class="child">
    <h1>我是子组件1</h1>
    <Child></Child>
    <h1>{{ car }}</h1>
  </div>
</template>

<script setup lang="ts">
import Child from "./GrandChild.vue";
import { inject } from "vue";
let car = inject("TOKEN");
</script>

<style scoped>
.child {
  width: 300px;
  height: 400px;
  background: yellowgreen;
}
</style>
