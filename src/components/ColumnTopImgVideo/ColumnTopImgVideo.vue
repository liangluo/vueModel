<!--
 组件名称：栏目一行两列组件
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
  <div class="mod-skeleton animation-opacity columntopimg" v-if="skeloading">
    <div class="columntopimg-divs">
      <div class="columntopimg-divs-list" v-for="(item, index) in 2" :key="index">
        <div class="cothreeimg mod-skeleton-item"></div>
        <div class="cothreedivs">
          <div class="coth-sub-divs-titlek mod-skeleton-item"></div>
          <div class="coth-sub-divs-detail mod-skeleton-item"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="columntopimg" v-else-if="!!columnline">
    <div class="columntopimg-divs">
      <div class="columntopimg-divs-list" v-for="(i, index) in list" @click="itOnclick(i)" :key="index" v-if="index < (columnline ? columnline * 2 : 6)">
        <div class="cothreeimg" >
          <van-image  :src="i.urlAddress" />
          <div class="a_play"></div>
        </div>
        <div class="cothreedivs">
          <div class="coth-sub-divs-titlek one-text">{{ i.name }}</div>
          <div class="coth-sub-divs-detail one-text">{{ i.brief }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="columntopimg" v-else>
    <div class="columntopimg-divs-list" v-for="(i, index) in list" @click="itOnclick(i)" :key="index">
        <div class="cothreeimg" >
          <van-image  :src="i.urlAddress" />
          <div class="a_play"></div>
        </div>
        <div class="cothreedivs">
          <div class="coth-sub-divs-titlek one-text">{{ i.name }}</div>
          <div class="coth-sub-divs-detail one-text">{{ i.brief }}</div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'ColumnTopImgVideo',
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
.columntopimg {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .columntopimg-divs {
    width: 768px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    .columntopimg-divs-list {
      width: 369px;
      display: flex;
      flex-direction: column;
      background: $bg-fff;
      box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.06);
      border-radius: 20px;
      margin: $mg-30 0;
    }
    .cothreeimg {
      width: 369px;
      height: 194px;
      position: relative;
      border-radius:  20px 20px 0 0;
      .a_play {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80px;
        height: 80px;
        margin: -40px 0 0 -40px;
        display: block;
        z-index: 2;
        background-image: url("data:image/png;base64,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");
        background-position:  0 0 ;
        background-repeat: no-repeat;
        background-size: 80px 80px;
      }
    }
    .cothreedivs {
      padding: 0 $pd-30 22px;
    }
    .coth-sub-divs-titlek {
      font-size: $fSize-30;
      font-weight: 500;
      color: $font-000;
      text-align: left;
      line-height: 42px;
      min-height: 42px;
      margin: 14px 0 6px;
    }
    .coth-sub-divs-detail {
      font-size: $fSize-24;
      font-weight: 400;
      color: $font-666;
      line-height: 34px;
      min-height: 34px;
    }
  }
}
/deep/ .van-image{
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
  img{
    width: 100%;
    height: 100%;
      border-radius: 20px 20px 0 0;
  }
}
</style>
