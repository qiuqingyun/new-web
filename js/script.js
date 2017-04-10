window.onload=init;
function init(){
    positioning();
}
//保持页脚和翻页按钮在页面最下方
function positioning(){
    var bodyHeight=document.body.clientHeight+80;
    var windowHeight= window.innerHeight;
    var headerHeight=document.getElementById("header").clientHeight;
    var footerHeight=document.getElementById('footer').clientHeight;
    var contHeight=document.getElementById('content').clientHeight;
    var footer=document.getElementById('footer');
    var body=document.getElementById('content');
    if(bodyHeight<windowHeight){
        footer.style.bottom="0rem";
    }
    if(headerHeight+footerHeight+bodyHeight<windowHeight){
        body.style.height=(windowHeight-headerHeight-footerHeight)/10-8+"rem";
    }
}
//function areThereAnyImages(){}
function widthControl(){
    var windowWidth= window.innerWidth;
    alert(windowWidth);
}