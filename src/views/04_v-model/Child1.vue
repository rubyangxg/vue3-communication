<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="child2">
    <h1>同时绑定多个v-model</h1>
    <hr />
    <button @click="handleNo">{{ pageNo }}</button>
    <button @click="handleSize">{{ pageSize }}</button>
  </div>
</template>

<script setup lang="ts">
let props = defineProps(["pageNo", "pageSize"]);
let emits = defineEmits(["update:pageNo", "update:pageSize"]);
let handleNo = () => {
  emits("update:pageNo", props.pageNo + 1);
};
let handleSize = () => {
  emits("update:pageSize", props.pageSize + 1);
};
</script>

<style scoped>
.child2 {
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>
