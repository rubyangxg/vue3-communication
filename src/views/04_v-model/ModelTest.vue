<template>
  <h1>v-model {{ money }}</h1>
  <input type="text" v-model="info" />
  <hr />
  <div>
    <!-- <Child :modelValue="money" @update:modelValue="handle"></Child>-->
    <Child v-model="money"></Child>
    <Child1 v-model:pageNo="pageNo" v-model:pageSize="pageSize" />
  </div>
  {{ info }}
</template>
<script setup lang="ts">
// v-model收集表单数据，数据双向绑定
// v-model也可以实现组件间的通信，实现父子组件之间数据同步的业务
import { ref } from "vue";
import Child from "./Child.vue";
import Child1 from "./Child1.vue";
let info = ref("");
let money = ref(10000);
// let handle = p => {
//   money.value = p
// }
// 父组件的数据
let pageNo = ref(1);
let pageSize = ref(3);
</script>
