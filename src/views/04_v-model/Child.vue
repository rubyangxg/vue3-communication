<template>
  <div class="child">
    <button @click="handle">父子组件数据同步</button>
    <h1>钱数：{{ modelValue }}</h1>
  </div>
</template>

<script setup lang="ts">
let props = defineProps(["modelValue"]);
let $emit = defineEmits(["update:modelValue"]);
let handle = () => {
  $emit("update:modelValue", props.modelValue + 1000);
};
</script>

<style scoped>
.child {
  width: 600px;
  height: 300px;
  background: skyblue;
}
</style>
