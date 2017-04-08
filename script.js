window.onload=init;

function init(){
    footerPosition();
}

//当内容高度小于视口高度时，更改footer的位置使其位于视口底部
function footerPosition(){
    var bodyHeight=document.body.clientHeight
    var windowHeight= window.innerHeight;
    var footerHeight=document.getElementById('footer');
    if(bodyHeight<windowHeight){
        footerHeight.style.bottom="0rem";
    }
}