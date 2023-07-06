<template>
  <div :title="$attrs.title">
    <el-button :="$attrs"></el-button>
  </div>
</template>
<script setup lang="ts">
import { useAttrs } from "vue";

let $attrs = useAttrs();
console.log($attrs);
</script>
<style scope></style>
