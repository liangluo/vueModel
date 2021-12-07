<!--
 组件名称：栏目左图右文
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
  <div class="mod-skeleton animation-opacity columoneleftimg" v-if="skeloading">
    <div class="columoneleftimg-divs" v-for="(item, index) in 2" :key="index">
      <div class="columdiv columdivbor mod-skeleton-item"></div>
      <div class="columdiv columdivbor">
        <div class="columdistop mod-skeleton-item"></div>
        <div class="colummiddle mod-skeleton-item"></div>
        <div class="colummiddle mod-skeleton-item"></div>
        <div class="btn-s mod-skeleton-item"></div>
      </div>
    </div>
  </div>
  <div class="columoneleftimg" v-else-if="!!columnline">
    <div class="columoneleftimg-divs" v-for="(i, index) in list" :key="index" @click="JumpDetail(i)" v-if="index < (columnline ? columnline : 6)">
      <div class="columdiv columdivbor">
        <van-image   class="columdimg" :src="i.urlAddress" />
        <div class="leftcorner label" v-if="i.freeTab == 1">免费</div>
      </div>
      <div class="columdiv columdivbor">
        <div class="columdistop">
          <span class="two-text">
            {{ i.name && i.name.length >= 21? i.name.substring(0, 20) + '...': i.name}}
          </span>
        </div>
        <div class="colummiddle" v-if="i.releaseTime">
          <i class="iconfont icontime"></i>
          <span class="one-text">{{ i.openDateDesc }}</span>
        </div>
        <div class="colummiddle">
          <i class="iconfont iconaddress"></i>
          <span class="one-text">{{ i.address }}</span>
        </div>
        <div class="btn-s" v-if="i.isSubscribe == 1">我要预约</div>
      </div>
    </div>
  </div>
  <div class="columoneleftimg" v-else>
    <div class="columoneleftimg-divs" @click="JumpDetail(i)" v-for="(i, index) in list" :key="index">
      <div class="columdiv columdivbor" >
        <van-image   class="columdimg" :src="i.urlAddress" />
        <div class="leftcorner label" v-if="i.freeTab == 1">免费</div>
      </div>
      <div class="columdiv columdivbor">
        <div class="columdistop">
          <span class="two-text">
            {{ i.name && i.name.length >= 21? i.name.substring(0, 20) + '...': i.name}}
          </span>
        </div>
        <div class="colummiddle">
          <i class="iconfont icontime"></i>
          <span class="one-text">{{ i.openDateDesc }}</span>
        </div>
        <div class="colummiddle">
          <i class="iconfont iconaddress"></i>
          <span class="one-text">{{ i.address }}</span>
        </div>
        <div class="btn-s" v-if="i.isSubscribe == 1">我要预约</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ColumnLeftImg',
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
    JumpDetail(data) {
      this.$emit('jump', data);
    },
  },
};
</script>

<style lang="scss" scoped>
.columoneleftimg {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .columoneleftimg-divs {
    width: 768px;
    height: 310px;
    display: flex;
    flex-direction: row;
    background: $bg-fff;
    box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.06);
    border-radius:20px;
    margin: $mg-30 0;
    position: relative;
  }
  .columdivbor {
    position: relative;
    .columdimg{
      width: 100%;
      height: 100%;
      border-radius:20px;
    }
    .leftcorner {
      z-index: 2;
      position: absolute;
      left: 0px;
      top: 0px;
    }
    &:nth-child(1) {
      width: 340px;
      height: 310px;
    }
    &:nth-child(2) {
      width: 428px;
      height: 310px;
      padding: 0 $pd-30;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }
  }
  .columdistop:nth-child(1) {
    font-size: $fSize-34;
    font-weight: 500;
    color: $font-000;
    line-height: 42px;
    min-height: 42px;
    margin: 28px 0 18px 0;
  }
  .colummiddle {
    font-size: $fSize-24;
    color: $font-333;
    display: flex;
    align-items: center;
    line-height: 33px;
    min-height: 33px;
    margin: 6px 0;
    .iconfont {
      font-size: $fSize-24;
    }
    span {
      color: $font-666;
      margin-left: 5px;
    }
  }
  .btn-s {
    width: 200px;
    height: 54px;
    background:$theme-color;
    border-radius: 31px;
    font-weight: 400;
    font-size: $fSize-26;
    color: $font-fff;
    line-height: 56px;
    text-align: center;
    border: 1px solid $theme-color;
    position: absolute;
    bottom: 34px;
    left: 30px;
  }
}
.label {
  width: 90px;
  height: 54px;
  line-height: 54px;
  background: $bg-E86968;
  border-radius: 20px 0px 30px 0px;
  text-align: center;
  font-size: $fSize-24;
  color: $font-fff;
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
