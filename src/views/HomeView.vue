<template>
  <el-container class="whole-container">
    <!-- header -->
    <el-header style="padding:0 24%">
      <el-menu
        :default-active="activeIndex"
        class="whole-header"
        style="background: var(--bg)"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item class="header-logo" index="0" style="padding: 0;color: var(--text-color);"><span style="font-size: 25px;">Huimtlabs</span></el-menu-item>
        <div class="flex-grow" />
        <el-menu-item @click="onClickNews" index="1" style="color: var(--text-color);font-size: 20px;">{{ $t('messages.news') }}</el-menu-item>
        <el-menu-item index="2-1" style="color: var(--text-color);font-size: 20px;">简体中文</el-menu-item>
        
        <el-menu-item index="2-2" style="color: var(--text-color);font-size: 20px;">English</el-menu-item>
        <el-menu-item index="3">
          <el-switch v-model="lightOn" @click="onClickLight" inline-prompt :active-icon="Sunny" :inactive-icon="Close" size="large"/> 
        </el-menu-item>
      </el-menu>
    </el-header>
    <!-- main -->
    <el-main style="padding: 80px 24%;">
      <Introduction v-if="activeIndex === '0'"> </Introduction>
      <News v-if="activeIndex === '1'" ref="newsRef"> </News>
    </el-main>
    <el-footer style="background: var(--footer-bg);height: 100px;">
      <div class="footer-content" style="font-size:20px;">
        © 2024 · 
        <a :href="url" style="text-decoration: none;color: var(--color-primary)">HuimtLab</a>
      </div>
    </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import Introduction from '@/components/introduction.vue';
import News from '@/components/news.vue';
import { Sunny, Close } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n';

const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
  if(key in [1, 2])
    activeIndex.value = key;
  else if(key === '2-1')
    changeZh();
  else if(key === '2-2')
    changeEn();
}
const lightOn = ref(true);
const bgc = "var(--bg)"
const style = getComputedStyle(document.documentElement);
const backgroundColor = style.getPropertyValue('--bg');

// url
var hostname = window.location.protocol + '//' + window.location.hostname;
var port = window.location.port;
var domainWithPort = port ? hostname + ':' + port : hostname;
const url = ref(domainWithPort);

function onClickLight(){
  if(lightOn.value === true){
    // 开灯
    console.log('开灯')
    document.documentElement.dataset.theme = 'bright';
  } else {
    // 关灯
    console.log('关灯')
    document.documentElement.dataset.theme = 'dark';
  }
  console.log(lightOn.value)
}

const newsRef = ref(null);
function onClickNews(){
  if(newsRef.value) {
    newsRef.value.showMainPage();
  }
}
// switch language
const {locale} = useI18n(); // 语言类型对象读取
function changeEn(){
  locale.value = 'en';
  localStorage.setItem('lang', 'en')
};
function changeZh() {
  locale.value = 'zh';
  localStorage.setItem('lang', 'zh')
};
</script>

<style>
.whole-container{
  background: var(--bg);
  min-height: 1200px;
}
.header-logo{
  text-decoration: none;
  font-weight: bold;
}
.flex-grow {
  flex-grow: 1;
}
.fullscreen-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}
a:visited {
  color: inherit;
}

</style>
