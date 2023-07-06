<template>
  <div>
    <h1>事件</h1>
<!--    原生dom事件-->
    <pre @click="handle">
      大江东去浪淘尽，千古风流人物
    </pre>
    <hr>
<!--    vue2框架中：这种写法属于自定义事件，可以通过.native修饰符变为原生事件
        vue3中：这种写法其实为原生事件
         vue3:原生dom事件不管放在标签身上还是组件身上都是原生事件
-->
    <Event1 @click="handle2"></Event1>
    <hr>
    <Event2 @xxx="handle3"></Event2>
  </div>
</template>

<script setup lang="ts">
import Event1 from "@/views/02_custom-event/Event1.vue";
import Event2 from "@/views/02_custom-event/Event2.vue";
let handle = () => {
  alert(111 )
}
let handle2 = () => {
  console.log(12121);
}
// 事件回调
let handle3 = (a) => {
  console.log(a);
}

</script>

<style scoped>
</style>