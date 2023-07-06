<template>
  <div class="dau">
    <h1>我是闺女曹杰{{ money }}</h1>
    <button @click="handle($parent)">点击我爸爸给我1000</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let money = ref(666);
let handle = (parent) => {
  money.value += 1000;
  parent.money -= 1000;
};
</script>
<style scoped>
.dau {
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>
