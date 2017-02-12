/*
* @Author: huoqishi
* @Date:   2016-07-08 09:15:08
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-08 09:17:41
*/

(function(angular){
  'use strict';
  // 1.创建核心模块中的angular全局变量模块
  var app = angular.module('starter.global',[]);

  // 2.创建这个angular全局对象
  // 第一个参数，是个名字
  // 第二个参数是一个对象
  app.constant('GlobalVariable',{
    SERVER_PATH:'http://www.itcast.cn',
    VERSION: '1.0.0'
  })
})(angular)