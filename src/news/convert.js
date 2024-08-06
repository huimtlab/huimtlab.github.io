import fs from 'fs';
import { marked } from 'marked';

// 获取参数
const args = process.argv;
if(args.length != 3){
  console.log('Usage: node convert.js xxxx.md');
  exit(0)
}
const markdownPath = args[2];
const pureName = markdownPath.slice(0, -3);
// 读取Markdown文件
const markdown = fs.readFileSync(markdownPath, 'utf-8');

// 将Markdown转换为HTML
const htmlContent = marked(markdown);

// 创建Vue文件内容
const vueContent = `
<template>
  <div class="markdown-body">
    ${htmlContent}
  </div>
</template>

<script>
</script>

<style scoped>
* {
    color: var(--text-color);
}
</style>
`;

// 将内容写入.vue文件
fs.writeFileSync(pureName + '.vue', vueContent);
