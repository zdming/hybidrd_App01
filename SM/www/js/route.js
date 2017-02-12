/*
* @Author: huoqishi
* @Date:   2016-07-08 09:11:07
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-10 16:01:42
*/

(function(angular){
  'use strict';
  // 1.创建核心模块中的路由模块
  var app = angular.module('starter.route',[
    'guidePage.route',
    'tab.route',
    'home.route',
    'category.route',
    'cart.route',
    'account.route',
    'goodsList.route',
    //enjoyTab-子菜单
    'cartMenu.route',
    'cartMes.route'
    ]);

  // 2.配置主路由
  app.config(function($stateProvider,$urlRouterProvider){
   ///
   /// 不符合其他规则时，就跳转到指定路由，参数是路由的url中锚点值
   $urlRouterProvider.otherwise('/guidePage');
  })
})(angular)
