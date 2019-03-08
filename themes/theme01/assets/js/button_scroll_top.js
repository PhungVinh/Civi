function button_scroll_top() {
    if ($(".btn_top").length > 0) {
        $(window).scroll(function () {
            var e = $(window).scrollTop();
            if (e > 300) {
                $(".btn_top").show()
            } else {
                $(".btn_top").hide()
            }
        });
        $(".btn_top").click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 2000);
        })
    }
}