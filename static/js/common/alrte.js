function promptBox(val) {
    $('.prompt_box').show();
    $('.prompt_box>p').html(val);
    setTimeout(function () {
        $('.prompt_box').hide();
    }, 1000);
}
