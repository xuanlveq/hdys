//
$(function(){
    
    // 获取cookie
            console.log(document.cookie);
    var username = getCookie('username');    //获取cookie中的username
            console.log(username);
    var password = getCookie('password');
    
    // 给提交按钮绑定点击事件
    $('.anniu').on('click',function(){

        // 获取填入的登陆信息
            //获取填入信息一定要在点击事件内
        var $newuser = $('#user').val();
        var $newpsw = $('#psw').val();

        if($newuser == username && $newpsw == password){
            return true;

        }else{
            return false;
        }

    })

})