<!--
 组件名称：栏目一行两列banner
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
  <div class="mod-skeleton animation-opacity columnapicture flex f-between f-wrap" v-if="skeloading">
    <div class="mod-skeleton-item cotctu-div" ></div>
    <div class="mod-skeleton-item cotctu-div" ></div>
  </div>
  <div class="columnapicture flex f-between f-wrap" v-else-if="!!columnline">
    <div
      class="cotctu-div"
      v-for="(image, index) in list"
      :key="index"
      v-if="index < (columnline ? columnline : 6)"
    >
       <van-image   class="cotctu-div-imgs" :src="image.bannerUrl" @click.stop="JumpOut(image)"/>
    </div>
  </div>
  <div class="columnapicture flex f-between f-wrap" v-else>
    <div class="cotctu-div" v-for="(image, index) in list" :key="index">
      <van-image   class="cotctu-div-imgs" :src="image.bannerUrl" @click.stop="JumpOut(image)"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ColumnTwoBanner',
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
  methods: {
    JumpOut(data) {
      this.$emit('jump', data);
    },
  },
};
</script>

<style lang="scss" scoped>
.columnapicture {
  width: 768px;
  margin: 0 auto;
  .cotctu-div {
    width: 369px;
    margin-top: $mg-30;
    border-radius:20px;
  }
}
/deep/ .van-image{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
}
.mod-skeleton-item{
  height: 194px;
}
</style>
