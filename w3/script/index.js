var slideIndex = 0;
var offset = 0;
var pages = document.getElementsByClassName("product_img");

document.getElementById("switch_left").onclick = function(){leftbtn()};
document.getElementById("switch_right").onclick = function(){rightbtn()};
function rightbtn(){
    var bgframe = document.getElementsByClassName("bg_slide");
    var imgframe = document.getElementsByClassName("p_image_slide");
    var desframe = document.getElementsByClassName("p_describe_slide");
    if(slideIndex != pages.length-1){
        slideIndex++;
        offset += -600;
        
        $(bgframe).animate({left: offset.toString()+'px'},400);
        $(imgframe).animate({left: offset.toString()+'px'},440);
        $(desframe).animate({left: offset.toString()+'px'},450);
    }
}      
function leftbtn(){
    var bgframe = document.getElementsByClassName("bg_slide");
    var imgframe = document.getElementsByClassName("p_image_slide");
    var desframe = document.getElementsByClassName("p_describe_slide");
    if(slideIndex != 0){
        slideIndex--;
        offset += 600;
        $(bgframe).animate({left: offset.toString()+'px'},400);
        $(imgframe).animate({left: offset.toString()+'px'},440);
        $(desframe).animate({left: offset.toString()+'px'},450);
    }
} 



