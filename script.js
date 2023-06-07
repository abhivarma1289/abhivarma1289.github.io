var data1={image :"passphoto.jpg",name : " Dongari Abhilash Varma", designation:"Intern"};
var data2={image : "heroImage.jpg",name : "Abhilash varma", designation:"Software Devoloper"};
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
    document.getElementById("myname").innerHTML=displaydata.name;
    document.getElementById("mydesig").innerHTML=displaydata.designation;
}