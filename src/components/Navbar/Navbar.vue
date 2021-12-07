<!--
 组件名称：金刚区
 组件参数：
	skeloading：true 骨架屏显示
	columnrow:1 //栏目列数 配置页面时必传
	list:[]  列表
 组件方法：
	jump: 金刚区跳转
 组件描述：组件内部只做结构样式处理，不做逻辑处理，
 组件开发：罗亮
 -->
<template>
  <div class="mod-skeleton animation-opacity _mod-navbar" v-if="skeloading">
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="(item, index) in 8" :key="index">
        <div class="nav mod-skeleton-item"></div>
      </van-grid-item>
    </van-grid>
  </div>
  <div class="_mod-navbar" v-else>
    <div class="_mod-navbar-col flex f-around f-align f-wrap">
      <van-grid :border="false" :column-num="columnrow" class="f-between">
        <van-grid-item v-for="(item, index) in list" :key="index" @click.stop="JumpOut(item)">
          <van-image  class="nav" :src="item.jingangIco" />
          <div class="title one-text">{{ item.name }}</div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      userToken: null, // 用户信息
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    columnrow: {
      type: Number,
      default: 1,
    },
    skeloading: {
      type: Boolean,
      default: () => true,
    },
  },
  created() {},
  methods: {
    JumpOut(data) {
      this.$emit('jump', data);
    },
  },
};
</script>
<style lang="scss" scoped>
.mod-skeleton {
  position: relative;
  .mod-skeleton-item {
    width: 100%;
    height: 44px;
  }
}
._mod-navbar {
  width: 100%;
  box-sizing: border-box;
  margin: $mg-30 0;
  .nav {
    width: 92px;
    height: 92px;
  }
  .title {
    color: $font-333;
    font-size: $fSize-26;
    margin-top: 14px;
    line-height: 36px;
    width: 84px;
  }
}

._mod-navbar ._mod-navbar-col {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  .title {
    color: $font-333;
    font-size:  $fSize-26;
    margin-top: 14px;
    line-height: 36px;
  }
  .f-between {
    width: 100%;
  }
}
/deep/ .van-grid-item__content {
  padding: 16px 8px;
  background: transparent;
}
</style>
