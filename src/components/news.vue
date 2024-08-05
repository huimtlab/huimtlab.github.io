<template>
    <el-row>
        <div class="news-header" v-if="!showRealNewsHeader">
            <p class="news-title">{{ $t('news.news') }}</p>
            <p class="news-introduction">{{ $t('news.newsIntroduction') }}</p>
        </div>
        <div class="news-header" v-if="showRealNewsHeader">
            <p class="news-title">{{ newsData[showNewsId].title }}</p>
        </div>
    </el-row>
    
    <el-row v-for="newsDataItem in newsData" v-if="!showRealNewsHeader">
        <NewsIterm :title="newsDataItem.title" :time="newsDataItem.time" @enterNews="enterNewsPage(newsDataItem.newsId)"></NewsIterm>
    </el-row>
    <el-row v-if="showRealNewsHeader">
        <news0 v-if="showNewsId === 0"></news0>
    </el-row>
</template>

<script setup>
import NewsIterm from './newsIterm.vue';
import { ref } from 'vue'
import news0 from "@/news/news0.vue"

const newsData = ref([
    {'newsId': 0, 'title': '国内首创RDI模式，武汉RISC-V生态创新中心启动揭牌', 'time': 'July 26, 2024', 'content': news0}
])

const showRealNewsHeader = ref(false);
const showNewsId = ref(0);

function enterNewsPage(newsId){
    showRealNewsHeader.value = true;
    showNewsId.value = newsId;
}

function showMainPage(){
    showRealNewsHeader.value = false;
}
defineExpose({
    showMainPage
});
</script>

<style scoped>
.news-header{
    height: 150px;
    background-color: rgb(242, 242, 242);
    margin-bottom: 20px;
    width: 100%;
    border-radius: 20px;
    padding: 5px 25px;
    background: var(--news-bg);
}
.news-title{
    font-size: 30px;
    color: var(--text-color);
}
.news-introduction{
    color: var(--text-color);
}
.newsContent{
    width: 100%;
    min-height: 800px;
}
</style>