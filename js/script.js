$(".open").click(function() {

    $(".dropdown").css({ "display":"block" });

    $(".close").css({ "display":"block" });

    $(".open").css({ "display":"none" });


})

$('.close').click(function() {

    $(".close").css({ "display":"none"});

    $(".open").css({ "display":"block" });

    $(".dropdown").css({ "display":"none" });


});

$('.dropdown ').click(function(event){

    event.stopPropagation();

});