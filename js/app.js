
 
var pics = [
    "imgs/IMG_01.JPG", //1
    "imgs/IMG_02.JPG", //2  
    "imgs/IMG_03.JPG",  //3
    "imgs/IMG_04.JPG", //4
    "imgs/IMG_005.JPG", //5
    "imgs/IMG_06.JPG", //6
    "imgs/IMG_07.JPG", //7
    "imgs/IMG_08.JPG", //8
                            
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1; 
btn.addEventListener("click", function(){
    if(counter===8){
        counter=0;
    }
   img.src = pics[counter]
   counter = counter + 1;
});

