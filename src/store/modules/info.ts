import { defineStore } from "pinia";
// defineStore会返回一个方法，这个方法的作用就是让组件获取到仓库的数据

const useInfoStore = defineStore("info", {
  // 存储数据： state
  state: () => {
    return {
      count: 99,
    };
  },
  actions: {
    udateNum() {
      this.count++;
    },
  },
  getters: {},
});
export default useInfoStore;
