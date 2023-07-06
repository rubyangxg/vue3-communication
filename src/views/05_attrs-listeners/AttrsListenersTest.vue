<template>
  <div>
    <h1>useAttrs</h1>
    <el-button
      type="primary"
      size="small"
      @click="handle"
      :icon="Edit"
    ></el-button>
    <hr />
    <hint-button
      type="primary"
      size="small"
      :icon="Edit"
      title="编辑按钮"
      @click="handle2"
    ></hint-button>
  </div>
</template>

<script setup lang="ts">
import { Edit } from "@element-plus/icons-vue";
import HintButton from "./HintButton.vue";
// vue3提供一个useAttr的方法，可以获取组件身上的属性和事件
let handle = () => {};
let handle2 = () => {
  alert(222);
};
</script>

<style scoped></style>
