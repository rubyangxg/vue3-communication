import { ref } from "vue";
import { defineStore } from "pinia";
const useTodoStore = defineStore("todo", () => {
  const todos = ref([
    { id: 1, title: "吃饭" },
    { id: 2, title: "睡觉" },
    { id: 3, title: "学习" },
  ]);
  return {
    todos,
    updateTodo() {
      todos.value.push({ id: 4, title: "哈哈" });
    },
  };
});
export default useTodoStore;
