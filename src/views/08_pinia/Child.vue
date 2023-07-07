<template>
  <div class="child">{{ infoStore.count }}</div>
  <h1 @click="updateTodo">{{ todoStore.todos }}</h1>
</template>

<script setup lang="ts">
import useInfoStore from "../../store/modules/info.ts";
import useTodoStore from "@/store/modules/todo";
let infoStore = useInfoStore();
let todoStore = useTodoStore();
let updateTodo = () => {
  todoStore.updateTodo();
};
</script>
<style scoped>
.child {
  width: 200px;
  height: 200px;
  background: yellowgreen;
}
</style>
