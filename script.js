var data1={image : "heroImage.jpg",name : " D Abhilah Varma", designation:"Intern"};
var data2={image : "passphoto.jpg",name : "Abhi Varma", designation:"Software Devoloper"};
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