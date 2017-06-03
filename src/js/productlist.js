
    $.ajax({
        type:'post',
        dataType:"json",
        url:"../php/productlist.php",
        success:function(data){
            console.log(data);
            var str = '';
            for(var i =0;i<data.length;i++){
                str+= `
                        <li guid="${data[i].id}">
                            <a href="productdetails.html"><img src="${data[i].url}.jpg"></a>
                            <span class="newprice"> ￥${data[i].newprice} </span>
                            <span class="oldprice"> ￥${data[i].oldprice}.00 </span>
                        </li>
                `;
            }
            $('.productlist ul').html(str);

            $('.productlist .w1032 ul li img').on('click',function(){

                var _guid = $(this).parent().parent().attr('guid');
                console.log(_guid);

                setCookie('guid',_guid,7,'/');
             })

            console.log(document.cookie.guid);
        }
    });




    
