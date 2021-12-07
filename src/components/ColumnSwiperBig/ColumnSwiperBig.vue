<!--
 组件名称：栏目大图swiper
 组件参数：
	skeloading：true 骨架屏显示
	columnline:0 栏目行数 配置页面时必传
	list:[]  列表
 组件方法：
	jump: banner跳转
 组件描述：组件内部只做结构样式处理，不做逻辑处理，
 组件开发：罗亮
 -->
<template>
  <div class="mod-skeleton animation-opacity columnSwiperBig" v-if="skeloading">
    <div class="mod-skeleton-item"></div>
  </div>
  <div class="columnSwiperBig" v-else-if="!!columnline">
    <van-swipe :autoplay="3000" :indicator-color="activeColor">
      <van-swipe-item v-for="(image, index) in list" :key="index" v-if="index < (columnline ? columnline : 6)">
        <van-image  :src="image.bannerUrl" @click.stop="JumpOut(image)"/>
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="columnSwiperBig" v-else>
    <van-swipe :autoplay="3000" :indicator-color="activeColor">
      <van-swipe-item v-for="(image, index) in list" :key="index">
        <van-image  :src="image.bannerUrl" @click.stop="JumpOut(image)"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: 'ColumnSwiperBig',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    columnline: {
      type: Number,
      default: 0,
    },
    skeloading: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      activeColor: '#60D5b4', // 激活颜色
    };
  },
  methods: {
    JumpOut(data) {
      this.$emit('jump', data);
    },
  },
};
</script>

<style lang="scss" scoped>
.columnSwiperBig {
  margin: 0 0 $mg-30 0;
}
.mod-skeleton {
  .mod-skeleton-item {
    height: 764px;
  }
}
/deep/ .van-swipe__indicators {
  bottom: auto;
  top: 585px;
}
/deep/ .van-image{
    width: 100%;
    height: 764px;
    img{
      width: 100%;
      height: 100%;
    }
}
</style>
