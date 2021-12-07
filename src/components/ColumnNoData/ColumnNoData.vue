<!--
 组件名称：没有更多数据
 组件描述：组件内部只做结构样式处理，不做逻辑处理，
 组件开发：罗亮
 -->
<template>
    <div class="end" >
        <span class="end-line">到底了</span>
    </div>
</template>

<script>
    export default {
        name: 'ColumnNoData',
    };
</script>

<style scoped lang="scss">
    .end {
        color: $font-666;
        height: 78px;
        line-height: 78px;
        font-size: $fSize-26;
        text-align: center;
        margin-top:$mg-30;
    }

    .end .end-line {
        position: relative;
    }

    .end .end-line::before,
    .end .end-line::after {
        position: absolute;
        top: 18px;
        content: "";
        display: inline-block;
        width: 44px;
        height: 1px;
        line-height: 60px;
        background: $bg-999;
    }
    .end .end-line:before {
        left: -56px;
    }

    .end .end-line:after {
        right: -56px;
    }
</style>
