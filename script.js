var carousel=document.querySelector('img');
var images=["images/slide0.jpeg","images/slide1.jpeg","images/slide2.jpeg","images/slide3.webp","images/slide4.webp"];
var num=5;
function next(){
    num++;
       if(num>=images.length){
        num=0;
        carousel.src=images[num]
        
    }
    else{
       carousel.src=images[num]
       
       
    }
                    
};
function prev(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
            }
            else{
              carousel.src=images[num]
            }

};