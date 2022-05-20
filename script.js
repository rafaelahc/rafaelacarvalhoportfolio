
//MENU ACTIVE
$('.nav-item').on('click', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
})

//MENU MOBILE
$('.btn-mobile').click(function() {
    $('.nav-bar').toggleClass('active')
});

//SUMIR MENU QUANDO CLICAR (RESPONSIVO)
$(".menu li a").on("click", function() {
    $('.btn-mobile').trigger('click');
})


//EFEITO TYPING - HOME
$('.front-end').typer({
    strings: ["<front-end>"],
    typeSpeed: 70,
    backspaceSpeed: 40,
    backspaceDelay: 1000,
    repeat: true,
    autoStart: true,
    startDelay: 2000,
});



//MUDANÇA DE TEMA
$('.theme-switcher-toggler').on('click', function() {
    $('div.theme-switcher-container').toggleClass('open');
})

//DESAPARECER DIV TEMA QUANDO SCROLLAR A PÁGINA
$(window).scroll(function() {
    if($('div.theme-switcher-container').hasClass('open')) {
        $('div.theme-switcher-container').removeClass('open');
    };
})

//Alternar a cor
function alternateColor (color) {
    $('.alternate-color').each(function() {
        if(color === $(this).attr('title')) {
            $(this).removeAttr('disabled'); 
        } else {
            $(this).attr('disabled', 'true');
        }
    });
}

//DARK MODE
$(window).on('load', function() {
    if($('body').hasClass('dark')) {
        $('.dark-light-mode').children().addClass('fa-sun');
    } else {
        $('.dark-light-mode').children().addClass('fa-moon');
    };
})

$('.dark-light-mode').on('click', function() {
    $('.dark-light-mode').children().toggleClass('fa-sun');
    $('.dark-light-mode').children().toggleClass('fa-moon');
    $('body').toggleClass('dark');

});


//BOTÃO VER MAIS
$(function () {
    $(".box-hidden").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".box-hidden:hidden").slice(0, 3).slideDown();
        if ($(".box-hidden:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});

//CONTACT FORM
$('.btn-contact').click(function() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensagem enviada!',
        showConfirmButton: true
    })
    
});
