<template>
    <!-- introduction and image -->
    <el-container>
        <el-aside class="lab_introduction">
          <h2 class="introduction_title" style="color: var(--text-color)">{{ $t('messages.introductionTitle') }}</h2>
          <p class="introduction_content" style="color: var(--intro-color)">{{ $t('messages.introductionContent') }}</p>
        </el-aside>
        <el-main class="leader_introduction">
          <img class="leader_image" src="@/assets/manager.png">
          <h3 style="text-align: center;color: var(--text-color)">{{ $t('messages.imageIntrodunction') }}</h3>
          <el-row :gutter="20">
            <el-col :span="7"></el-col>
            <el-col :span="7">
              <a href="https://github.com/huimtlab" target="_blank">
                <svg height="32" fill="var(--color-primary)" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default contact-icon">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </el-col>
            <el-col :span="1">
              <a href="mailto:?to=liuy%40etech-inc.com">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-mail contact-icon" width="24" height="24" viewBox="0 0 416 288" fill="var(--color-primary)">
                  <path d="m0 16v256 16h16 384 16v-16-256-16h-16-384-16zm347 16-139 92.5-139-92.5zm-148 125.5 9 5.5 9-5.5 167-111.5v210h-352v-210z"></path>
                </svg>
              </a>
            </el-col>
          </el-row>
        </el-main>
    </el-container>
    <!-- projects -->
    <el-container style="margin-top: 40px;">
    <el-header style="padding: 0;">
        <span style="text-align: left;color: var(--text-color);font-size: 30px;font-weight: bold;">{{ $t('messages.projects') }} </span>
        <a href="https://github.com/orgs/huimtlab/repositories" target="_blank"><span style="text-align: left;padding-left: 20px;color: var(--little-color);font-size: 20px;">{{ $t('projects.viewAll') }} </span></a>
    </el-header>
    <el-main style="display: flex;flex-wrap: wrap;align-items: stretch;gap: 1rem 0.5rem">
        <Project :title="t('projects.title1')" :short="t('projects.secondTitle1')" :introduction="t('projects.introduction1')"></Project>
    </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import Project from '@/components/project.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

</script>

<style scoped>
.lab_introduction{
  flex:0 1 55%;
  padding-right: 80px;
}
.introduction_title{
  font-size: 42px;
  margin-top: 20%;
}
.introduction_content{
  font-size: 20px;
}
.leader_introduction{
  flex:0 1 45%
}
.leader_image{
  width: 100%;
  object-fit: cover;
  padding-top: 60px;
}
.contact-icon{
  width: 25px;
  height: 25px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
h2 p {
  color: var(--text-color)
}
</style>