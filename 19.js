window.onload = function () {
    var fd = document.getElementById("fd");
    var dtk = document.getElementById("dtk");
    var sttep=parseInt(document.defaultView.getComputedStyle(fd,null).top.slice(0,-2));
    var dtkstart = parseInt(document.defaultView.getComputedStyle(fd,null).bottom.slice(0,-2));
    var dtknum = parseInt(document.defaultView.getComputedStyle(dtk,null).bottom.slice(0,-2));
    setInterval(function () {
        var top = document.defaultView.getComputedStyle(fd,null).top;
        var num = parseInt(top.slice(0,-2));//果有个参数为负值,那么这里的范围为【0，stringValue.length+(-2));
        if(num>=(sttep+dtkstart-dtknum))
            fd.style.cssText = "top:"+((num-1)+"px")+";";
        else{
            fd.style.cssText = "bottom:"+((sttep-1)+"px")+";";
        }
    },50);
}