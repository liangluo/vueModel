<!--
 组件名称：栏目上图下导航
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
    <div class="columntopimg-divs" v-for="(item, index) in 2" :key="index">
      <div class="cothreeimg mod-skeleton-item"></div>
      <div class="cothreedivs">
        <div class="coth-sub-divs">
          <div class="coth-sub-divs-titlek mod-skeleton-item"></div>
          <div class="coth-sub-divs-dh mod-skeleton-item" style="height:20px"></div>
        </div>
        <div class="coth-sub-divs">
          <div class="coth-sub-divs-detail mod-skeleton-item" style="width:100%;height:20px"></div>
          <div class="btn-s mod-skeleton-item"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="columntopimg" v-else-if="!!columnline">
    <div class="columntopimg-divs" v-for="(i, index) in list" :key="index" @click="JumpDetail(i)" v-if="index < (columnline ? columnline : 6)">
      <div class="cothreeimg">
        <van-image  :src="i.urlAddress" />
        <div class="leftcorner label" v-if="i.freeTab == 1">免费</div>
        <div class="cothreeimg—tabs">
          <div class="cothreeimg—tabs-subs" v-for="(childlabel, index) in i.lableArr" :key="index">
            {{ childlabel }}
          </div>
        </div>
      </div>
      <div class="cothreedivs">
        <div class="coth-sub-divs">
          <div class="coth-sub-divs-titlek one-text">{{ i.name }}</div>
          <div class="coth-sub-divs-dh" @click.stop="isplacclick(i)">
            <span>到这去</span>
          </div>
        </div>
        <div class="coth-sub-divs">
          <div class="coth-sub-divs-detail two-text">{{ i.brief }}</div>
          <div class="btn-s btn-gray">我要预约</div>
        </div>
      </div>
    </div>
  </div>
  <div class="columntopimg" v-else>
    <div class="columntopimg-divs" v-for="(i, index) in list" :key="index" @click="JumpDetail(i)">
      <div class="cothreeimg">
        <van-image  :src="i.urlAddress" />
        <div class="leftcorner label" v-if="i.freeTab == 1">免费</div>
        <div class="cothreeimg—tabs">
          <div class="cothreeimg—tabs-subs" v-for="(childlabel, index) in i.lableArr" :key="index">
            {{ childlabel }}
          </div>
        </div>
      </div>
      <div class="cothreedivs">
        <div class="coth-sub-divs">
          <div class="coth-sub-divs-titlek one-text">{{ i.name }}</div>
          <div class="coth-sub-divs-dh" @click.stop="isplacclick(i)">
            <span>到这去</span>
          </div>
        </div>
        <div class="coth-sub-divs">
          <div class="coth-sub-divs-detail two-text">{{ i.brief }}</div>
          <div class="btn-s btn-gray">我要预约</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { isWx, wayWx} from '@/util/tool';
export default {
  name: 'ColumnTopImgSite',
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
    // 导航
    isplacclick(item) {
      // console.log('导航了', item);
      // 还需要判断微信 在微信中导航
      if (isWx()) {
        wayWx({
          latitude: item.latitude, // 纬度，浮点数，范围为90 ~ -90
          longitude: item.longitude, // 经度，浮点数，范围为180 ~ -180。
          name: item.address, // 位置名
          address: item.address, // 地址详情说明
          scale: 25, // 地图缩放级别,整形值,范围从1~28。默认为最大
          infoUrl: window.location.href, // 在查看位置界面底部显示的超链接,可点击跳转
        });
      } else {
        let url = '';
        url = `https://api.map.baidu.com/marker?location=${item.latitude},${item.longitude}&title=${item.address}&content=${item.address}&output=html`;
        window.location.href = url; // 无效
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.columntopimg {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .leftcorner {
    z-index: 2;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .columntopimg-divs {
    width: 768px;
    display: flex;
    flex-direction: column;
    background: $bg-fff;
    box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    margin: $mg-30 0;
    position: relative;
    .cothreeimg {
      width: 768px;
      height: 310px;
      position: relative;
      border-radius: 20px 20px 0 0;
      img {
        width: 100%;
        height: 100%;
        border-radius:  20px 20px 0 0;
      }
    }
    .cothreedivs {
      padding: 0 $pd-30 34px;
    }
    .coth-sub-divs-titlek {
      font-size: $fSize-34;
      font-weight: 500;
      color: $font-000;
      text-align: left;
      line-height: 54px;
      min-height: 54px;
      margin: 18px 0;
      width: 462px;
    }
    .coth-sub-divs-detail {
      font-size: $fSize-30;
      font-weight: 400;
      color: $font-666;
      line-height: 42px;
      min-height: 42px;
    }
    .coth-sub-divs {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .coth-sub-divs-dh {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 200px;
        .iconfont {
          font-size: 42px;
          color: $theme-color;
        }
        span {
          margin-top: 4px;
          font-size: $fSize-24;
          color: $font-333;
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
        margin-left: 22px;
        flex-shrink: 0;
      }
      .btn-gray {
        background: $bg-999;
        border: 1px solid $bg-999;
      }
    }
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
.cothreeimg—tabs {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  opacity: 0.7;
  position: absolute;
  left: 0px;
  right: 0;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 $fSize-30;
  box-sizing: border-box;
  flex-wrap: nowrap;
  .cothreeimg—tabs-subs {
    padding: 0 14px;
    height: 34px;
    line-height: 38px;
    text-align: center;
    font-size: $fSize-20;
    color:$font-fff;
    border-radius: 17px;
    margin-right: 12px;
    flex-shrink: 0;
    &:nth-child(4n + 1) {
      background: $bg-378EC1;
    }
    &:nth-child(4n + 2) {
      background: $bg-4ABE9D;
    }
    &:nth-child(4n + 3) {
      background: $bg-E86968;
    }
    &:nth-child(4n + 4) {
      background: $bg-F8A751;
    }
  }
}
</style>
