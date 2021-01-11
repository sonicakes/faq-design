$( document ).ready(function() {
    console.log( "ready!" );
    $(".answer").addClass("hidden");
    $(".question").click(function(){
        $(this).next(".answer").toggleClass("hidden");

    });
});