<template >
    <p>第 4 届 RISC-V 中国峰会 (RVSC24) 即将于本周 8 月 21-23 日在杭州黄龙饭召开。经过几年的发展，RISC-V 中国峰会已经成为全球三大 RISC-V 专业会展之一，同时也是国内最大的 RISC-V 年度活动。亿芯公司北京研发中心资深软件工程师、惠山实验室发起人刘禹 (<a href="https://github.com/liuyu81">liuyu81</a>) 将参加本次峰会，并做题为《PySpike：RISC-V 指令集模拟器的 Python 语言集成》的演讲。</p>
    <p>PySpike 是惠山实验室首批筹备中的 3 个开源项目之一。通过非入侵式的运行时扩展，PySpike 实现了 Spike 指令集模拟器与 Python 语言生态的无缝集成。一方面支持在 Python 侧 (例如验证脚本) 中访问 C++ 侧 Spike 模拟器的内部状态，另一方面支持将 Python 语言开发的 ISA / RoCC 插件模块和 MMIO 设备模型直接加载到原生的 Spike 模拟器中。与 Python 语言生态的紧密集成提高了在基于 Python 的验证环境中使用 Spike 模拟器的便捷性，同时也为 Spike 模拟器的功能扩展提供了更多可能性。</p>
    <img src="@/assets/pyspike.png">
</template>
<style scoped>
* {
    color: var(--text-color);
}
img{
    width: 100%;
}
</style>