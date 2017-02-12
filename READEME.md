# 移动App第4天

## 1.tab模块
  ### $state  //这是ui-router提供的服务
    - $state.go(),跳转到指定的路由，参数是路由规则的名字。
    - $state.go('tab.home')// 跳转到首页
  ### $urlRouterProvider.otherwise('/tab/home');
    - 当不匹配其他规则时，跳转到指定路由，参数是路由url中的锚点值.

## 2.首页模块

### 2.1.首页轮播图
### 2.2.首页京东头条轮播图
### 2.3.首页限时秒杀
### 2.4.顶部颜色渐变
### 2.5.回到顶部功能

## 动画
http://daneden.github.io/animate.css/

## 3.分类页面实现
### 3.1.基本功能@
### 3.2.图片延迟加载
  - 也称之为懒加载.
  - 本质是动态的设置图片的src属性，让它去请求相应的图片.

  - jquery.lazyload 不能在ionic中使用
    + [链接](http://www.cnblogs.com/yzg1/p/5051554.html)
  - angular-imglazyload
    + [链接](https://www.npmjs.com/package/angular-imglazyload)

  - ionic-image-lazy-load（专门的Ionic图片延迟加载插件）
    + [链接](https://github.com/paveisistemas/ionic-image-lazy-load)
    + 1.安装: `bower install ion-image-lazy-load --save`
    + 2.在index.html中引入相应的js文件
    + 3.记得在app.js主模块中引入这个模块,模块名：`ionicLazyLoad`
    + 4.ion-content组件上加上lazy-scroll指令，注意lazy-scroll指令只能作用于ionic-content组件上。
    + 5.把滚动容器中所有img标签的src属性替换为image-lazy-src
    + 一些属性
      * image-lazy-src  // 指定一个图片路径
      * image-lazy-loader="lines" // 指定延迟加载图标类型
      * image-lazy-distance-from-bottom-to-load="100" 距离屏底部像素时开始加载.


## 4.商品列表页面
### 4.0 promise ,只是改变了我们之前的书写形式
  - 普罗米修斯

### 4.1.基本数据展示
  - $ionicLoading,// 用于显示加载更多的模态框
  - $ionicLoading.show({
        template: '正在加载数据.....'
      });
  - $ionicLoading.hide()

### 4.2.商品列表页面下拉刷新功能
  - 使用ion-refersher组件
  - 使用方式:
    1、  在数据列表顶部添加ion-refersher标签，然后配置里面的属性
      + 属性:
        * pulling-text="获取最新数据..."
        * refreshing-text="正在加载"
        * on-refresh="refreshGoodsList()" // 给一个方法，在下拉后松开时执行
    2、  实现获取数据触发的方法:refreshGoodsList()这个是需要自己实现的方法
    3、  在获取数据完毕后进行广播($broadcast),以隐藏下拉刷新的元素.\
      * $scope.$broadcast('scroll.refreshComplete');// 这里广播的名字是固定的


### 4.3.上拉加载更多
  - 使用ion-infinite-scroll 
  - 使用方式：
    1. 添加ion-infinite-scroll标签，然后配置里面的属性
      + 属性:
        * on-infinite="loadMoreGoodsList()" // 指定上拉时要执行的方法
        * distance="1%" ,指定距离屏幕多少时执行上拉指定的方法。
    2. 实现获取数据触发的方法
    3. 在获取数据完毕后停止广播
      - $scope.$broadcast('scroll.infiniteScrollComplete');

### css动画库(扩展)
  - http://daneden.github.io/animate.css/

### 时间够的话就介绍一下sublime插件的安装(扩展)
