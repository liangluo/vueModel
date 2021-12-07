import wx from 'weixin-js-sdk';
import portAPI from '@/util/api';
// 获取地址栏参数
export function getinfo(name) {
  const tstr = window.location.href;
  const index = tstr.indexOf('?');
  const str = tstr.substring(index + 1);
  const arr = str.split('&');
  const result = {};
  arr.forEach((item) => {
      const a = item.split('=');
      result[a[0]] = a[1];
  });
  return result[name];
}
// 判断是否是微信
export function isWx() {
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  }
  return false;
}

export function shareWx(wxData) { // 如果分享的内容会根据情况变化，那么这里可以传入分享标题及url
  const data = { // 请求参数
    url: encodeURIComponent(window.location.href),
  };
  const shareData = wxData || {
    title: '分享标题',
    detail: '分享详情',
    img: '分享图标',
    url: window.location.href,
  };
  portAPI.getShare(data).then((res) => {
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: res.appid, // 必填，公众号的唯一标识，填自己的！
      timestamp: res.timestamp, // 必填，生成签名的时间戳，刚才接口拿到的数据
      nonceStr: res.noncestr, // 必填，生成签名的随机串
      signature: res.sgture, // 必填，签名，见附录1
      jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo'],
    });
    wx.ready(() => {
      // 分享到朋友圈
      wx.onMenuShareTimeline({
        title: shareData.title, // 分享时的标题
        link: shareData.url, // 分享时的链接
        imgUrl: shareData.img, // 分享时的图标
        success() {
          console.log('分享成功');
        },
        cancel() {
          console.log('取消分享');
        },
      });
      // 分享给朋友
      wx.onMenuShareAppMessage({
        title: shareData.title, // 分享时的标题
        desc: shareData.detail,
        link: shareData.url, // 分享时的链接
        imgUrl: shareData.img, // 分享时的图标
        type: '',
        dataUrl: '',
        success() {
          console.log('分享成功');
        },
        cancel() {
          console.log('取消分享');
        },
      });
      // 分享到qq
      wx.onMenuShareQQ({
        title: shareData.title, // 分享时的标题
        desc: shareData.detail,
        link: shareData.url, // 分享时的链接
        imgUrl: shareData.img, // 分享时的图标
        success() {
          console.log('分享成功');
        },
        cancel() {
          console.log('取消分享');
        },
      });
      // 分享到微博
      wx.onMenuShareWeibo({
        title: shareData.title, // 分享时的标题
        desc: shareData.detail,
        link: shareData.url, // 分享时的链接
        imgUrl: shareData.img, // 分享时的图标
        success() {
          console.log('分享成功');
        },
        cancel() {
          console.log('取消分享');
        },
      });
    });
  });
}

// 微信导航功能
export function wayWx(wxLocation) {
  const data = {
    // 请求参数
    url: encodeURIComponent(window.location.href),
  };
  const location = wxLocation || {
    latitude: 23.132006, // 纬度，浮点数，范围为90 ~ -90
    longitude: 113.377785, // 经度，浮点数，范围为180 ~ -180。
    name: '武冈文旅云', // 位置名
    address: '武冈市', // 地址详情说明
    scale: 25, // 地图缩放级别,整形值,范围从1~28。默认为最大
    infoUrl: window.location.href, // 在查看位置界面底部显示的超链接,可点击跳转
  };
  portAPI.getShare(data).then((res) => {
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: res.message.appid, // 必填，公众号的唯一标识，填自己的！
      timestamp: res.message.timestamp, // 必填，生成签名的时间戳，刚才接口拿到的数据
      nonceStr: res.message.noncestr, // 必填，生成签名的随机串
      signature: res.message.sgture, // 必填，签名，见附录1
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'openLocation',
      ],
    });
    wx.ready(() => {
      // 微信地图
      wx.openLocation({
        latitude: parseFloat(location.latitude), // 纬度，浮点数，范围为90 ~ -90
        longitude: parseFloat(location.longitude), // 经度，浮点数，范围为180 ~ -180。
        name: location.name, // 位置名
        address: location.address, // 地址详情说明
        scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: location.infoUrl, // 在查看位置界面底部显示的超链接,可点击跳转
        success: (success) => {
          // console.log(`成功，${success}`);
        },
        fail: (err) => {
          // console.log(`成功，${err}`);
        },
      });
      wx.error((res) => {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        // console.log(`微信定位错误errorMSG:${JSON.stringify(res)}`);
      });
    });
  });
}

// 滚动到顶部
export function scrollToTop() {
  let timer = setTimeout(() => {
      $(document).scrollTop(0);
      document.documentElement.scrollTop = 0;
      clearTimeout(timer);
      timer = null;
  }, 50);
}

// 节流函数（用户按钮点击响应）
export function throttle(func, wait) {
  let lastTime = null;
  let timeout;
  return function () {
      const context = this;
      const now = new Date();
      // 如果上次执行的时间和这次触发的时间大于一个执行周期，则执行
      if (now - lastTime - wait > 0) {
          // 如果之前有了定时任务则清除
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          func.apply(context, arguments);
          lastTime = now;
      } else if (!timeout) {
          timeout = setTimeout(() => {
              // 改变执行上下文环境
              func.apply(context, arguments);
          }, wait);
      }
  };
}

// 防抖函数（用于输入搜索）
export function debounce(func,wait){
  let timeout;
  return function(){
    const context = this;
    if(timeout) clearTimeout(timeout)
    timeout = setTimeout(()=>{
      func.apply(context,arguments);
    },wait);
  }
}