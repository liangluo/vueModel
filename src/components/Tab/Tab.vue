<!--底部Tab-->
<template>
    <van-tabbar v-model="tag" :border="false" :active-color="activeColor" :inactive-color="inactive">
      <van-tabbar-item replace to="/home">
        <div class="icontext">首页</div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/classify?resourcetype=1&categoryname=资讯&topId=0">
        <div class="icontext">资讯</div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/actclassify?resourcetype=2&categoryname=活动&topId=0">
        <div class="iconact flex f-center f-align">
          <van-image    src="https://ui.qzone.com/106x106" />
        </div>
        <div class="icontext">活动</div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/map?categoryname=场馆&topId=0">
        <div class="icontext">场馆</div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my">
        <div class="icontext">我的</div>
      </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  name: 'Tab',
  data() {
    return {
      tag: 0,
      activeColor: '#60D5b4', // 激活颜色
      inactive: '#999', // 初始颜色
    };
  },
  methods: {
    fetchData() {
      const cur_path = this.$route.path; // 获取当前路由
      if (cur_path == '/home') {
        this.tag = 0;
      } else if (cur_path == '/classify') {
          this.tag = 1;
      } else if (cur_path == '/act/5') {
          this.tag = 2;
      } else if (cur_path == '/my') {
          this.tag = 4;
      } else if(cur_path == '/map'){
        this.tag =3;
      }
    },

  },
  watch: {
    $route: 'fetchData',
  },
};
</script>
<style scoped lang="scss">
.icontext{
  padding-bottom:26px;
}
.iconact{
  width:224px;
  height: 46px;
  background-image: url("data:image/png;base64,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");
  background-origin: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top:-44px;
  left:50%;
  margin-left: -112px;
  z-index: 1;
}
/deep/ .van-tabbar-item--active{
  color:$theme-color;
}
/deep/ .van-image{
  img{
    margin-top: 94px;
    width: 106px;
    height: 106px;
    border-radius: 50%;
  }
}
</style>
