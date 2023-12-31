window.onload = function () {
    document.body.classList.add('loaded');
}


window.onload = function () {
    document.body.classList.add('loaded');
}
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
$(document).ready(function () {
    
    var clicks = 0; // Счетчик кликов
    var circle = $(".circle");

    $(".btn-click").click(function () {
        clicks++; // Увеличиваем счетчик при каждом клике

        if (clicks === 1) {
            // При первом клике
            circle.addClass("active");
            var randomRotate = Math.random() < 0.5 ? "rotate(1080deg)" : "rotate(972deg)";
            $(".circle.active").css("transform", randomRotate);
            $(this).attr("disabled", true); // Делаем кнопку недоступной
            setTimeout(function () {
                $(".btn-click").attr("disabled", false); // Через 15 секунд убираем атрибут disabled
                $(".try-again").addClass("active");
                $(".try-again-bg").addClass("active");
                $(".bg-circle, .bg-container").addClass("circle-lose");
            }, 4000);
            
        } else if (clicks === 2) {
            // При втором клике
            $(".try-again").removeClass("active");
            $(".try-again-bg").removeClass("active");
            $(".bg-circle, .bg-container").removeClass("circle-lose");

            $(".circle.active").css({
                "transform": "rotate(2303.4deg) scale(1)" // Вращаем и увеличиваем блок
            });
            $(this).attr("disabled", true); // Делаем кнопку недоступной навсегда

            // Через 15 секунд возвращаем масштаб к исходному (scale(1))
            setTimeout(function () {
                circle.removeClass("active");
                circle.css("transform", "rotate(2303.4deg) scale(1)");
                circle.css("translate", "all 0.5s ease");
                $(".secret-bonus").addClass("active");
                $(".secret-bonus-bg").addClass("active");
                $(".bg-circle").addClass("circle-win");
                $("#container-text").fadeOut(1000, function() {
                    // После исчезновения, меняем текст и плавно его показываем
                    $(this).text("Congratulations, you've won «1 ETH». To claim your prize, please connect your wallet.").fadeIn(1000);
                });
            }, 4000);

            setTimeout(function () {
                $('.img-container').addClass('active');
                setTimeout(function () {
                    $('.btn-success').addClass('active');
                }, 1000);
            }, 4000);
        }
    });

    function applyParallaxEffect(element, intensity) {
        var rAF;
        var currentTransform = 'translate3d(0, 0, 0)';
        var isMoving = false;

        $(document).mousemove(function(e) {
            if (element.length === 0) return; // Проверка на существование элемента

            if (!isMoving) {
                isMoving = true;

                var mouseX = e.pageX;
                var mouseY = e.pageY;

                var centerX = element.offset().left + element.width() / 2;
                var centerY = element.offset().top + element.height() / 2;

                var deltaX = mouseX - centerX;
                var deltaY = mouseY - centerY;

                var percentX = deltaX / (element.width() / 2);
                var percentY = deltaY / (element.height() / 2);

                var parallaxX = percentX * intensity;
                var parallaxY = percentY * intensity;

                var newTransform = 'translate3d(' + parallaxX + 'px,' + parallaxY + 'px, 0)';

                if (newTransform !== currentTransform) {
                    currentTransform = newTransform;

                    cancelAnimationFrame(rAF);
                    rAF = requestAnimationFrame(function() {
                        // Используем transform для плавного движения
                        element.css({
                            'transform': newTransform
                        });
                        isMoving = false;
                    });
                }
            }
        });
    }
    // Применить эффект к .circle с интенсивностью 20
    applyParallaxEffect($('.moove20'), 20);

    // Применить эффект к .rectangle с интенсивностью 10
    applyParallaxEffect($('.moove10'), 2);

    $(".btn-click").click(function() {
        var countSpan = $("#count1");
        var countValue = parseInt(countSpan.text());

        if (countValue > 0) {
            countValue -= 1;
            countSpan.text(countValue);
        }
    });
    $(".btn-click").click(function() {
        var countSpan = $("#count2");
        var countValue = parseInt(countSpan.text());

        if (countValue > 0) {
            countValue -= 1;
            countSpan.text(countValue);
        }
    });
});