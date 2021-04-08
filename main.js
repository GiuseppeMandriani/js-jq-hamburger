// console.log('JS OK');

/**
 * Click su Hamburger menù
 */

// Ref

var hamb = $('.header-right > a');

var subList = $('.hamburger-menu');

var end = $('.hamburger-menu a.close');



// Mostrare tendina al click e chiuderla

hamb.click(function(){
    // alert('click funziona');
    // subList.show();
    // subList.fadeIn(1000);
    // subList.slideDown();

    subList.addClass('active');

});

end.click(function(){
    // alert('click funziona');
    // subList.hide();
    // subList.fadeOut();
    // subList.slideUp(1000);
    subList.removeClass('active');



})





