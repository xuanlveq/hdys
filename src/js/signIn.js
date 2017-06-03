//
$(function(){
    
    // 表单验证
        //切换注册方式
    var $phone = $('#phone');
    var $email = $('#email');
    var $youxiang = $('.youxiang')
    $phone.on('click',function(){
        $phone.addClass('active');
        $youxiang.css('display','none');
        $email.removeClass('active');
    });
    $email.on('click',function(){
        console.log(2);
        $phone.removeClass('active');
        $youxiang.css('display','block');
        $email.addClass('active');
    })

        //验证开始
    var $shouji = $('.shouji input').eq(0);       //手机
    var $yanzhengma = $('.shouji input').eq(1);   //验证码
    var $password = $('.shouji input').eq(2);     //密码
    var $qrPassword = $('.shouji input').eq(3);   //确认密码
    var $xieyi = $('.shouji input').eq(4);        //用户协议
    var $tijiao = $('.shouji input').eq(5);   //提交按钮

    var b0= false,b1= false,b2= false,b3= false,b4 = false;


        //绑定事件
    $shouji.on('blur',function(){
        var $_shouji = $shouji.val();
        if(!/^1[34578]\d{9}$/.test($_shouji)){
            $('.tips1').html('手机号码不对');
            $('.tips1').removeClass('tips_active');
        }else{
            b0 = true;
            $('.tips1').html('');
            $('.tips1').addClass('tips_active');
        }
    })

    $password.on('blur',function(){
        var $_psw = $password.val();
        if(!/^\S{6,19}$/.test($_psw)){
            $('.tips2').removeClass('tips_active');
            $('.tips2').html('密码不合规范')
        }else{
            b1=true;
            $('.tips2').html('');
            $('.tips2').addClass('tips_active');
        }
    })

    $qrPassword.on('blur',function(){
        if( $qrPassword.val() == $password.val()){
            $('.tips3').html('');
            $('.tips3').addClass('tips_active');
            b2 = true;
        }else{
            $('tips3').removeClass('tips_active');
            $('.tips3').html('两次输入密码不一致');
        }
    })
    
    $tijiao.on('click',function(){
        var a;

        if($xieyi.prop('checked')){
            b3 = true;
            $('.tips4').html('');
            $('.tips4').addClass('tips_active');
        }else{
            $('.tips4').html('请阅读协议');
            $('.tips4').removeClass('tips_active');
        }

        console.log('b0 = ' + b0)
        console.log('b1 = ' + b1)
        console.log('b2 = ' + b2)
        console.log('b3 = ' + b3)


        if(b0 == true && b1==true && b2==true && b3 == true ){
            a = true;
            // 验证正确则把手机（用户名）、密码存进cokie；

            var $_shouji = $shouji.val();
            var $_psw = $password.val();
            console.log($_shouji);
            console.log($_psw);

            setCookie('username',$_shouji,7,'/');
            setCookie('password',$_psw,7,'/'); 
        }else{
            a = false;
        }

        console.log('a= '+ a);
        return a;
    })    

    
})