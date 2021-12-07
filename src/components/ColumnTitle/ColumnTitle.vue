<!--
 组件名称：栏目标题组件
 组件参数：
  skeloading：true 骨架屏显示
  item:{} 栏目标题数据
 组件方法：
  jump：标题跳转方法
 组件描述：组件内部只做结构样式处理，不做逻辑处理，
 组件开发：罗亮
 -->
<template>
  <div class="_mod-title mod-skeleton animation-opacity " v-if="skeloading">
    <div class="mod-skeleton-item" style="height:30px"></div>
  </div>
  <div class="_mod-title" v-else>
    <div class="left">{{ item.columnName | cutLength }}</div>
    <div class="right" @click="JumpOut">更多</div>
  </div>
</template>

<script>
export default {
  name: 'ColumnTitle',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    skeloading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    JumpOut() {
      this.$emit('jump', true);
    },
  },
  watch: {},
  filters: {
    cutLength(val) {
      return val ? `${val.substr(0, 10)}...` : '';
    },
  },
};
</script>

<style scoped lang="scss">
._mod-title {
  margin:$mg-30 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  .left {
    padding-left: $pd-30;
    line-height: 1;
    font-size: 44px;
    color: $font-333;
    font-weight: 500;
    position: relative;
  }
  .right {
    padding-right: $pd-30;
    line-height: 30px;
    font-size: 44px;
    color: $font-333;
    font-weight: 400;
    position: relative;
  }
}
</style>
