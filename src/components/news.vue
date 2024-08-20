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
    
    <!-- <el-row v-for="newsDataItem in newsData" v-if="!showRealNewsHeader">
        <NewsIterm :title="newsDataItem.title" :time="newsDataItem.time" @enterNews="enterNewsPage(newsDataItem.newsId)"></NewsIterm>
    </el-row> -->
    <el-row v-if="!showRealNewsHeader">
        <NewsIterm title="惠山实验室成员参加 RISC-V 中国峰会" time="August 21, 2024" @enterNews="enterNewsPage(0)"></NewsIterm>
    </el-row>
    <el-row v-if="!showRealNewsHeader">
        <NewsIterm title="亿芯公司北京研发中心新场地启用" time="August 08, 2024" @enterNews="enterNewsPage(1)"></NewsIterm>
    </el-row>

    <el-row v-if="showRealNewsHeader">
        <news0 v-if="showNewsId === 0"></news0>
        <news1 v-if="showNewsId === 1"></news1>
    </el-row>
</template>

<script setup>
import NewsIterm from './newsIterm.vue';
import { ref } from 'vue'
import news0 from "@/news/news0.vue"
import news1 from "@/news/news1.vue"

const newsData = ref([
    {'newsId': 1, 'title': '惠山实验室成员参加 RISC-V 中国峰会', 'time': 'August 21, 2024', 'content': news1},
    {'newsId': 0, 'title': '亿芯公司北京研发中心新场地启用', 'time': 'August 08, 2024', 'content': news0},
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