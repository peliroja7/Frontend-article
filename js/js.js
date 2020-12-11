const share= document.querySelector ('.share');
const button= document.querySelector ('.icon');
const img= document.querySelector ('#img');

button.addEventListener ('click', e=> {
    share.classList.toggle("active");
    if(share.classList.contains("active")){
        img.src='images/icon-share-dark.svg';
    }else{
        img.src='images/icon-share-new.svg';
    }

});