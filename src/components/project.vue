<template>
    <el-card class="box-card" body-style="padding: 0 20px;marigin: 0">
        <p class="project-title"><a>{{ title }}</a></p>
        <p class="second-title">{{ short }}</p>
    <p class="project-introduction">{{ introduction }}</p>        
    </el-card>
</template>

<script setup>
defineProps(['title', 'short', 'introduction'])
</script>

<style scoped>
.project-title{
    font-size: 25px;
    font-weight: bold;
    color: var(--text-color)
}
.second-title{
    font-size: 14px;
    color: var(--text-color)
}
.project-introduction{
    font-size: 20px;
    color: var(--text-color)
}
.text {
  font-size: 14px;
}

.box-card {
  width: 500px;
  background: var(--bg);
}
.el-card__body{
    padding: 0;
}
</style>