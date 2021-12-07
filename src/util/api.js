import axios from './axiosRequest';

// 接口管理
const portAPI = {
  // 分享接口
  getShare(data) {
    return axios.get(`/wx/weixinShare?url=${data.url}`, { ...data });
  },
  // 获得书籍列表信息
  get_book_data(data) {
    // 参数：cataidx 栏目id
    return axios.get(`/ys/touch/ci/video/webwap/rest/read/cat/category/cntlist/9/${data.cataidx}/1/1000`);
  },
  // 获得音频列表
   get_audio_data(data) {
       // 参数：cataidx：栏目id，pagenum：分页，pagesize：分页数据，clientid：1001
    return axios.get('/ys/touch/ci/video/V1/listCatalogContent', { params: { ...data } });
  },
  // 获得视频列表
  get_video_data(data) {
      // 参数 cataids：栏目id，pagenum：分页，pagesize：分页数据，cataidx：栏目id
    return axios.get('/ys/touch/ci/video/rest/B1/9/V1/listVideoCatalogCntList', { params: { ...data } });
  },
  // 获得书籍详情
  get_bdetail_data(data) {
      // 参数cntindex 书籍id
    return axios.get(`/ys/touch/ci/video/webwap/rest/read/cnt/cntdetail/9/${data.cntindex}/0`);
  },
  // 获得听书详情
   get_adetail_data(data) {
       // 参数：cntidx 书籍id cataidx：栏目id
    return axios.get('/ys/touch/ci/video/V1/getCntDetail', { params: { ...data } });
  },
  // 获取视频详情
  get_vdetail_data(data) {
      // 参数 cntidx 书籍id cataidx：栏目id  pkgpageidx：128526 包月ID
    return axios.get('/ys/touch/ci/video/rest/B1/9/V1/getVideoContentDetail', { params: { ...data } });
  },
};
export default portAPI;
