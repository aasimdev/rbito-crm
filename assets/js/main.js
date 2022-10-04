$(function () {
    $(".toggle-password").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $('.packgeCheck input').on('change',function(){
        if($(this).is(":checked")){
            $(this).val('Premium');
            $(this).next().text('Premium');
        } else {
            $(this).val('Normal');
            $(this).next().text('Normal');
        }


    });

})