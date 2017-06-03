$(function(){

    //获取存在cookie里的 被点击的商品的guid；发送请求，从数据库数据动态填入商品信息
    var guid = getCookie('guid');
    console.log(guid);

    $.ajax({
        type:'post',
        dataType:"json",
        url:"../php/productlist.php",
        success:function(data){
            console.log(data);
            // var str = '';
            for(var i =0;i<data.length;i++){

                if(data[i].id == guid){

                    console.log(data[guid].productname);
                                    // 拼接 img/product/nana2-1.jpg
                    var str = '';    
                    str += `<img src="${data[i].url}-1.jpg">`;

                    $('.smallImg').html(str);

                    var str2 = '';
                    str2 += `
                            <li><img class="active" src="${data[i].url}-1.jpg"></li>
                            <li><img src="${data[i].url}-2.jpg"></li>
                            <li><img src="${data[i].url}-3.jpg"></li>`;

                    $('.imglist').html(str2);

                    $('.right_top h2').html(data[guid].productname);
                    $('.oldprice').html(data[i].oldprice);
                    $('.newprice').html(data[i].newprice);

                    // 放大镜插件; 因为异步加载生成节点，有时候jq还没加载，会报错gdszoom no a function
                    $('.smallImg').gdszoom({width:600,height:600,gap:10});

                    // 切换图片
                    $('.imglist li img').on('click',function(){
                        console.log( $(this).attr('src') );
                        var $newsrc = $(this).attr('src');
                        // $('.gdszoom-big').remove();
                        // $('.minzoom').remove();

                        $(this).addClass('active').parent().siblings().find('img').removeClass('active');

                        $('.smallImg img').attr({ "src" : $newsrc});
                        $('.smallImg').gdszoom({width:600,height:600,gap:10});
                    })



                }
            }
        }
    })


    //加减商品数量
    var $jian = $('.jian');
    var $jia = $('.jia');
    $jian.on('click',function(){
        var $_huaji = $('.huaji').val();
        $_huaji--;
        if($_huaji<1){
            $_huaji = 1;
        }
        $('.huaji').val($_huaji);
    });

    $jia.on('click',function(){
        var $_huaji = $('.huaji').val();
        $_huaji++;
        console.log($_huaji);
        $('.huaji').val($_huaji);
    })

    //点击尺码高亮
    $('.size span').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })


    // 购物车
    // 用于保存购物车中的商品列表
    var carlist = [];

    // 如果cookie中存在商品列表，则赋值给carlist
    var cookie = document.cookie.split('; ');
    cookie.forEach(function(item){
        var arr = item.split('=');
        if(arr[0] == 'carlist'){
            // 在cookie中得到的数据都是字符串
            // 所以需要转换成数组/对象
            carlist = JSON.parse(arr[1]);
        }
    });
    $(".jiagwc").click(function(e){
        //商品id和数量写入购物车
                var currentGUID = guid;

                // 判断当前商品是否已经存在cookie
                // 如果已存在，则数量增加
                // 否则直接追加到cookie
                for(var i=0;i<carlist.length;i++){
                    if(carlist[i].guid == currentGUID){

                        carlist[i].num=Number($('.huaji').val())+Number(carlist[i].num);
                        break;
                    }
                }

                // 如果i值等于carlist.length
                // 说明当前商品不存在cookie中
                if( i==carlist.length){
                    // 创建一个对象，用于保存商品信息
                    var obj = {};

                    obj.guid = guid;
                    obj.src = $('.smallImg').attr('src');
                    obj.productname =$('.productname').html();
                    obj.price =$('.price').html();
                    obj.num = $('.huaji').val();
                    carlist.push(obj);
                }
                console.log(JSON.stringify(carlist));

                var now = new Date();
                now.setDate(now.getDate() + 3);
                document.cookie = 'carlist=' + JSON.stringify(carlist) + ';expires='+now;
        

        //购物车飞入效果
        var cx=e.clientX-30;
        var cy=e.clientY-30;
        console.log(cx);
        console.log(cy);
        let $img= $('.smallImg img').clone();
        $img.addClass('feiba');

        console.log($img)

        $img.css({'width':80,'height':80,'borderRadius':30,'position':'fixed','top':cy,'left':cx })
        .appendTo($(this)).animate({'top':110,'left':$(window).width()},function(){
                $(this).remove()})
    })
})