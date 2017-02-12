/**
 * Created by Administrator on 2017/2/9.
 */
(function(angular){
    'use strict';
    var app=angular.module('cartMenu.controllers',['cartMenu.services','ionic']);
    app.controller('cartMenuController',function($scope,$location,commonFactory,carMenuFactory) {
        $scope.data = {
            showDelete: false
        };
        $scope.edit = function (item) {
            alert('Edit Item: ' + item.id);
        };
        $scope.share = function (item) {
            alert('Share Item: ' + item.id);
        };
        $scope.moveItem = function (item, fromIndex, toIndex) {
            $scope.items.splice(fromIndex, 1);
            $scope.items.splice(toIndex, 0, item);
        };
        $scope.onItemDelete = function(item){
            $scope.items.splice($scope.items.indexOf(item), 1);

        }
        //$destroy,$ionicView.afterEnter
        $scope.$on('$ionicView.beforeEnter',function(){
            shareData();
        });
        //window.location.href=url;
        //location.replace(location.href);
        //‘分享’菜单数据显示
        function shareData(){
            //var strStoreDate = window.localStorage? localStorage.getItem("menuTitle"): Cookie.read("menuTitle");
            var shareKey=localStorage.getItem('shareKey');
            if(shareKey==0){
                $scope.headerDate={header:'Angular'};
                $scope.items = [
                    { id: 'ag0',title:'Learning Website',src:'img/cartMenu/cartMenu_ag.jpg',alt:'ag0' },
                    { id: 'ag1',title:'directive',src:'img/cartMenu/cartMenu_ag.jpg',alt:'ag1'},
                ];
            };
            if(shareKey==1){
                $scope.headerDate={header:'CSS3'};
                $scope.items = [
                    { id: 'c0',title:'selector',src:'img/cartMenu/cartMenu_c3.jpg',alt:'c3' },
                ];
            };
            if(shareKey==2){
                $scope.headerDate={header:'HTML5'};
                $scope.items = [
                    { id: 'h0',title:'Class operation',src:'img/cartMenu/cartMenu_h5.jpg',alt:'h5' },
                    { id: 'h1',title:'Document extension',src:'img/cartMenu/cartMenu_h5.jpg',alt:'h5'},
                ];
            };
            if(shareKey==3){
                $scope.headerDate={header:'JavaScript'};
                $scope.items = [
                    { id: 'js0',title:'closure',src:'img/cartMenu/cartMenu_js.jpg',alt:'ag0' },
                    { id: 'js1',title:'prototype',src:'img/cartMenu/cartMenu_js.jpg',alt:'ag1'},
                    { id: 'js2',title:'Bubble-capture',src:'img/cartMenu/cartMenu_js.jpg',alt:'ag2' },
                ];
            };
            if(shareKey==4){
                $scope.headerDate={header:'Bootstrap'};
                $scope.items = [
                    { id: 'bt0',title:'grid system',src:'img/cartMenu/cartMenu_bt.jpg',alt:'h5' },
                ];
            };
        }
        //‘分享’子菜单localStorage设置
        $scope.getSonKey=function(ShareSonKey){
            if(window.localStorage){
                localStorage.setItem('ShareSonKey',ShareSonKey);
                console.log(localStorage.getItem('ShareSonKey'))
            }else{
                console.log("can't use localStorage");
            }
        }

       //当前cartMenu页面设置
      $scope.goBack=function(){
        commonFactory.goBack();
      };
       //作为cartMes的返回页面  添加参数Replies $ionicHistory

        $scope.$on('$ionicView.beforeEnter',function(){
          carMenuFactory.Fun_backUrl($location.url());//保存当前页面的url

        })
    });
})(angular)
