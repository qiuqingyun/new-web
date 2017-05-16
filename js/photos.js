function setImg(){
    var photos=document.getElementById("photos");
    var imgBox =photos.getElementsByClassName('imgBox');
    var img=photos.getElementsByTagName("img");
    var title=photos.getElementsByClassName("title");
    var oddBottom=[];
    var evenBottom=[];
    var z=0,o=0,e=0;
    for(var i=0;i<imgBox.length;i++){
        var style="";
        if(i==0){
            oddBottom[o]=120+imgBox[i].clientHeight;
            style="top:"+12+"rem; ";
            o++;
        }else if(i==1){
            evenBottom[e]=120+imgBox[i].clientHeight;
            style="top:"+12+"rem; "+"left:60rem; ";
            e++;
        }else{
            if(oddBottom[oddBottom.length-1]<evenBottom[evenBottom.length-1]){
                oddBottom[o]=oddBottom[o-1]+120+imgBox[i].clientHeight;
                style="top:"+(oddBottom[o-1]+120)/10+"rem; ";
                o++;
            }else{
                evenBottom[e]=evenBottom[e-1]+120+imgBox[i].clientHeight;
                style="top:"+(evenBottom[e-1]+120)/10+"rem; "+"left:60rem; ";
                e++;
            }
        }
        imgBox[i].setAttribute("style",style);
        z=i;
        if(img[i].title){
            title[i].innerHTML=img[i].title+" "+img[i].alt;
        }
    }
    var last1=imgBox[z].offsetTop+imgBox[z].clientHeight;
    var last2=imgBox[z-1].offsetTop+imgBox[z-1].clientHeight;
    if(last1>last2){
        photos.setAttribute("style","Height:"+(last1+60)/10+"rem; ");
    }else{
        photos.setAttribute("style","Height:"+(last2+60)/10+"rem; ");
    }
}