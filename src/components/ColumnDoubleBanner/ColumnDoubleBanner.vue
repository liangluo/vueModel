<!--
 组件名称：栏目banner一行多列
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
  <div class="mod-skeleton animation-opacity advertise-more" v-if="skeloading">
    <div class="mod-skeleton-item cotctu-div"></div>
    <div class="mod-skeleton-item cotctu-div"></div>
    <div class="mod-skeleton-item cotctu-div"></div>
  </div>
  <div class="advertise-more" v-else-if="!!columnline">
    <div
      class="cotctu-div"
      v-for="(image, index) in list"
      :key="index"
      v-if="index < (columnline ? columnline : 6)"
    >
      <van-image  :src="image.bannerUrl" @click.stop="JumpOut(image)"/>
    </div>
  </div>
  <div class="advertise-more" v-else>
    <div class="cotctu-div" v-for="(image, index) in list" :key="index">
      <van-image  :src="image.bannerUrl" @click.stop="JumpOut(image)"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ColumnDoubleBanner',
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
    return {};
  },  
  methods: {
    JumpOut(data) {
      this.$emit('jump', data);
    },
  },
};
</script>

<style lang="scss" scoped>
.advertise-more {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin:$mg-30 0;
  box-sizing: border-box;
  padding: 0 $pd-30;
  .cotctu-div {
    width: 326px;
    height: 150px;
    border-radius: 20px;
    margin-right: 30px;
    flex-shrink: 0;
  }
}
/deep/ .van-image{
    display: block;
    border-radius: 20px;
    width: 100%;
    height: 150px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
}
.advertise-more::-webkit-scrollbar {
  display: none;
}
</style>
