window.onload=function(){
    positioning();
    window.onresize=positioning;//当窗口大小改变时改变页脚的位置
    removeImg();
    removeImg();//不知为何，一次只能隔行消除空白图片，运行两次才能消除干净。
    setImg();
}

function positioning(){//保持页脚和翻页按钮在页面最下方
    var windowHeight= window.innerHeight;
    var footerHeight=document.getElementById('footer').clientHeight;
    var headerHeight=document.getElementById("header").clientHeight;
    var body=document.getElementById('content');
    body.style.minHeight=(windowHeight-headerHeight-footerHeight)/10-8.3+'rem';
    return windowHeight;
}

function removeImg(){//移除空白图片
    var imgs = document.getElementsByTagName("img");
    for(var i=0;i<imgs.length;i++){
        var src = imgs[i].src;
        var href1 = window.location.href.substring(0,location.href.lastIndexOf('/')+1);//IE
        var href2 = window.location.href;//非IE
        if(src===""||src===href1||src===href2){
            imgs[i].parentNode.removeChild(imgs[i]);        
        };
    }
}
