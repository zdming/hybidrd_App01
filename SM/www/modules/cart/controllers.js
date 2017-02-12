/*
* @Author: zhongdm
* @Date:   2016-07-11 11:16:50
* @Last Modified by:   zhongdm
* @Last Modified time: 2016-07-11 11:19:01
*/

(function(angular){
  'use strict';
  // 1.创建购物车控制器模块
  var app = angular.module('cart.controllers',[
    'cart.services']);
  //cartController

  // 2.创建购物车控制器
  app.controller('cartController',function($scope,commonFactory,$location){
    $scope.shareDate=[
      {
        id:0,
        src:"img/cart/cart_enjoy1.jpg",
        shareSkill:"Angular",
        shareName:"zhongdm",
        enjoyHref:"#/angularMenu"
      },
      {
        id:1,
        src:"img/cart/cart_enjoy2.jpg",
        shareSkill:"CSS3",
        shareName:"zhongdm",
        enjoyHref:"#/angularMenu"
      },
      {
        id:2,
        src:"img/cart/cart_enjoy3.jpg",
        shareSkill:"HTML5",
        shareName:"zhongdm",
        enjoyHref:"#/angularMenu"
      },
      {
        id:3,
        src:"img/cart/cart_enjoy4.jpg",
        shareSkill:"JavaScript",
        shareName:"zhongdm",
        enjoyHref:"#/angularMenu"
      },

      {
        id:4,
        src:"img/cart/cart_enjoy6.jpg",
        shareSkill:"Bootstrap",
        shareName:"zhongdm",
        enjoyHref:"#/angularMenu"
      },

    ];

    $scope.getKey=function(shareId){
      if(window.localStorage){
        localStorage.setItem("shareKey", shareId)
        console.log(  localStorage.getItem("shareKey"));
      }else{
        //Cookie.write("shareKey", shareId);
        console.log("can't use localStorage");
      }

    };

    //作为cartMenu的返回页面，页面加载的时候就把当前的url保存下来
    $scope.$on('$ionicView.beforeEnter',function(){

      commonFactory.backUrl($location.url());//保存当前页面的url

    })
  })
})(angular)
