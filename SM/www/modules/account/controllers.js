/*
 * @Author:zhongdm
 * @Date:   2016-07-11 11:16:50
 * @Last Modified by:   zhongdm
 * @Last Modified time: 2016-07-11 16:04:16
 */

(function(angular) {
  'use strict';
  // 1.创建购物车控制器模块
  var app = angular.module('account.controllers', [
    'account.services'
  ]);
  //cartController

  // 2.创建购物车控制器
  app.controller('accountController', function($scope){
    //1.功能-头部轮播图
    //1.1保证Dom结构存在,监听$ionicView.enter，表示监听<ion-view>已经插入页面
    $scope.$on('$ionicView.enter',function(){
      headerSlide();
    });
    //1.2 初始化swiper Swiper(id名,{})  ，要先保证Dom结构存在
    function headerSlide(){
      var headerSwiper=new Swiper('#headerSlider2',{
        autoplay:1000
      });
    };
    $scope.headerSlideData=[
      {
        src:'img/account/account_topPic1.jpg',
        alt:'topPic1'
      },
      {
        src:'img/account/account_topPic2.jpg',
        alt:'topPic2'
      },
      {
        src:'img/account/account_topPic3.jpg',
        alt:'topPic3'
      },
      {
        src:'img/account/account_topPic4.jpg',
        alt:'topPic4'
      },
      {
        src:'img/account/account_topPic5.jpg',
        alt:'topPic5'
      }
    ]
    $scope.sportDate= [
      {
        title: "运动",
        iconClass:"ion-ios-basketball-outline",
        imgData: [
          {
            src: "img/account/account_sport2.jpg",
            alt: "sport2",
            sportClass: "sport2"
          },
          {
            src: "img/account/account_sport1.jpg",
            alt: "sport1",
            sportClass: "sport"
          },
          {
            src: "img/account/account_sport3.jpg",
            alt: "sport3",
            sportClass: "sport"
          }
        ]
      },
      {
        title: "绘画",
        iconClass:"ion-edit",
        imgData: [
          {
            src: "img/account/account_paint1.jpg",
            alt: "sport2",
            sportClass: "sport2"
          },
          {
            src: "img/account/account_paint2.jpg",
            alt: "sport1",
            sportClass: "sport"
          },
          {
            src: "img/account/account_paint3.jpg",
            alt: "sport3",
            sportClass: "sport"
          }
        ]
      },
      {
        title: "阅读",
        iconClass:"ion-ios-book",
        imgData: [
          {
            src: "img/account/account_book1.jpg",
            alt: "sport2",
            sportClass: "sport2"
          },
          {
            src: "img/account/account_book2.jpg",
            alt: "sport1",
            sportClass: "sport"
          },
          {
            src: "img/account/account_book3.jpg",
            alt: "sport3",
            sportClass: "sport"
          }
        ]
      }
    ]


  })
})(angular)
