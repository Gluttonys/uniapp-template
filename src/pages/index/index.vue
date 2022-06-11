<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"/>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text>{{ commonData.userInfo.name }}</text>
    </view>
    <Demo/>
  </view>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import useCommonData from "../../store/common";
import Demo from "../../components/Demo.vue";

const commonData = useCommonData()

onMounted(() => {
  setTimeout(() => {
    // commonData.userInfo.name = "神仙"
    commonData.setUserInfo({
      name: '大佬'
    })
  }, 2000)
})

const title = ref<string>('Hello')
</script>

<style lang="less" scoped>

.content {
  width            : 200px;
  height           : 400px;
  background-color : red;

  .title {
    color : #f2f206;
  }
}

</style>
