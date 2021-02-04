var li1 = document.getElementById("sub-lista-1");
var li2 = document.getElementById("sub-lista-2");
var li3 = document.getElementById("sub-lista-3");

li1.addEventListener("click",function open(){
    if(document.getElementById("sub-seccion-1").style.display!="block"){
        document.getElementById("sub-seccion-1").style.display="block"; 
    }else{
        document.getElementById("sub-seccion-1").style.display="none"; 
    }
});

li2.addEventListener("click",function open(){
    if(document.getElementById("sub-seccion-2").style.display!="block"){
        document.getElementById("sub-seccion-2").style.display="block";
    }else{
        document.getElementById("sub-seccion-2").style.display="none";
    }
});

li3.addEventListener("click",function open(){
    if(document.getElementById("sub-seccion-3").style.display!="block"){
        document.getElementById("sub-seccion-3").style.display="block"; 
    }else{
        document.getElementById("sub-seccion-3").style.display="none"; 
    }
});

