<template>
  <div class="box">
    <h1>我是父亲曹操:{{ money }}</h1>
    <button @click="handle">找我的儿子曹植借10元钱</button>
    <hr />
    <Son ref="son"></Son>
    <hr />
    <Daughter></Daughter>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Son from "./Son.vue";
import Daughter from "./Daughter.vue";

// ref可以获取真实的dom，可以获取到子组件实例vc
// $parent: 可以在子组件内获取父组件的实例
let money = ref(1000);
let son = ref();
let handle = () => {
  money.value += 10;
  console.log(son.value);
  // 儿子的钱数减10
  son.value.money -= 10;
  son.value.fly();
};
defineExpose({ money });
</script>

<style scoped>
.box {
  width: 100vw;
  height: 500px;
  background: skyblue;
}
</style>
