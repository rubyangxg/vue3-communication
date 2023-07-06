<template>
  <div class="child1">
    <h3>我是子组件1:曹植</h3>
    兄弟送完的礼物：{{gift}}
  </div>
</template>

<script setup lang="ts">
import $bus from '../../bus'
import { onMounted, ref } from "vue";
let gift = ref('')
onMounted(() => {
  $bus.on('car', (p) => {
    gift.value = p.car
  })
})
</script>

<style scoped>
.child1 {
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>