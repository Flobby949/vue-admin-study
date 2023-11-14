import { ref } from 'vue'
import Sortable from 'sortablejs'
import { ElMessage } from 'element-plus'
import { articleSort } from '@/api/article'
// 排序相关
export const tableRef = ref(null)

/**
 * 初始化排序
 */
export const initSortable = (tableData, cb) => {
  // 设置拖拽效果
  const el = tableRef.value.$el.querySelectorAll('.el-table__body > tbody')[0]
  // 1. 要拖拽的元素
  // 2. 配置对象
  Sortable.create(el, {
    // 拖拽时类名
    ghostClass: 'sortable-ghost',
    // 拖拽结束的回调方法
    async onEnd(event) {
      const { newIndex, oldIndex } = event
      console.log(tableData)
      // 修改数据
      alert(tableData[oldIndex].ranking + ',' + tableData[newIndex].ranking)
      const res = await articleSort({
        initRanking: tableData[oldIndex].ranking,
        finalRanking: tableData[newIndex].ranking
      })
      if (res.data.data === undefined) {
        ElMessage.error({
          message: `拖拽失败,${newIndex},${oldIndex}`,
          type: 'error'
        })
        return
      }
      // 修改数据
      ElMessage.success({
        message: `拖拽完毕,${newIndex},${oldIndex}`,
        type: 'success'
      })
      // 直接重新获取数据无法刷新 table！！
      // tableData = []
      // 重新获取数据
      cb && cb()
    }
  })
}
