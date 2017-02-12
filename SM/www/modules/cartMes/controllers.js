/**
 * Created by Administrator on 2017/2/10.
 */
(function(angular){
    'use strict';
    var app=angular.module('cartMes.controllers',['cartMes.services']);
    app.controller('cartMesController',function($scope,$rootScope,$sce,carMenuFactory){
        //ion-view加载完毕，才执行方法
        $scope.$on('$ionicView.enter',function(){
            shareSonDate();
        });
        //‘分享’子菜单数据显示
        function shareSonDate(){
            var ShareSonKey=localStorage.getItem('ShareSonKey');
            if(ShareSonKey=='ag0'){
                //注意数据格式 http://www.cnblogs.com/leejersey/p/4579933.html
                $scope.items=
                    {
                        data:'<span>AngularJS 1.x official website:</span>' +
                            'https://angularjs.org/ <br>' +
                            '<span>AngularJS 2.x official website:</span>' +
                            'https://angular.io/ <br>'+
                            '<span>Google for Angular:</span>' +
                            'https://material.angularjs.org <br>'+
                            '<span>Angular UI:</span>' +
                            'http://angular-ui.github.io/ <br>'+
                            '<span>Angular of Chinese Forum:</span>' +
                            'http://www.angularjs.cn/ <br>'+
                            '<span>AngularJS of Chinese document:</span>'+
                            'http://www.apjs.net/'
                        ,
                        title:'Learning Website',
                        src:'img/cartMes/cartMes1.jpg',
                        alt:'cartMes1',
                        header:'Angular'
                    }
            };
            if(ShareSonKey=='ag1'){
                //注意数据格式 http://www.cnblogs.com/leejersey/p/4579933.html
                $scope.items=
                {
                    data:'<span>ng-bind</span>' +
                    '<p>1.Used to solve the problem of flashing<br>angular analytical expression</p>' +
                    '<p>2.Written in a double label property location,<br> the final browser will be the value specified by<br> the ng-bind to the location of its label innerHTML</p>' +
                    '<span>ng-cloak</span>' +
                    '<p>1.Angular will remove the name of the <br>class named ng-cloak after loading</p>'+
                    '<p>2.We have previously added a display:<br>none style to this class</p>'+
                    '<span>ng-bind-html</span>' +
                    '<p>1.Since direct rendering of<br> HTML will have security issues,<br>angular does not allow us to <br>render HTML strings directly</p>'+
                    '<p>2.If you want to render a HTML string, <br>you need to use the ngSanitize module</p>'
                    ,
                    title:'directive',
                    src:'img/cartMes/cartMes1.jpg',
                    alt:'cartMes1',
                    header:'CSS3'
                }

            };
            if(ShareSonKey=='c0'){
                //注意数据格式 http://www.cnblogs.com/leejersey/p/4579933.html
                $scope.items=
                {
                    data:'<span>attribute selectors</span>' +
                    '<p>1. a[href="a.ming"--Be equal to</p>' +
                    '<p>2. a[href*="ming"]--contain</p>' +
                    '<p>3. a[href^="ming"]--begin</p>' +
                    '<p>4. a[href$="ming"]--end</p>' +
                    '<span>Pseudo class selectors</span>' +
                    '<p>1. nth-child()</p>' +
                    '<p>2. last-child()</p>' +
                    '<p>3. nth-last-child()</p>' +
                    '<span>Pseudo element selectors</span>' +
                    '<p>1. ::first-letter</p>' +
                    '<p>2. ::first-line</p>'
                    ,
                    title:'selectors',
                    src:'img/cartMes/cartMes1.jpg',
                    alt:'cartMes1',
                    header:'CSS3'
                }

            };
            if(ShareSonKey=='h0'){
                //注意数据格式 http://www.cnblogs.com/leejersey/p/4579933.html
                $scope.items=
                {
                    data:'<span>attribute selectors</span>' +
                    '<p>1.document.querySelector().classList.add</p>' +
                    '<p>2.document.querySelector().classList.remove</p>' +
                    '<p>3.document.querySelector().classList.toggle</p>' +
                    '<p>4.document.querySelector().classList.contains</p>'
                    ,
                    title:'Class operationv',
                    src:'img/cartMes/cartMes1.jpg',
                    alt:'cartMes1',
                    header:'CSS3'
                }

            };
            if(ShareSonKey=='h1'){
                //注意数据格式 http://www.cnblogs.com/leejersey/p/4579933.html
                $scope.items=
                {
                    data:'<span>Document extension</span>' +
                    '<p>1. document.querySelector()</p>' +
                    '<p>2. document.querySelectorAll();</p>'
                    ,
                    title:'Document extension',
                    src:'img/cartMes/cartMes1.jpg',
                    alt:'cartMes1',
                    header:'CSS3'
                }

            };
            if(ShareSonKey=='js0'){
                //注意数据格式 http://www.cnblogs.com/leejersey/p/4579933.html
                $scope.items=
                {
                    data:'<span>closure</span>' +
                    '<p>1. In order to prevent memory leaks, the need to exit the function before the use of local variables are deleted</p>' +
                    '<p>2. Accessing variables within a function to extend the life cycle of a variable</p>'+
                    '<p>3. Cache intermediate state value</p>'
                    ,
                    title:'closure',
                    src:'img/cartMes/cartMes1.jpg',
                    alt:'cartMes1',
                    header:'JavaScript'
                }

            };
            if(ShareSonKey=='js1'){
                //注意数据格式 http://www.cnblogs.com/leejersey/p/4579933.html
                $scope.items=
                {
                    data:'<img src="img/cartMes/cartMes_prototype1.jpg">' +
                    '<img src="img/cartMes/cartMes_prototype2.jpg">' +
                    '<img src="img/cartMes/cartMes_prototype3.jpg">',
                    title:'prototype',
                    src:'img/cartMes/cartMes1.jpg',
                    alt:'cartMes1',
                    header:'JavaScript'
                }

            };
            if(ShareSonKey=='js2'){
                //注意数据格式 http://www.cnblogs.com/leejersey/p/4579933.html
                $scope.items=
                {
                    data:'<span>Bubble-capture</span>' +
                    '<p>1.From the most specific event object to the least specific event target</p>' +
                    '<p>IE 6.0:div -> body -> html -> document</p>' +
                    '<p>2.The most imprecise objects (document objects) start to trigger, and then to the most precise</p>' +
                    '<img src="img/cartMes/cartMes_bubble.jpg">'
                    ,
                    title:'Bubble-capture',
                    src:'img/cartMes/cartMes1.jpg',
                    alt:'cartMes1',
                    header:'JavaScript'
                }

            };
            if(ShareSonKey=='bt0'){
                //注意数据格式 http://www.cnblogs.com/leejersey/p/4579933.html
                $scope.items=
                {
                    data:'<span>Media Query</span>' +
                    '<p>1. @media (min-width: 992px) and (max-width: 1199px){}</p>' +
                    '<p>2. @media screen and (min-width: 1200px){}</p>'+
                    '<span>container</span>' +
                    '<p>The definition of a fixed width and center of the heart</p>' +
                    '<span>row</span>' +
                    '<p>Through the left and right -15px, disable the 15px from the outside margin</p>'+
                    '<span>col-**-*</span>' +
                    '<p>col-xs-[columns]、col-sm-[columns]、col-md-[columns]、col-lg-[columns]</p>'+
                    '<p>xs:(<768px)、sm:(≥768px)、md:(≥992px)、lg:(≥1200px)</p>'+
                    '<span>hidden</span>' +
                    '<p>hidden-xs,hidden-sm,hidden-md,hidden-lg</p>'+
                    '<span>text-*</span>' +
                    '<p>text-center,text-left,text-right</p>'+
                    '<span>pull-*</span>' +
                    '<p> pull-left,pull-right</p>'
                    ,
                    title:'grid system',
                    src:'img/cartMes/cartMes1.jpg',
                    alt:'cartMes1',
                    header:'Bootstrap'
                }

            };
            $scope.items.data=$sce.trustAsHtml($rootScope.items.data);

            //当前页面设置
            $scope.Fun_goBack=function(){
            carMenuFactory.Fun_goBack();//返回上一页
          };
    }
    })
})(angular)
