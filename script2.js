var bigIm = document.getElementById("bigImage");
var carousel = document.getElementById('carousel').getElementsByTagName('img');

for(var i = 0; i<carousel.length; i++){
    carousel[i].addEventListener('click',changeImage);
}

function changeImage(){
    var src = this.getAttribute('src');
    bigIm.innerHTML = "<img src=" + src + ">";
}
