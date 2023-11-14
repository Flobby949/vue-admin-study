<template>
  <div class="container">
    <el-card class="header">
      <div>
        <!-- 页面 -->
        <el-button type="primary" @click="onImportExcelClick">{{ $t('msg.excel.importExcel') }}</el-button>
        <el-button type="success" @click="onToExcelClick">{{ $t('msg.excel.exportExcel') }}</el-button>
      </div>
    </el-card>
    <el-card>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column label="id" type="index" />
        <el-table-column prop="nickName" label="姓名"> </el-table-column>
        <el-table-column prop="phonenumber" label="手机号"> </el-table-column>
        <el-table-column label="头像" align="center">
          <template v-slot="{ row }">
            <el-avatar :src="row.avatar"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column prop="dept.deptName" label="部门"> </el-table-column>
        <el-table-column prop="createTime" label="创建时间"> </el-table-column>
        <el-table-column label="操作" fixed="right" width="260">
          <template #default>
            <el-button type="primary" size="small">查看</el-button>
            <el-button type="info" size="small">编辑</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination background layout="sizes, prev, pager, next, jumper" :total="total" />
    </el-card>
    <export-to-excel v-model="exportToExcelVisible"></export-to-excel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getUserManageList } from '@/api/system'
import ExportToExcel from './components/Export2Excel.vue'

// 脚本
import { useRouter } from 'vue-router'

const tableData = ref([])
const total = ref(0)
// 获取数据的方法
const getListData = async () => {
  const result = await getUserManageList({})
  // 注意接口返回的JSON数据解析
  tableData.value = result.rows
  total.value = result.rows.length
  console.log(total.value)
}
getListData()
const router = useRouter()
/**
 * excel 导入点击事件
 */
const onImportExcelClick = () => {
  router.push('/user/import')
}

/**
 * excel 导出点击事件
 */
const exportToExcelVisible = ref(false)
const onToExcelClick = () => {
  exportToExcelVisible.value = true
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 40px;
}
</style>
