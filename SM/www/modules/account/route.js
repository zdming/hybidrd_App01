/*
* @Author: zhongdm
* @Date:   2016-07-11 11:13:06
* @Last Modified by:   zhongdm
* @Last Modified time: 2016-07-11 11:27:05
*/

(function(angular){
  'use strict';
  // 1.创建购物车路由模块
  var app = angular.module('account.route',[
    'account.controllers'
    ]);

  // 2.创建路由规则
  app.config(function($stateProvider){
     $stateProvider.state('tab.account',{
      url:'/account',
      views:{
        'tab-account':{
       templateUrl:'./modules/account/view.html',
        controller:'accountController'
        }
      }
     })
  })
})(angular)
