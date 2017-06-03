//对模块加载进行基本设置
requirejs.config({

    //基本路径
    // baseUrl:"../",      //相对于index.html的基本路径；当不设baseUrl但设置了data-main时，baseUrl就是
    shim:{
        //使用插件时，依赖的是paths内的jquery，可保证，在jquery加载完毕后才会加载插件
        'top':['jquery']           //又或者定义一个有依赖的模块，即在top.js中，define()函数内的第一个参数写上jquery
    },

    //配置加载模块的真实路径
    paths:{
        'jquery':"../jQuery/jquery-1.12.3",
        // 'top':"top",
        'template':'template-debug'
    }
})

    //设置路由判断，按需加载，使用模块； 或者每一个页面对应写一个配置文件，加载不同的模块
require(["jquery",'top'],function($,top){

    top.init();

    //路由设置
    // var path = location.pathname;
    // if(path == '/project_hyh/html/productDetaills.html'){
    //     top.init();
    // }

})