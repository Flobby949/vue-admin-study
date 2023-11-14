<template>
  <div>
    <div class="logo-container">
      <el-avatar :size="logoWidth" shape="square" src="https://i2.100024.xyz/2023/11/12/10j9cux.webp" />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">super-admin</h1>
    </div>
    <span style="color: #fff; margin-left: 20px">{{ $filters.dateFilter(now) }}</span>

    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import SidebarMenu from './SidebarMenu'
const logoWidth = 44
const now = new Date().getTime()
</script>

<style lang="scss" scoped>
@import '@/styles/sidebar.scss';
.logo-container {
  height: v-bind(logoWidth) + 'px';
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
