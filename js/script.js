

bgchange();

function bgchange() {
    $('bgimg').mousemove(function (e) {
        var mx = (e.pageX * -1 / 16);
        var my = (e.pageY * -1 / 16);
        $('this').css('background-position', mx + 'px' + my + 'px');
    });
}

$(document).ready(function(){
    $('.profile').fadeIn(10000); // set duration in brackets    
  });
