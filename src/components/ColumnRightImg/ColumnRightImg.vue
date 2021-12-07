<!--
 组件名称：栏目左文右图
 组件参数：
	skeloading：true 骨架屏显示
	columnline:0 栏目行数 配置页面时必传
	list:[]  列表
 组件方法：
	jump: 跳转详情页
 组件描述：组件内部只做结构样式处理，不做逻辑处理，
 组件开发：罗亮
 -->
<template>
  <div class="mod-skeleton animation-opacity columonerightimg" v-if="skeloading">
    <div class="columonerightimg-divs" v-for="(item, index) in 2" :key="index">
      <div class="coright-div">
        <div class="coright-div-text mod-skeleton-item"></div>
        <div class="coright-div-text mod-skeleton-item"></div>
      </div>
      <div class="coright-div mod-skeleton-item"></div>
    </div>
  </div>
  <div class="columonerightimg" v-else-if="!!columnline">
    <div
      class="columonerightimg-divs"
      v-for="(i, index) in list"
      :key="index"
      v-if="index < (columnline ? columnline : 6)"
      @click="JumpDetail(i)"
    >
      <div class="coright-div">
        <div class="coright-div-text two-text">{{ i.name }}</div>
        <div class="coright-div-text">{{ i.releaseTime ? i.releaseTime : '' | formatTime2 }}</div>
      </div>
      <div class="coright-div">
         <van-image   class="coright-div-img" :src="i.urlAddress" />
      </div>
    </div>
  </div>
  <div class="columonerightimg" v-else>
    <div
      class="columonerightimg-divs"
      v-for="(i, index) in list"
      :key="index"
      @click="JumpDetail(i)"
    >
      <div class="coright-div">
        <div class="coright-div-text two-text">{{ i.name }}</div>
        <div class="coright-div-text">{{ i.releaseTime ? i.releaseTime : '' | formatTime2 }}</div>
      </div>
      <div class="coright-div">
         <van-image   class="coright-div-img" :src="i.urlAddress" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ColumnRightImg',
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
  created() {},
  components: {},
  methods: {
    JumpDetail(data) {
      this.$emit('jump', data);
    },
  },
};
</script>
<style lang="scss" scoped>
.columonerightimg {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .columonerightimg-divs {
    width: 768px;
    height: 230px;
    display: flex;
    flex-direction: row;
    background: $bg-fff;
    box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    margin:  $mg-30 0;
    position: relative;
  }
}
.coright-div:nth-child(1) {
  width: 512px;
  height: 230px;
  padding: 0 $pd-30;
  box-sizing: border-box;
  .coright-div-text:nth-child(1) {
    height: 96px;
    font-size: $fSize-34;
    font-weight: 500;
    color:$font-000;
    line-height: 48px;
    text-align: left;
    margin-top: 46px;
  }
  .coright-div-text:nth-child(2) {
    height: 33px;
    font-size: $fSize-24;
    font-weight: 400;
    color: $font-666;
    line-height: 33px;
    text-align: left;
    margin-top: 12px;
  }
}
.coright-div:nth-child(2) {
  width: 256px;
  height: 230px;
  border-radius: 20px;
  .coright-div-img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
}
/deep/ .van-image{
  width: 100%;
  height: 100%;
  border-radius:20px;
  img{
    width: 100%;
    height: 100%;
    border-radius:20px;
  }
}
</style>
