<template>
    <div class="box-card">
        <p class="news-title"><a @click="$emit('enterNews', newsId)">{{ title }}</a></p>
        <p class="time-show">{{ time }}</p>
        <hr class="news-line">
    </div>
</template>

<script setup>
defineProps(['title', 'time', 'newsId'])
</script>

<style scoped>
.news-title{
    font-size: 25px;
    font-weight: bold;
    color: var(--text-color);
}
.news-title:hover{
    text-decoration: underline;
    cursor: default;
}
.time-show{
    font-size: 14px;
    color: var(--text-color);
}
.text {
  font-size: 14px;
}

.box-card {
  border:none;
  width: 100%;
}
.news-line{
    width: 70%;
    margin-left: 0;
    color: var(--text-color);
}
</style>