$(window).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $("header").addClass('sbg');
        }else {
            $("header").removeClass("sbg");
        }
    })

    $(".hamburger").click(function(){
        $(".hamburger").toggleClass("active");
        $(".navlinks").toggleClass("active");
     })

     $(".navlinks").on("click",'*',()=>{
        $(".hamburger").removeClass("active");
            $(".navlinks").removeClass("active");
     })
})