<template>
  <div>
    <div class="logo-container">
      <el-avatar size="44" shape="square" src="https://i2.100024.xyz/2023/11/12/10j9cux.webp" />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">super-admin</h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import SidebarMenu from './SidebarMenu'
</script>

<style lang="scss" scoped>
@import '@/styles/sidebar.scss';
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
