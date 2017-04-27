window.onload=init;
function init(){
    positioning();
    removeImg();
    removeImg();//不知为何，一次只能隔行消除空白图片，运行两次才能消除干净。
}
//保持页脚和翻页按钮在页面最下方
function positioning(){
    /*var bodyHeight=document.body.clientHeight+80;
    var windowHeight= window.innerHeight;
    var headerHeight=document.getElementById("header").clientHeight;
    c
    var contHeight=document.getElementById('content').clientHeight;
    var footer=document.getElementById('footer');
    var body=document.getElementById('content');
    if(bodyHeight<windowHeight){
        footer.style.bottom="0rem";
    }
    if(headerHeight+footerHeight+bodyHeight<windowHeight){
        body.style.height=(windowHeight-headerHeight-footerHeight)/10-8+"rem";
    }/**/
    var windowHeight= window.innerHeight;
    var footerHeight=document.getElementById('footer').clientHeight;
    var headerHeight=document.getElementById("header").clientHeight;
    var body=document.getElementById('content');
    body.style.minHeight=(windowHeight-headerHeight-footerHeight)/10-8.3+'rem';
}//bug:当窗口缩小后会漂移(已解除)

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

function setImg(){
    var img = document.getElementsByTagName('img');
    var i = 0;
    var z = 1;
    var href1 = window.location.href;
    var href2 = window.location.href.substring(0,location.href.lastIndexOf('/')+1);
    alert(href1);
    alert(href2);
    for(;i<img.length;i++){
        name=img[i].src;
        alert(name);
        /*if(name===href1||name===href2){
            //img[i].setAttribute('src',"articles/thumb/a73.png");
            alert(img.lastIndexOf("/")+1);
        }*/
    }
}



function setImgs(){
    //var img = document.getElementsByTagName('img');
    var i = 0;
    var z = 1;
    /*for(;i<img.length;i++){
        //var face = img[i].getAttribute('data-face');
        if(!img[i].src){
            img[i].setAttribute('src',"articles/thumb/a73.png");
        }
    }*/
    var img = document.getElementById('imgt').src;
    var name=img.substring(img.lastIndexOf("/")+1);
    var href1 = window.location.href;
    var href2 = window.location.href.substring(0,location.href.lastIndexOf('/')+1);

}