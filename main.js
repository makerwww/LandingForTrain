    // Появление и использование кнопки вверх
var butt = $('#UpButton');
var flyManBlock = $('.fly-man');

$(window).scroll(function(){
    if($(this).scrollTop() > 0){
        butt.fadeIn();
    } else {
        butt.fadeOut();
    }
})

butt.click(function() {
        $('body,html').animate({scrollTop:0},1000);
        flyManBlock.fadeIn(100);
    });
    
$(window).scroll(function() {
    if($(window).scrollTop() == 0) {
        flyManBlock.fadeOut(250);
    }
});
    // end

    // Плавный переход по ссылкам
$('a').click(function(){
    var attr_name = $(this).attr('href');
    var top = $(attr_name).offset().top;
    $('body, html').animate({scrollTop: top}, 800);
})
    // end

    // Проверка введенного номера телефона
var checkTel = $('#checkTel');
var TelMessage = $('.Tel-message');
var counter = 0;

checkTel.change(function(){
    var insideTelForm = checkTel.val();
    console.log(insideTelForm);
    for (let i = 0; i < insideTelForm.length; i++) {
        if(insideTelForm[0] == '8' || insideTelForm[0] == '7'){
            if(insideTelForm[i] != ' '){
                // console.log(insideTelForm[i]);
                counter = parseInt(counter);
                counter += 1;
                // console.log('counter = ' + counter);
            } else {
                continue;
            }
        } else {
            TelMessage.text('Первая цифра должна быть 8 или 7!');
            $('.Tel-message:after').css('bottom','15px');
            TelMessage.fadeIn(400);
            checkTel.val('');
            break;
        }
    }
    if(counter != 11 && counter != 0){
        TelMessage.text('Формат номера должен быть: 8 800 555 35 35');
        TelMessage.fadeIn(400);
        checkTel.val('');
    }
    counter = 0;
});

checkTel.click(function(){
    TelMessage.fadeOut(400);
})
    //end

    // Burger menu animation
var whereMenu = $('#where-menu');
var burgerMenu = $('.burger-menu-block');
var firstBurLine = $('.burger-line-block-1');
var secondBurLine = $('.burger-line-block-2');
var thirdBurLine = $('.burger-line-block-3');
var screenWidth = $(window).width();
console.log(screenWidth);

if(screenWidth < 700){
burgerMenu.click(function(){
    firstBurLine.toggleClass('burger-top-active');
    secondBurLine.toggleClass('burger-mid-active');
    thirdBurLine.toggleClass('burger-bot-active');
    if(whereMenu.is(':hidden')){
        var windowCoord = $(window).scrollTop();
        console.log(windowCoord);
        whereMenu.animate({
            'top': windowCoord,
            'left': '0',
        },100)
        whereMenu.css({
            'display': 'flex',
        })
    } else {
        whereMenu.animate({
            'top': '0',
            'left': '100vw',
        },150, function(){
            whereMenu.css('display','none');
        })
    }
})
    //end
    // Выключение меню при щелчке по ссылке
    $('a').click(function(){
        if(whereMenu.is(':visible')){
            whereMenu.animate({
                'top': '0',
                'left': '100vw',
            },150, function(){
                whereMenu.css('display','none');
            })
            firstBurLine.removeClass('burger-top-active');
            secondBurLine.removeClass('burger-mid-active');
            thirdBurLine.removeClass('burger-bot-active');
        }
    })
}

// spechial plugin for form 
// Вопрос, как сделать это через this

var inputClick_1 = $('#nameOf');
var labelMove_1 = $('label[for = "nameOf"]');

inputClick_1.focusin(function(){
    labelMove_1.addClass('new-pos');
});
inputClick_1.focusout(function () {
    if(inputClick_1.val() == ''){
        labelMove_1.removeClass('new-pos');
    }
});

var inputClick_2 = $('#Email');
var labelMove_2 = $('label[for = "Email"]');

inputClick_2.focusin(function(){
    labelMove_2.addClass('new-pos');
});
inputClick_2.focusout(function () {
    if(inputClick_2.val() == ''){
        labelMove_2.removeClass('new-pos');
    }
});

// var inputClick_3 = $('#checkTel');
var labelMove_3 = $('label[for = "checkTel"]');

checkTel.focusin(function(){
    labelMove_3.addClass('new-pos');
});
checkTel.focusout(function () {
    if(checkTel.val() == ''){
        labelMove_3.removeClass('new-pos');
    }
});






