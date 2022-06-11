<template>
  <p class="text">demo hello world</p>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";

const color = "#006ff4"

const style = {
  color: '#5f00ff'
}

onMounted(() => {
  console.log("hello world")
})
</script>

<style lang="less" scoped>
.text {
  color     : v-bind('color');
  font-size : 30px;
}
</style>
