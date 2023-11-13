<template>
  <div class="user-container">
    <my-avatar :image="$store.getters.userInfo.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
      <div>Hello</div>
      {{ $store.getters.userInfo.title }}
    </my-avatar>
    <!-- 简介 -->
    <div class="project-bio">
      <div class="project-bio-section">
        <div class="project-bio-section-header">
          <svg-icon icon="introduce" />
          <span>{{ $t('msg.profile.projectIntroduction') }}</span>
        </div>
        <div class="project-bio-section-body">
          <div class="text-muted">
            {{ $t('msg.profile.muted') }}
          </div>
        </div>
      </div>
    </div>

    <!-- 项目功能区域 -->
    <div class="project-bio-section">
      <div class="project-bio-section-header"><svg-icon icon="reward" /><span>项目功能</span></div>
      <div class="project-bio-section-body">
        <div class="progress-item" v-for="item in list" :key="item.id">
          <div>{{ item.title }}</div>
          <el-progress :percentage="item.percentage" status="success" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyAvatar from '@/components/MyAvatar'
import projectList from '@/constant/project.json'
const list = projectList.projectList
console.log(list)
</script>

<style lang="scss" scoped>
.user-container {
  .project-bio {
    margin-top: 20px;
    color: #606266;
    span {
      padding-left: 4px;
    }

    .project-bio-section {
      margin-bottom: 36px;
      .project-bio-section-header {
        border-bottom: 1px solid #dfe6ec;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .project-bio-section-body {
        .progress-item {
          margin-top: 10px;
          div {
            font-size: 14px;
            margin-bottom: 2px;
          }
        }
      }
    }
  }
}
</style>
