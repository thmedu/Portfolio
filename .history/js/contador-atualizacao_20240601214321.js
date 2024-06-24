// Função para exibir ou ocultar o menu de opções de download
function toggleDropdown() {
    var dropdown = document.getElementById("cvDropdown");
    if (!dropdown.classList.contains("show")) {
        dropdown.classList.add("show");
    } else {
        dropdown.classList.remove("show");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var animatedIcons = document.querySelectorAll('.animated-icon');
    animatedIcons.forEach(function(icon) {
        icon.classList.add('animate-icon'); // Adiciona a classe para iniciar a animação
    });
});
$(document).ready(function() {
    // Scroll suave para os links de navegação
    $('.site-main-menu a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Animações de entrada
    $(window).on('scroll', function() {
        $('.page-title, .block-title').each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('in-view');
            }
        });
    });

    // Botão de rolar para o topo
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.lmpixels-scroll-to-top').fadeIn();
        } else {
            $('.lmpixels-scroll-to-top').fadeOut();
        }
    });
    
    $('.lmpixels-scroll-to-top').click(function() {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});
