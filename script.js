// alert("working");
let randomNumb = Math.floor(Math.random()*20)+1;

$("#checking").click(function(){
    let retriveNumb = parseInt($("#inputbox").val());
    let currscore = parseInt($("#score").text());
    let currhigh = parseInt($("#highscore").text());
    // alert(currhigh);
    if(retriveNumb === randomNumb){
        $(".guess").text("Correct number!");
        $(".number").text(randomNumb);
        $("body").addClass("won");
        if(currscore > currhigh){
            $("#highscore").text(currscore.toString());
        }
    } else if(retriveNumb < randomNumb){
        $(".guess").text("🔻 Too Low!");
        currscore--;
        $("#score").text(currscore);
    } else {
        $(".guess").text("🔺 Too High!");
        currscore--;
        $("#score").text(currscore);
    }
});

$(".again").click(function(){
    $("body").removeClass("won");
    $("#score").text("20");
    $(".number").text("?");
    $(".guess").text("Start guessing...");
    randomNumb = Math.floor(Math.random()*20)+1;
    $("#inputbox").val("");
});