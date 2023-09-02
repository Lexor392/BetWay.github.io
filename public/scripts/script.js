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
