$(function(){

    var thisguid = getCookie('guid');
    console.log(thisguid);

    var carlist = getCookie('carlist');
    console.log(carlist);
    console.log(carlist.length);      //长度是43，carlist为字符串
    
    arrcarlist = JSON.parse(carlist);   //转换格式

    console.log(arrcarlist);

    for(var i = 0;i<arrcarlist.length;i++){
        if(arrcarlist[i].guid == thisguid){
            var num = arrcarlist[i].num;
            console.log(num);
            console.log(1);
            $('.huaji').val(num);
        }
    }    

    //发送请求，获取数据
    $.ajax({
        type:'post',
        dataType:"json",
        url:"../php/productlist.php",
        success:function(data){
            // console.log(data);
            // var str = '';
            for(var i =0;i<data.length;i++){

                if(data[i].id == thisguid){

                    console.log(data[thisguid].productname);
                                
                    var str = '';    
                    str += `<img src="${data[i].url}-1.jpg">`;

                    $('.smallImg').html(str);

                    $('.productname a').html(data[thisguid].productname);
                    $('.oldprice').html(data[i].oldprice);
                    $('.newprice').html(data[i].newprice);

                    //加减商品数量
                    var $jian = $('.jian');
                    var $jia = $('.jia');
                    var $shanchu = $('shanchu');

                    $jian.on('click',function(){
                        var $_huaji = $('.huaji').val();
                        $_huaji--;
                        if($_huaji<1){
                            $_huaji = 1;
                        }
                        $('.huaji').val($_huaji);
                        xiaoji();

                    });

                    $jia.on('click',function(){
                        var $_huaji = $('.huaji').val();
                        $_huaji++;
                        console.log($_huaji);
                        $('.huaji').val($_huaji);
                        xiaoji();
                    })

                    xiaoji();

                    //结算价格
                    function xiaoji(){
                        var $newprice = $('.newprice'),$_newprice = parseInt($('.newprice').html());
                        // console.log($_newprice);
                        var $huaji = $('.huaji').val();
                        var $xiaoji = $('.add .xiaoji');
                        var $xiaojiprice = $huaji * $_newprice;
                        $xiaoji.html($xiaojiprice);
                        $('.shopping_add').html($xiaojiprice);
                    }
                }
            }
        }
    })

    
    

    //删除商品




})