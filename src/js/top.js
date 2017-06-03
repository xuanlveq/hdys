//这个模块依赖于jquery和template这两个模块
define(["jquery","template"],function($,template){

    return {
        init:function(){
            // $('.box').append(this.template.topPage());
            // $('.box').append('<div class="text">这是分页</div>');
            // $('.box').load('./productlist.html');
            $('body').append(this.template.topPage());
        },

        template:{
            topPage: template.compile(
                    
                    '<!-- 头部：登陆搜索、顶部导航 -->\
                    <div class="global_nav">\
                        <div class="w1200">\
                            <div class="info_l">\
                                <a href="#"><strong>返回首页</strong></a>\
                                <a href="#">收藏网页</a> \
                            </div>\
                            <div class="info_r">\
                                <div class="info_r_top">\
                                    <ul class="info_r_top1">\
                                        <li>您好，欢迎光临韩都衣舍！</li>\
                                        <li>\
                                            <a href="landing.html" target="blank">登陆</a>\
                                            <a href="./signIn.html" class="active" target="blank">注册</a></li>\
                                        <li class="gwc"><a href="#">购物车</a></li>\
                                    </ul>\
                                    <ul class="info_r_top2">\
                                        <li><a href="#">在线客服</a></li>\
                                        <li><a href="#">帮助中心</a></li>\
                                        <li id="yc_info">\
                                            <a href="#"><s></s>网站导航</a>\
                                        </li>\
                                    </ul>\
                                </div>\
                                <div class="yc_nav">\
                                    <div class="hot">\
                                        <h1>大家都在买</h1>\
                                        <ul class="flex_wrap">\
                                            <li><a href="#">t恤</a></li>\
                                            <li><a href="#">牛仔裤</a></li>\
                                            <li><a href="#">卫衣绒衫</a></li>\
                                            <li><a href="#">连衣裙</a></li>\
                                            <li><a href="#">毛衣针织</a></li>\
                                            <li><a href="#">休闲套装</a></li>\
                                        </ul>\
                                    </div>\
                                    <div class="women">\
                                        <h1>女装Women</h1>\
                                        <ul class="flex_wrap">\
                                            <li><a href="#">韩风快时尚女装</a></li>\
                                            <li><a href="#">韩风甜美少女装</a></li>\
                                            <li><a href="#">韩风名媛时尚女装</a></li>\
                                            <li><a href="#">韩风大码女装</a></li>\
                                            <li><a href="#">韩风快时尚妈妈装</a></li>\
                                            <li><a href="#">东方复古设计师女装</a></li>\
                                            <li><a href="#">欧美浪漫田园风女装</a></li>\
                                            <li><a href="#">欧美快时尚女装</a></li>\
                                        </ul>\
                                    </div>\
                                    <div class="men">\
                                        <h1>男装Men</h1>\
                                        <ul>\
                                            <li><a href="#">韩风快时尚男装</a></li>\
                                            <li><a href="#">东方禅意设计师男装</a></li>\
                                            <li><a href="#">欧美街头清潮男装</a></li>\
                                        </ul>\
                                    </div>\
                                    <div class="child">\
                                        <h1>童装Children</h1>\
                                        <ul>\
                                            <li><a href="#">行风快时尚童装</a></li>\
                                            <li><a href="#">东方简约设计童装</a></li>\
                                        </ul>\
                                    </div>\
                                    <div class="help">\
                                        <h1>帮助中心Help</h1>\
                                        <ul class="flex_wrap">\
                                            <li><a href="#">会员制度</a></li>\
                                            <li><a href="#">售后服务</a></li>\
                                            <li><a href="#">购物流程</a></li>\
                                            <li><a href="#">关于发票</a></li>\
                                            <li><a href="#">配送方式</a></li>\
                                            <li><a href="#">韩都招聘</a></li>\
                                        </ul>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="w1200">\
                        <div id="hd">\
                            <div class="hd_3">\
                                <div class="hd_3_logo"><a href="#"></a></div>\
                                <div class="hd_3_search">\
                                    <div class="hd_3_search_div">\
                                        <form>\
                                            <input type="text" id="s_input" placeholder="春装特卖专区 满299减100"><button id="s_btn">搜&nbsp;索</button>\
                                        </form>\
                                    </div>\
                                    <div>\
                                        <ul>\
                                            <li><a href="#">韩风女装</a><span> | </span></li>\
                                            <li><a href="#">可爱童装</a><span> | </span></li>\
                                            <li><a href="#">简约女装</a><span> | </span></li>\
                                            <li><a href="#">甜美女装</a><span> | </span></li>\
                                            <li><a href="#">时尚妈妈</a><span> | </span></li>\
                                            <li><a href="#">崔范锡系列</a></li>\
                                        </ul>\
                                    </div>\
                                </div>\
                                <div class="hd_3_ewm">\
                                    <img src="../img/ewm.png">\
                                    <span>关注微信有福利</span>\
                                </div>\
                            </div>\
                            <div class="hd_nav">\
                                <ul class="hd_nav_ul">\
                                   <li><a href="#">2017夏装新品</a></li> \
                                   <li><a href="#">团购批发</a></li> \
                                   <li class="nav_ul_right">\
                                        <a href="#">招兵买马</a>\
                                   </li>\
                                   <li class="nav_ul_right zixun">\
                                        <a href="#">韩都资讯</a><s></s>\
                                    </li>\
                                   <li class="nav_ul_right huiyuan">\
                                        <a href="#">会员俱乐部</a><s></s>\
                                   </li> \
                                </ul>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="zhenrenx">\
                        <ul>\
                            <li><a href="#">韩都真人秀</a></li>\
                        </ul>\
                    </div>\
                    <div class="sheji">\
                        <ul>\
                            <li><a href="#">韩都设计</a></li>\
                            <li><a href="#">品牌故事</a></li>\
                        </ul>\
                    </div>\
                    <!-- 轮播图内的左侧导航 -->\
                    <div class="left_nav">\
                        <h2>全部商品分类</h2>\
                        <ul class="mainlist">\
                            <li>\
                                <h3><i><img src="../img/tb1.png"><img src="../img/tb01.png"></i>全部商品分类</h3>\
                                <a href="#">本周更新</a>\
                                <a href="#">按价格</a>\
                                <a href="#">按销量</a>\
                                <div class="chuang">\
                                    <a href="#"><img src="../img/nana.png"></a>\
                                    <a href="#"><img src="../img/anma.png"></a>\
                                    <a href="#"><img src="../img/hstyle.png"></a>\
                                    <a href="#"><img src="../img/zg.png"></a>\
                                    <a href="#"><img src="../img/forqueen.png"></a>\
                                    <a href="#"><img src="../img/mini.png"></a>\
                                    <a href="#"><img src="../img/soneed.png"></a>\
                                    <a href="#"><img src="../img/hp.png"></a>\
                                    <a href="#"><img src="../img/hanyunyixiang.png"></a>\
                                    <a href="#"><img src="../img/dx1.png"></a>\
                                    <a href="#"><img src="../img/ytxz.png"></a>\
                                    <a href="#"><img src="../img/guoya.png"></a>\
                                    <a href="#"><img src="../img/guoya.png"></a>\
                                    <a href="#"><img src="../img/sulv.png"></a>\
                                    <a href="#"><img src="../img/zc.png"></a>\
                                </div>\
                            </li>\
                            <li>\
                                <h3><i><img src="../img/tb2.png"><img src="../img/tb02.png"></i>精选推荐</h3>\
                                <a href="#">连衣裙</a>\
                                <a href="#">潮流爆款</a>\
                                <a href="#">品牌特惠</a>\
                                <div class="chuang2">\
                                    \
                                </div>\
                            </li>\
                            <li>\
                                <h3><i><img src="../img/tb3.png"><img src="../img/tb03.png"></i>潮流女装</h3>\
                                <a href="#">短外套</a>\
                                <a href="#">T恤</a>\
                                <a href="#">牛仔裤</a>\
                                <div class="chuang3">\
                                    \
                                </div>\
                            </li>\
                            <li>\
                                <h3><i><img src="../img/tb5.png"><img src="../img/tb05.png"></i>可爱童装</h3>\
                                <a href="#">童装新品</a>\
                                <a href="#">套装</a>\
                                <a href="#">毛衣/针织</a>\
                                <div class="chuang4">\
                                    \
                                </div>\
                            </li>\
                            <li>\
                                <h3><i><img src="../img/tb6.png"><img src="../img/tb06.png"></i>时尚妈妈</h3>\
                                <a href="#">T恤</a>\
                                <a href="#">针织衫</a>\
                                <a href="#">衬衫</a>\
                                <div class="chuang5">\
                                    \
                                </div>\
                            </li>\
                            <li>\
                                <h3><i><img src="../img/w.png"></i>韩风男装</h3>\
                                <a href="#">上装</a>\
                                <a href="#">下装</a>\
                                <a href="#">全部商品</a>\
                                <div class="chuang6">\
                                </div>\
                            </li>\
                            <li>\
                                <h3><i><img src="../img/tb8.png"></i>明星同款</h3>\
                                <a href="#">全智贤同款</a>\
                                <a href="#">崔范锡系列</a>\
                                <div class="chuang7">\
                                </div>\
                            </li>\
                        </ul>\
                    </div>'

                )
        }
    }
})