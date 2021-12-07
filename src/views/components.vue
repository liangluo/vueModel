<template>
  <div class="demo">
    <div class="columnDemoTitle">栏目标题组件</div>
    <ColumnTitle :item="title" :skeloading="skeloading" @jump="golist" />
    <div class="columnDemoTitle">一行一列：上图下文组件</div>
    <ColumnTopImgSite
      :list="list.List1"
      :skeloading="skeloading"
      :columnline="list.columnLine"
      @jump="godetail"
     />
    <div class="columnDemoTitle">一行一列：左图右文组件</div>
    <ColumnLeftImg
      :list="list.List2"
      :skeloading="skeloading"
      :columnline="list.columnLine"
      @jump="godetail"
     />
     <div class="columnDemoTitle">一行一列：左文右图组件</div>
    <ColumnRightImg
      :list="list.List3"
      :skeloading="skeloading"
      :columnline="list.columnLine"
      @jump="godetail"
     />
    <div class="columnDemoTitle">一行两列：上图下文组件</div>
    <ColumnTopImgVideo
      :list="list.List4"
      :skeloading="skeloading"
      :columnline="list.columnLine"
      @jump="godetail"
     />
    <div class="columnDemoTitle">栏目swiper组件</div>
    <ColumnSwiperBig
      :list="list.contentList"
      :skeloading="skeloading"
      :columnline="list.columnLine"
      @jump="golist"
    />
    <div class="columnDemoTitle">一行多列:banner组件</div>
    <ColumnDoubleBanner
      :list="list.contentList"
      :skeloading="skeloading"
      :columnline="list.columnLine"
      @jump="golist"
    />
    <div class="columnDemoTitle">一行一列：banner组件</div>
    <ColumnBanner
      :list="list.contentList"
      :skeloading="skeloading"
      :columnline="list.columnLine"
      @jump="golist"
    />
    <div class="columnDemoTitle">一行两列：banner组件</div>
    <ColumnTwoBanner
      :list="list.contentList"
      :skeloading="skeloading"
      :columnline="list.columnLine"
      @jump="golist"
    />
    <div class="columnDemoTitle">一行两列：banner组件</div>
    <ColumnThreeBanner
      :list="list.contentList"
      :skeloading="skeloading"
      :columnline="list.columnLine"
      @jump="golist"
    />
    <div class="columnDemoTitle">金刚区卡片式组件</div>
    <NavBarCard
      :list="list.navbartList"
      :skeloading="skeloading"
      :columnrow="list.columnRow"
      @jump="golist"
    />
    <div class="columnDemoTitle">金刚区组件</div>
    <NavBar
      :list="list.navbartList"
      :skeloading="skeloading"
      :columnrow="list.columnRow"
      @jump="golist"
    />
    <div class="columnDemoTitle">没有更多内容</div>
    <ColumnNoData />
    <div class="columnDemoTitle" style="padding-bottom:70px;">底部导航</div>
    <Tab />
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      skeloading: true,
      title: {
        // 标题数据
        columnName: "栏目名称栏目名称栏目名称栏目名称栏目名称",
      },
      list: {
        columnLine: 2,
        contentList: [
          {
            bannerUrl: "https://ui.qzone.com/828x760",
            bannerLink:"http://m.woread.com.cn",
            seqno: 1,
            status: 1,
            columnId: 2,
            columnName: "首页大图轮播",
            cbannerId: 256,
          },
          {
            bannerUrl:"https://ui.qzone.com/828x760",
            bannerLink: "http://m.woread.com.cn",
            seqno: 2,
            status: 1,
            columnId: 2,
            columnName: "首页大图轮播",
            cbannerId: 257,
          },
          {
            bannerUrl:"https://ui.qzone.com/828x760",
            bannerLink:"http://m.woread.com.cn",
            status: 1,
            columnId: 2,
            columnName: "首页大图轮播",
            cbannerId: 258,
          },
        ],
        columnRow: 4,
        navbartList: [
          {
            jingangIco:"https://ui.qzone.com/84x84",
            name: "名称1",
            link: "http://m.woread.com.cn",
            createrTime: "20211115",
            status: 1,
            seqno: 1,
            columnId: 3,
            columnName: "首页金刚区",
            cjingangId: 354,
          },
          {
             jingangIco:"https://ui.qzone.com/84x84",
            name: "名称名称名称名称名称名称2",
            link: "http://m.woread.com.cn",
            createrTime: "20211115",
            status: 1,
            seqno: 2,
            columnId: 3,
            columnName: "首页金刚区",
            cjingangId: 351,
          },
          {
             jingangIco:"https://ui.qzone.com/84x84",
            name: "名称3",
            link: "http://m.woread.com.cn",
            createrTime: "20211115",
            status: 1,
            seqno: 3,
            columnId: 3,
            columnName: "首页金刚区",
            cjingangId: 353,
          },
          {
             jingangIco:"https://ui.qzone.com/84x84",
            name: "名称4",
            link: "http://m.woread.com.cn",
            createrTime: "20211115",
            status: 1,
            seqno: 4,
            columnId: 3,
            columnName: "首页金刚区",
            cjingangId: 350,
          },
          {
            jingangIco:"https://ui.qzone.com/84x84",
            name: "名称5",
            link: "http://m.woread.com.cn",
            createrTime: "20211115",
            status: 1,
            seqno: 5,
            columnId: 3,
            columnName: "首页金刚区",
            cjingangId: 352,
          },
          {
             jingangIco:"https://ui.qzone.com/84x84",
            name: "名称6",
            link: "http://m.woread.com.cn",
            createrTime: "20211115",
            status: 1,
            seqno: 6,
            columnId: 3,
            columnName: "首页金刚区",
            cjingangId: 355,
          },
          {
            jingangIco:"https://ui.qzone.com/84x84",
            name: "名称7",
            link: "http://m.woread.com.cn",
            createrTime: "20211115",
            status: 1,
            seqno: 7,
            columnId: 3,
            columnName: "首页金刚区",
            cjingangId: 357,
          },
          {
            jingangIco:"https://ui.qzone.com/84x84",
            name: "名称8",
            link: "http://m.woread.com.cn",
            createrTime: "20211115",
            status: 1,
            seqno: 8,
            columnId: 3,
            columnName: "首页金刚区",
            cjingangId: 356,
          },
        ],
        List1:[
            {
              "name": "标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
              "urlAddress": "https://ui.qzone.com/768x310",
              "freeTab": 1,
              "releaseTime": "20210818",
              "openDateDesc": "全天",
              "lableIds": "1",
              "lableNames": "国家级",
              "address": "武地址地址地址地址地址地址地址地址地址地址",
              "isSubscribe": 1,
              "brief": "描述描述描述描述描述描述描述描述",
              "lableArr":['风气','非遗']
            }
        ],
        List2:[
            {
              "name": "标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
              "urlAddress": "https://ui.qzone.com/340x310",
              "freeTab": 1,
              "releaseTime": "20210818",
              "openDateDesc": "全天",
              "lableIds": "1",
              "lableNames": "国家级",
              "address": "武地址地址地址地址地址地址地址地址地址地址",
              "isSubscribe": 1,
              "brief": "描述描述描述描述描述描述描述描述",
              "lableArr":['风气','非遗']
            }
        ],
        List3:[
            {
              "name": "标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
              "urlAddress": "https://ui.qzone.com/256x230",
              "freeTab": 1,
              "releaseTime": "20210818",
              "openDateDesc": "全天",
              "lableIds": "1",
              "lableNames": "国家级",
              "address": "武地址地址地址地址地址地址地址地址地址地址",
              "isSubscribe": 1,
              "brief": "描述描述描述描述描述描述描述描述",
              "lableArr":['风气','非遗']
            }
        ],
        List4:[
            {
              "name": "标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
              "urlAddress": "https://ui.qzone.com/369x194",
              "freeTab": 1,
              "releaseTime": "20210818",
              "openDateDesc": "全天",
              "lableIds": "1",
              "lableNames": "国家级",
              "address": "武地址地址地址地址地址地址地址地址地址地址",
              "isSubscribe": 1,
              "brief": "描述描述描述描述描述描述描述描述",
              "lableArr":['风气','非遗']
            },
             {
              "name": "标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
              "urlAddress": "https://ui.qzone.com/358x194",
              "freeTab": 1,
              "releaseTime": "20210818",
              "openDateDesc": "全天",
              "lableIds": "1",
              "lableNames": "国家级",
              "address": "武地址地址地址地址地址地址地址地址地址地址",
              "isSubscribe": 1,
              "brief": "描述描述描述描述描述描述描述描述",
              "lableArr":['风气','非遗']
            }
        ],
      },
    };
  },
  created() {
    setTimeout(() => {
      this.skeloading = false;
    }, 8000);
  },
  mounted() {},
  methods: {
    golist() {
      console.log("跳转列表方法");
    },
    godetail() {
      console.log("跳转详情页方法");
    },
  },
  watch: {},
};
</script>
<style lang="scss">
.demo {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #ddd;
}
.columnDemoTitle {
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  margin: 10px 10px 0 10px;
  color: #f0f;
  border-bottom: 1px solid #eee;
}
</style>
