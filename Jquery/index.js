// $("button").click(function(){
//     $("h1").css("color", "red");
// })

// $("input").keypress(function(event){
//     $("h1").text(event.key).css("color", "red");
// });
$("button").on("click", function() {
    $("h1").slideDown().slideUp();
});
