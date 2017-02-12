/*
* @Author: zhongdm
* @Date:   2016-07-11 11:18:15
* @Last Modified by:   zhongdm
* @Last Modified time: 2016-07-11 11:19:29
*/

(function(angular){
  'use strict';
  // 1.创建购物车服务模块

  var app = angular.module('cart.services',[]);

  // 2.创建服务
  app.factory('cartServices',function(){
    return{

    }
  }).factory('pageCache',function($cacheFactory){
      return $cacheFactory('page');
  }).factory('commonFactory',function(pageCache,$location){
      return{
        backUrl:function(url){
          pageCache.put('url',url);//这个用来保存页面
        },

        goBack:function(){
          $location.path(pageCache.get('url'));//这个用来跳转页面
        }
      }
    })


})(angular)
