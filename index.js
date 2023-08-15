var rate = 1;
var nums = ["", "one", "two", "three", "four", "five"];

// one
$(".one").on("mouseover", function () {
    $(".one").addClass("hover");
});

$(".one").on("mouseout", function () {
    $(".one").removeClass("hover");
});

$(".one").on("click", function () {
    $(".one").addClass("selected");
    var previous = nums[rate];
    $("." + previous).removeClass("selected");
    rate = 1;
    $("#rating").text(rate);
});

// two
$(".two").on("mouseover", function () {
    $(".two").addClass("hover");
});

$(".two").on("mouseout", function () {
    $(".two").removeClass("hover");
});

$(".two").on("click", function () {
    $(".two").addClass("selected");
    var previous = nums[rate];
    $("." + previous).removeClass("selected");
    rate = 2;
    $("#rating").text(rate);
    console.log($("#rating"));
});

// three
$(".three").on("mouseover", function () {
    $(".three").addClass("hover");
});

$(".three").on("mouseout", function () {
    $(".three").removeClass("hover");
});

$(".three").on("click", function () {
    $(".three").addClass("selected");
    var previous = nums[rate];
    $("." + previous).removeClass("selected");
    rate = 3;
    $("#rating").text(rate);
});

// four
$(".four").on("mouseover", function () {
    $(".four").addClass("hover");
});

$(".four").on("mouseout", function () {
    $(".four").removeClass("hover");
});

$(".four").on("click", function () {
    $(".four").addClass("selected");
    var previous = nums[rate];
    $("." + previous).removeClass("selected");
    rate = 4;
    $("#rating").text(rate);
});

// five
$(".five").on("mouseover", function () {
    $(".five").addClass("hover");
});

$(".five").on("mouseout", function () {
    $(".five").removeClass("hover");
});

$(".five").on("click", function () {
    $(".five").addClass("selected");
    var previous = nums[rate];
    $("." + previous).removeClass("selected");
    rate = 5;
    $("#rating").text(rate);
});

$(".submit").on("mouseover", function () {
    $(".submit").addClass("submit-hover");
});

$(".submit").on("mouseout", function () {
    $(".submit").removeClass("submit-hover");
});

$("#rating").text(4);