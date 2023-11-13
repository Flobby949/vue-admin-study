<template>
  <div class="author-container">
    <div class="header">
      <my-avatar
        image="https://public-cdn-oss.mosoteach.cn/avatar/2019/4C/3117093603a057f6bf0e5dd65aa5b8ff.jpg?v=1676265419"
        height="60px"
        width="60px"
      >
      </my-avatar>
      <div class="header-desc">
        <h3>Flobby</h3>
        <span>计算机与软件学院</span>
      </div>
    </div>
    <div class="info">Web 全栈开发工程师</div>
  </div>
</template>

<script setup>
import MyAvatar from '@/components/MyAvatar/index.vue'
import {} from 'vue'
</script>

<style lang="scss" scoped>
.author-container {
  .header {
    display: flex;
    .header-desc {
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        font-size: 14px;
      }
    }
  }
  .info {
    margin-top: 16px;
    line-height: 22px;
    font-size: 14px;
    text-indent: 26px;
  }
}
</style>
