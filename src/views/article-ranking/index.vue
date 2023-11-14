<template>
  <div class="article-ranking-container">
    <el-card class="header">
      <div class="dynamic-box">
        <span class="title">{{ $t('msg.article.dynamicTitle') }}</span>
        <el-checkbox-group v-model="selectDynamicLabel">
          <el-checkbox v-for="(item, index) in dynamicData" :label="item.label" :key="index"
            >{{ item.label }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>
    <el-card>
      <el-table ref="tableRef" :data="tableData" border>
        <el-table-column v-for="(item, index) in tableColumns" :key="index" :prop="item.prop" :label="item.label">
          <template #default="{ row }" v-if="item.prop === 'publicDate'">
            {{ $filters.relativeTime(row.publicDate) }}
          </template>
          <template #default="{ row }" v-else-if="item.prop === 'action'">
            <el-button type="primary" size="small" @click="onShowClick(row)">{{ $t('msg.article.show') }}</el-button>
            <el-button type="danger" size="small" @click="onRemoveClick(row)">{{ $t('msg.article.remove') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import articleList from '@/constant/article.json'
import { dynamicData, selectDynamicLabel, tableColumns } from './dynamic'
const tableData = articleList.list
console.log(tableData)
</script>

<style lang="scss" scoped>
.article-ranking-container {
  padding: 40px;
  .header {
    margin-bottom: 20px;
    .dynamic-box {
      display: flex;
      align-items: center;
      .title {
        margin-right: 20px;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  ::v-deep(.el-table__row) {
    cursor: pointer;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
