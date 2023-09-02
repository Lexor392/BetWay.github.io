$(document).ready(function () {
    var clicks = 0; // Счетчик кликов

    $(".btn-click").click(function () {
        clicks++; // Увеличиваем счетчик при каждом клике

        if (clicks === 1) {
            // При первом клике
            $(".circle").addClass("active");
            var randomRotate = Math.random() < 0.5 ? "rotate(2160deg)" : "rotate(2052deg)";
            $(".circle.active").css("transform", randomRotate);
            $(this).attr("disabled", true); // Делаем кнопку недоступной
            setTimeout(function () {
                $(".btn-click").attr("disabled", false); // Через 15 секунд убираем атрибут disabled
            }, 15000);
        } else if (clicks === 2) {
            // При втором клике
            $(".circle.active").css({
                "transform": "rotate(5076deg) scale(1.1)" // Вращаем и увеличиваем блок
            });
            $(this).attr("disabled", true); // Делаем кнопку недоступной навсегда

            // Через 15 секунд возвращаем масштаб к исходному (scale(1))
            setTimeout(function () {
                $(".circle").removeClass("active");
                $(".circle").css("transform", "rotate(5076deg) scale(1)");
            }, 15000);
        }
    });
});

$(document).ready(function() {
    var circle = $('.circle');

    $(document).mousemove(function(e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        var centerX = circle.offset().left + circle.width() / 2;
        var centerY = circle.offset().top + circle.height() / 2;

        var deltaX = mouseX - centerX;
        var deltaY = mouseY - centerY;

        var percentX = deltaX / (circle.width() / 2);
        var percentY = deltaY / (circle.height() / 2);

        var parallaxX = percentX * 20; // Измените значение, чтобы настроить эффект
        var parallaxY = percentY * 20; // Измените значение, чтобы настроить эффект

        circle.css({
            'transform': 'translate(' + parallaxX + 'px,' + parallaxY + 'px)'
        });
    });
});