$(document).ready(function () {
    

    const person = document.querySelectorAll('.person');
    $(".person").click(function () {
        person.forEach(item => {
            $(item).removeClass("active");
            $(this).addClass("active");
        });
    });

    $(".neos").click(function () { 
        $(".talkPage-in").addClass("dpNone")
        $(".neos-talk").removeClass("dpNone")
        
    });

    $(".bob").click(function () {
        $(".talkPage-in").addClass("dpNone")
        $(".bob-talk").removeClass("dpNone")
    });

    $(".mona").click(function () {
        $(".talkPage-in").addClass("dpNone")
        $(".mona-talk").removeClass("dpNone")
    });

    $(".ciglik").click(function () {
        $(".talkPage-in").addClass("dpNone")
        $(".ciglik-talk").removeClass("dpNone")
    });

    $(".resMenu").click(function() { 
        
        $(".sideNav").toggle(0,function(){});
        if (document.querySelector(".sideNav").style.display == "none") {
            $(".resMenu").css({left : "00px"});
        }else{
            $(".resMenu").css({ left: "310px" });
        }
        //console.log(document.querySelector(".sideNav").style.display);
    });
    

    $(window).resize(function () { 
        if (window.innerWidth > 699 ) {
            $(".sideNav").show();
            if (document.querySelector(".sideNav").style.display == "none") {
                $(".resMenu").css({ left: "00px" });
            } else {
                $(".resMenu").css({ left: "310px" });
            }
        }
        
    })
});


// const list = document.querySelectorAll('.person');
// function activelist() {
//     list.forEach((item) =>
//         item.classList.remove('active'));
//     this.classList.add('active');
// }
// list.forEach((item) =>
//     item.addEventListener('click', activelist));