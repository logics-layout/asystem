function offsetTopHeaderBottom(){
    return $('.header__bottom').offset().top;
}

var header = $('.header');
window.offsetTopH = offsetTopHeaderBottom();

function fixHeader(bool) {
    if(bool !== false && $(window).scrollTop() >= offsetTopH){
        header.addClass('fix');
    }else{
        header.removeClass('fix');
    }
}