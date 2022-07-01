$(document).ready(function () {
    $("a").mouseenter(function () {
        $(this).css({ "color": "white" })
    })

    let width = Number($('nav').width())
    if (width < 1000) {
            $('#links').hide();
            $('#toggler').show();
            $('#line').hide()
            $('#moon').hide()
            $('#getstart').css({"padding-left":"34vw"})
            $("#demo").hide()
            // $("#box").css({"margin-left":"9vw"})
    }
    else{
        $('#links').show();
    $('#toggler').hide();
}
if (width<400) {
    $("#box").css({"margin-left":"-24vw"})
}



    $(window).resize(function () {
        width = $('nav').width()
        if (width < 1000) {
            $('#links').hide();
            $('#toggler').show();
            $('#line').hide()
            $('#moon').hide()
            $('#getstart').css({"padding-left":"34vw"})
            $("#demo").hide()
            // $("#box").css({"margin-left":"9vw"})
        }
        else {
            $('#toggler').hide();
            $('#links').show();
            $('#links').css({ "top": '', 'position': '' })
            $('#line').hide();
            $('#dd').css({"display":"block"})
            $('#moon').show()
            $('#getstart').css({"padding-left":"43vw"})
            $("#demo").show()
            $("#box").css({"margin-left":"26vw"})
        }
        if (width<400) {
            $("#box").css({"margin-left":"-24vw"})
        }else{
            $("#box").css({"margin-left":"26vw"})
        }
    }
        
    )


$('#toggler').click(function () {

    $('#line').fadeToggle()
    $('#links').toggle(function () {
        $('#dd').css({"display":"contents"})
        $(this).css({ "top": "85px", "position": "absolute","display":"content" })


    }

    )
})



})