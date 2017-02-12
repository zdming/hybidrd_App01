/*
* @Author: zhongdm
* @Date:   2016-07-10 14:42:23
* @Last Modified by:   zhongdm
* @Last Modified time: 2016-07-10 14:48:13
*/

(function(angular){
  // 1.分类页面路由模块
  var app = angular.module('category.route',[
    'category.controllers']);

  // 2.分类页面路由规则配置。
  app.config(function($stateProvider){
     $stateProvider.state('tab.category',{
      url:'/category', //  /tab/category
      views:{
        'tab-category':{
          templateUrl:'./modules/category/view.html',
          controller:'categoryController'
        }
      }
     })
  })
})(angular)
