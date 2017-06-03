//
$(function(){

    // 获取cookie，显示登陆用户
    var username = getCookie('username');
    if(username){
        $('#yonghuxinxi').html(username);
    }
    
    //顶部隐藏导航移入移出
    var $yc_nav = $('.yc_nav');
    $('#yc_info').on('mouseenter',function(){
        $yc_nav.show();
    }).on('mouseleave',function(){
        $yc_nav.hide();
    });

    $yc_nav.on('mouseenter',function(){
        $yc_nav.show();
    }).on('mouseleave',function(){
        $yc_nav.hide();
    });

    // 韩都真人秀
    $('.huiyuan').on('mouseenter',function(){
        $('.zhenrenx').show();
    }).on('mouseleave',function(){
        $('.zhenrenx').hide();
    });
    $('.zhenrenx').on('mouseenter',function(){
        $('.zhenrenx').show();
    }).on('mouseleave',function(){
        $('.zhenrenx').hide();
    });

    $('.zixun').on('mouseenter',function(){
        $('.sheji').show();
    }).on('mouseleave',function(){
        $('.sheji').hide();
    });
    $('.sheji').on('mouseenter',function(){
        $('.sheji').show();
    }).on('mouseleave',function(){
        $('.sheji').hide();
    });


    //左侧导航hover效果
    $('.mainlist li').on('mouseenter',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).find('a').addClass('active');
        $(this).find('h3').addClass('active').animate({ marginLeft:5},300);
        $(this).find('div').fadeIn();
    }).on('mouseleave',function(){
        $(this).removeClass('active');
        $(this).find('a').removeClass('active');
        $(this).find('h3').removeClass('active').animate({ marginLeft:0},300);
        $(this).find('div').fadeOut('active');
    });

    //轮播图
        //3张，0/1/2；
    var $lb = $('.lb');
    var $page = $('.lb div');
    var len = $page.length;
    // console.log(len);   //3
    var index = 2;

    var timer;

    //鼠标移入时移除轮播
    $lb.on('mouseenter',function(){
        clearInterval(timer);
    }).on('mouseleave',function(){
        timer = setInterval(function(){
            index--;
            showPic();
            // console.log(index);
        },3000)
    })

    //手动触发
    .trigger('mouseleave');

    //移入页码改变轮播图
    var $pLi = $('.page_box ul li');
    $pLi.on('mouseenter',function(){
        clearInterval(timer);
        index = $(this).index(); 
        // console.log(index); 
        showPic();
    });

    //轮播函数
    function showPic(){
        if (index < 0) {
            index = len - 1;    //2
        }else if( index > len - 1){
            index = 0;
        }
        //页码高亮
        $pLi.eq(index).addClass('active').siblings().removeClass('active');

        //淡入淡出动画
        $page.eq(index).fadeIn(1400).siblings().fadeOut(1000);
    }


    // teb窗口切换
    var $hli = $('.tab_hd ul li');
    var $contli = $('.tab_cont ul .tabli');

    $hli.on('mouseenter',function(){
        $(this).addClass('active').siblings().removeClass('active');
        var $index = $(this).index();
        // console.log($index);
        $contli.eq($index).css('display','block').siblings().css('display','none');
    });
})