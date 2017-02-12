/**
 * Created by Administrator on 2017/2/10.
 */
(function(angular){
    'use strict';
    var app=angular.module('cartMes.route',['cartMes.controllers']);
    app.config(function($stateProvider){
        $stateProvider.state('cartMes',{
            url:'/cartMes',
            templateUrl:'./modules/cartMes/view.html',
            controller:'cartMesController'
        })
    })

})(angular)