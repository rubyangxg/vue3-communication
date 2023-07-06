<template>
  <div class="son">
    <h1>我是子组件</h1>
    {{ info }}
    <hr />
    {{ money }}
    <hr />
    {{ props.info }}
    <hr />
    {{ props.money }}
    <button @click="updateProps">修改props</button>
  </div>
</template>

<script setup lang="ts">
//需要使用到defineProps方法去接受父组件传递过来的数据
//defineProps是Vue3提供方法,不需要引入直接使用
let props = defineProps(["info", "money"]);
let updateProps = () => {
  // props.money = 20000   // props数据只读
};
</script>

<style scoped>
.son {
  width: 400px;
  height: 200px;
  background: hotpink;
}
</style>
