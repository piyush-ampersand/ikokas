$(document).ready(function () {
    $(".carousel").on("slid.bs.carousel", function () {
        // $('#formcontainer').hover(function(){
        //     $(".carousel_container").carousel('pause');
        //  },function(){
        //     $(".carousel_container").carousel('cycle');
        //  });
        // console.log("slide event!");
        if ($(".internal_caro .item:last-child").hasClass("active")) {
            $(".carousel_container").carousel('pause');
            // $(".down").remove();
        }else{
            // $(".down").add();
        }
    });
})