var data1={image : "abc.jpg",name : " K SAI YUGANDHAR", designation:"Intern"};
var data2={image : "edf.jpg",name : "YUGANDHAR", designation:"Software Devoloper"};
var isdata1 = true;
var displaydata;
var changemypic = function(){
    if(isdata1){
        displaydata= data2;
        isdata1 = false;
    }
    else{
        displaydata = data1;
        isdata1=true;
    }
    document.getElementById("myimage").src=displaydata.image;
}