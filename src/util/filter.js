// 时间戳 xxxx.xx.xx xx:xx 时间格式：20200820175002
const formatTime = (time = '') => {
  const Year = time.slice(0, 4);
  const Month = time.slice(4, 6);
  const Day = time.slice(6, 8);
  const hour = time.slice(8, 10);
  const fen = time.slice(10, 12);
  return `${Year}.${Month}.${Day} ${hour}:${fen}`;
};
// 时间戳转换  xxxx-xx-xx xx:xx  时间格式：时间戳163090909090904
const formatTime1 = (time = '') => {
  const date = new Date(time);
  const Year = date.getFullYear();
  const Month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const Day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hour = date.getHours();
  const fen = date.getMinutes();
  return `${Year}.${Month}.${Day} ${hour}:${fen}`;
};
export default {
  formatTime,
  formatTime1,
};
