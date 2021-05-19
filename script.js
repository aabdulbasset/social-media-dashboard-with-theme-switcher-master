$("i").each(textcolor)
function textcolor(){
    if($(this)[0].className == "fas fa-angle-down"){
        $(this).css("color","red")
    }else{
        $(this).css("color","lightgreen")
    }
}

$(".switch-path").click(changeTheme)
$(".card,.overview").hover(hoveredFunction,unhoveredFunction)
function unhoveredFunction(){
    if( $("body").css("background-color") != "rgb(255, 255, 255)" ){
        $(this).animate({backgroundColor:"hsl(228, 28%, 20%)"},"fast",function(){$(this).removeAttr('style'); })
    }else{
        $(this).animate({backgroundColor:"hsl(227, 47%, 96%)"},"fast", function(){$(this).removeAttr('style'); })
        
    }
}
function hoveredFunction(){
    console.log()
    if( $("body").css("background-color") != "rgb(255, 255, 255)" ){
        console.log("triggered")
        $(this).animate({backgroundColor:"hsl(228, 28%, 30%)"},"fast")
    }else{
        $(this).animate({backgroundColor:"hsl(227, 47%, 86%)"},"fast")
        
    }
}

function changeTheme(){
    console.log("Theme is changing...")
    $("h1,h2").toggleClass("black-h1")
    $("small, h5").toggleClass("black-small")
    $("body").toggleClass("lightbg")
    $(".switcher-container").toggleClass("mobileSwitch")
    $(".card, .overview").toggleClass("lightCardBg")
    $(".switch-path").toggleClass("switch-light")
    console.log($(".switch-knob").css("left"))
    if($(".switch-knob").css("left") == "2.5px"){
        $(".switch-knob").animate({left:"50%"})
    }else{
        $(".switch-knob").animate({left:"5%"})
    }
}