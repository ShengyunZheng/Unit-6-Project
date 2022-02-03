$(".start-button").click(function() {
	$(".title").hide();
	$(".firstImage").hide();
    $(".start-button").hide();
    $(".the-doors").show();
});

$(".door1-image").dblclick(function() {
    $(".the-doors").hide();
    $(".door1outcome").show();
});

$(".fight1").click(function() {
    $(".passed").show();
    $(".door1outcome").hide();
    $(".fight").css("background-color", "#000000");
     $(".congrats").css("background-color", "#000000");
});

$(".escape1").click(function() {
    $(".failed").show();
    $(".door1outcome").hide();
    $(".escape").css("background-color", "#000000");
});
    
$(".door2-image").dblclick(function() {
    $(".the-doors").hide();
    $(".door2outcome").show();
    $(".passed").show();
    $(".fight").hide();
    $(".fightimage").hide();
    $(".congrats").css("background-color", "#000000");
    
});

$(".door3-image").dblclick(function() {
    $(".the-doors").hide();
    $(".door3outcome").show();
});

$(".Yes").click(function() {
    $(".failed").show();
    $(".door3outcome").hide();
    $(".escape").css("background-color", "#000000");
});

$(".No").click(function() {
    $(".door3outcome").hide();
    $(".the-doors").show();
});
