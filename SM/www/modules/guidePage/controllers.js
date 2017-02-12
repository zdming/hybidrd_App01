/*
 * @Author: zhongdm
 * @Date:   2016-07-08 09:43:48
 * @Last Modified by:   zhongdm
 * @Last Modified time: 2016-07-10 09:40:07
 */

(function(angular) {
    'use strict';
    // 1.创建引导页的控制器模块
    var app = angular.module('guidePage.controllers', [

        'guidePage.services'
    ])

    // 2.创建控制器
    app.controller('guidePageController', function(
        $scope,
        $state// 用来进路由跳转的
    ) {
        var mySwiper = new Swiper('#guideSlide', {
            // autoplay: 5000, //可选选项，自动滑动
            onSlideChangeEnd: function(swiper) {
                // alert('事件触发了;');
                console.log("swiper"+swiper);
                var activeIndex = swiper.activeIndex;
                var slide= document.getElementById('tips-'+(activeIndex+1));
                console.log("slide"+slide);
                // 移除hidden样式让文字显示，添加guide-show样式让文字有动画.
                angular.element(slide).removeClass('hidden').addClass('guide-show');
            }
        });

        // 跳转到首页
        $scope.goHome=function(){
            // go 方法需要一个参数，是路由规则的名字
            // 最终会跳转到相应的路由中去
            $state.go('tab.home');
        }
    });

})(angular)
