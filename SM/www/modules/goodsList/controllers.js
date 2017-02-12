/*
 * @Author: zhongdm
 * @Date:   2016-07-10 16:03:05
 * @Last Modified by:   zhongdm
 * @Last Modified time: 2016-07-10 17:32:17
 */

(function(angular) {
    'use strict';
    // 1.商品列表的控制器模块
    var app = angular.module('goodsList.controllers', [
        'category.services'
    ]);
    //goodsListController
    // 2.创建商品列表控制器
    app.controller('goodsListController', function($scope) {
    //3.功能-头部轮播图
    //3.1保证Dom结构存在,监听$ionicView.enter，表示监听<ion-view>已经插入页面
      $scope.$on('$ionicView.enter',function(){
        headerSlide();
      });
    //3.2 初始化swiper Swiper(id名,{})  ，要先保证Dom结构存在
      function headerSlide(){
        var headerSwiper=new Swiper('#headerSlider',{
          autoplay:1000
        });
      };

      $scope.headerSlideData = [{
        alt: "双十一预热主场会",
        src: "img/home/home-headerSlide-1.jpg"
      }, {
        alt: "11月11天家电低价不停歇",
        src: "img/home/home-headerSlide-2.jpg"
      }, {
        alt: "家具盛典 好货提前抢",
        src: "img/home/home-headerSlide-3.jpg"
      }, {
        alt: "IT抢券节",
        src: "img/home/home-headerSlide-4.jpg"
      }, {
        alt: "潮流数码 双11爽购攻略",
        src: "img/home/home-headerSlide-5.jpg"
      }];
    })
})(angular)
