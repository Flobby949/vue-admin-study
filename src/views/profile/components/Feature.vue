<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item v-for="item in list" :key="item.id" :title="item.title" :name="item.id">
      <div v-html="item.content"></div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
import { ref } from 'vue'
import projectList from '@/constant/project.json'
const list = projectList.projectList
const activeName = ref(0)
</script>

<style lang="scss" scoped>
::v-deep(.el-collapse-item__header) {
  font-weight: bold;
}

.el-collapse-item {
  ::v-deep(a) {
    color: #2d62f7;
    margin: 0 4px;
  }
}
</style>
