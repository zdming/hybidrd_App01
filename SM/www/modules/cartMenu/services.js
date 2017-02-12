/**
 * Created by Administrator on 2017/2/9.
 */
(function(angular){
    'use strict';
    var app=angular.module('cartMenu.services',[]);
    app.factory('carMenuServices',function(){
        return {

        };
    }).factory('carMenuPage',function($cacheFactory){
      return $cacheFactory('page2');//增加一个$cacheFactory用来保存url地址
    }).factory('carMenuFactory',function(carMenuPage,$location){
      return{
        Fun_backUrl:function(url){
          carMenuPage.put('url',url);//这个用来保存页面
        },

        Fun_goBack:function(){
          $location.path(carMenuPage.get('url'));//这个用来跳转页面
        }
      }
    })
})(angular)
