$(function(){
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

    // 左侧导航显示隐藏
    $('.left_nav h2,.left_nav .mainlist').on('mouseenter',function(){
        $('.left_nav .mainlist').show();
    }).on('mouseleave',function(){
        $('.left_nav .mainlist').hide();
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
})