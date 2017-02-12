/*
 * @Author: zhongdm
 * @Date:   2016-07-10 16:03:05
 * @Last Modified by:   zhongdm
 * @Last Modified time: 2016-07-10 17:32:17
 */

(function(angular) {
  'use strict';
  // 1.商品列表的控制器模块
  var app = angular.module('category.controllers', [
    'category.services'
  ]);
  //goodsListController
  // 2.创建商品列表控制器
  app.controller('categoryController', function($scope,commonFactory) {
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

    $scope.projectPicData=[{
      alt: "project1",
      src: "img/category/category_project1.jpg"
    }, {
      alt: "project2",
      src: "img/category/category_project2.jpg"
    }, {
      alt: "project3",
      src: "img/category/category_project3.jpg"
    }, {
      alt: "project4",
      src: "img/category/category_project4.jpg"
    }, {
      alt: "project5",
      src: "img/category/project5.png"
    },
      {
      alt: "project6",
      src: "img/category/category_project6.png"
    }]
    $scope.headerSlideData = [{
      alt: "flower1",
      src: "img/category/category_banner1.jpg"
    }, {
      alt: "flower2",
      src: "img/category/category_banner2.jpg"
    }, {
      alt: "flower3",
      src: "img/category/category_banner3.jpg"
    }, {
      alt: "flower4",
      src: "img/category/category_banner4.jpg"
    }, {
      alt: "flower5",
      src: "img/category/category_banner5.jpg"
    }];
  })
})(angular)
