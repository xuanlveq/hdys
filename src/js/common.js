/*
    1、登陆注册的验证码
    2、cookie存用户似乎只有一个，要加id
    3、html中可以加多个类名，但是要注意添加的前后顺序，两个类里有相同属性时，后面的覆盖前面的，不同属性不相互影响
*/

function getCookie(name){          //参数name是字符串
    var cookie = document.cookie.split('; ');
    var res;

    for(var i=0;i<cookie.length;i++){
        var arr = cookie[i].split('=');
        if(arr[0] === name){
            res = arr[1];
            break;
            }
        }
        return res;
    }
//getCookie('carlist');//=>[]

/**
 * [设置cookie]
 * @param name    [cookie名]   参数类型是字符串
 * @param val     [cookie值]   类型字符串或变量
 * @param expires [有效期]     类型数字
 * @param path    [cookie保存的路径]  字符串
 */

function setCookie(name,val,expires,path){
    var cookieStr = name + '=' + val;
    if(expires){
        var now = new Date();    //获取当前时间
        now_date = now.getDate();    //获取当前时间内的日期
        var newdate = now.setDate(now_date+ expires);    //改变当前时间日期为现在+7天
        
        cookieStr+=";expires = "+newdate;   //拼接
    }
    if(path){
        cookieStr += ';path=' + path;
    }

    // 写入cookie
    document.cookie = cookieStr;//'name=laoxie'
}
//setCookie('name','laoxie',expires,path)
//setCookie('carlist',[{}])

function removeCookie(name){
    var now = new Date();
    now.setDate(now.getDate()-1);
    // document.cookie = name + '=null;expires='+ now
    setCookie(name,'null',now);
}

