import ColumnTitle from '@/components/ColumnTitle/ColumnTitle'; // 标题
import ColumnNoData from '@/components/ColumnNoData/ColumnNoData'; // 没有更多数据
import ColumnSwiperBig from '@/components/ColumnSwiperBig/ColumnSwiperBig'; // 大轮播图swiper
import ColumnDoubleBanner from '@/components/ColumnDoubleBanner/ColumnDoubleBanner'; // 一行多图banner
import ColumnBanner from '@/components/ColumnBanner/ColumnBanner'; // 一行一列banner
import ColumnTwoBanner from '@/components/ColumnTwoBanner/ColumnTwoBanner'; // 一行两列banner
import ColumnThreeBanner from '@/components/ColumnThreeBanner/ColumnThreeBanner'; // 一行三列banner
import NavBarCard from '@/components/NavBarCard/NavBarCard'; // 金刚区卡片
import NavBar from '@/components/Navbar/Navbar'; // 金刚区
import ColumnLeftImg from '@/components/ColumnLeftImg/ColumnLeftImg'; // 一行一列左图右文(新闻)
import ColumnRightImg from '@/components/ColumnRightImg/ColumnRightImg'; // 一行一列左文右图资讯
import ColumnTopImgSite from '@/components/ColumnTopImgSite/ColumnTopImgSite'; // 一行一列上图下文
import ColumnTopImgVideo from '@/components/ColumnTopImgVideo/ColumnTopImgVideo'; // 一行两列上图下文
import Tab from '@/components/Tab/Tab'; // 底部导航
const model = [
  ColumnTitle,
  ColumnNoData,
  ColumnSwiperBig,
  ColumnDoubleBanner,
  ColumnBanner,
  ColumnTwoBanner,
  ColumnThreeBanner,
  NavBarCard,
  NavBar,
  Tab,
  ColumnLeftImg,
  ColumnRightImg,
  ColumnTopImgSite,
  ColumnTopImgVideo,
];

// 出口函数为组件安装函数
const install = (vm) => {
  model.forEach((component) => {
    vm.component(component.name, component);
  });
};
export default {
  install,
};
