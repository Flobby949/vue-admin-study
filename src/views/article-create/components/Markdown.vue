<template>
  <div class="markdown-container">
    <!-- 渲染区 -->
    <div id="markdown-box"></div>
    <div class="bottom">
      <el-button type="primary" @click="onSubmitClick">提交</el-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import MkEditor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'

// Editor实例
let mkEditor
// 处理离开页面切换语言导致 dom 无法被获取
let el
onMounted(() => {
  el = document.querySelector('#markdown-box')
  initEditor()
})

const initEditor = () => {
  mkEditor = new MkEditor({
    el,
    height: '500px',
    previewStyle: 'vertical'
  })
  mkEditor.getMarkdown()
}

const onSubmitClick = () => {
  alert(mkEditor.getHTML())
}
</script>

<style lang="scss" scoped>
.markdown-container {
  .bottom {
    margin-top: 40px;
    text-align: right;
  }
}
</style>
