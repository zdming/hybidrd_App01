/**
 * Created by Administrator on 2017/2/9.
 */
(function(angular){
    'use strict';
    var app=angular.module('cartMenu.route',['cartMenu.controllers']);
    app.config(function($stateProvider){
        $stateProvider.state('angularMenu',{
            url:'/angularMenu',
            templateUrl:'./modules/cartMenu/view.html',
            controller:'cartMenuController'
        })
    })
})(angular)