import {
    wxRequest
} from '../utils/wxrequest'; 

<<<<<<< HEAD
// const apimall = 'http://192.168.1.251:8089/mobile';
const apimall = 'https://m.51jrq.com/mobile2';
=======
const apimall = 'http://192.168.1.251:8089/mobile';
// const apimall = 'https://m.51jrq.com/mobile2';
>>>>>>> 1b6d0ccca60c29d4c150ec3f6a55dde2d61c2d49
const apiGps = 'http://apis.map.qq.com/ws/geocoder/v1'

//得到首页banner图片列表
const getMobileHomeBanner = (params) => wxRequest(params, apimall + '/api/ad_show/getMobileHomeBanner');

//获取猎头职位
const  getCompanyjob = (params) => wxRequest(params, apimall + '/api/companyjob');

//逆地址解析
const getCityName = (params) => wxRequest(params, apiGps);

//  获取我的收藏及投递记录
const  getCollectJob = (params) => wxRequest(params, apimall + '/api/persoanl');

// 获取简历信息
const  getResumeInfo = (params) => wxRequest(params, apimall + '/api/my');

// 获取数据字典数据
const  getDictData = (params) => wxRequest(params, apimall + '/api/dictionary');

// 用户登录
const  loginIn = (params) => wxRequest(params, apimall + '/api/login');

// 个人用户注册获取短信验证码
const  getVerifyCode = (params) => wxRequest(params, apimall + '/api/regphone');

// 修改头像
const  changeHeadImg = (params) => wxRequest(params, apimall + '/api/pimg');

module.exports = {
    getMobileHomeBanner,
    getCompanyjob,
    getCityName,
    getCollectJob,
    getResumeInfo,
    getDictData,
    loginIn,
    getVerifyCode,
    changeHeadImg 
}
  