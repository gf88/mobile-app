var tap=(function(){
function fun(){
    var tab = document.getElementsByClassName("xuan-left")[0];
        var ul = tab.getElementsByTagName('ul')[0];
        var cont = document.getElementsByClassName('xuan-right')[0];
        var con = cont.getElementsByClassName("xuan-content")[0];

        cont.children[0].style.display = "block";

        for(var i=1;i<cont.children.length;i++){
            cont.children[i].style.display = "none";
        }

        for(var i=0;i<ul.children.length;i++){
            ul.children[i].index=i;
            
            ul.children[i].onclick=function(){
                index=this.index;
                for(var j=0;j<cont.children.length;j++){
                    ul.children[j].className="";
                    cont.children[j].style.display="none";
                }
                this.className+="hover";
                cont.children[this.index].style.display="block";
            }
        }
    }
    return {
        fun:fun
    }
})();
tap.fun();
// function cl(){
//     $('.xuan-nav li').click(function(){
        
//     })
// }
// cl();

var myScroll = new IScroll('.wrapper',{
    scrollX: false,
    scrollY: true,
    snap:'div'
});