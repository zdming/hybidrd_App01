/*
* @Author: huoqishi
* @Date:   2016-07-08 09:20:12
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-08 09:23:40
*/

(function(angular){
  'use strict';
  // 1.创建核心模块中的兼容性配置模块
  var app = angular.module('starter.config',[]);

  // 2.进行配置
  app.config(function($ionicConfigProvider){
    
    // 配置tabs选项卡在屏幕显示的位置，bottom表示，显示在下方.
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
  })
})(angular)