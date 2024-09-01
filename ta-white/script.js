// function isClicked(param) {
//     $(param).click(() =>{
//         return true;
//     })

const { default: breakpoints } = require(["./libraries/swiper/src/core/breakpoints/index.mjs"]);

// const { default: breakpoints } = require(["./libraries/swiper/src/core/breakpoints/index.mjs"]);

//     return false;
// }

//$(".mainDropdown span").css("color", "whitesmoke");
function dropDown() {
    if(window.innerWidth > 1024)
    {
        var delay = 200, timeOutConst, timeOutConstUl;
        $('.dropDown-container a').hover(
            function () {
                clearTimeout(timeOutConst);
                $(this).parent().find("ul").addClass("dropDown-visible");
                $(this).parent().find("ul").removeClass("dropDown-not-visible");
                    
            }, function () {      
                timeOutConst = setTimeout(() => {
                    $(this).parent().find("ul").removeClass("dropDown-visible");
                    $(this).parent().find("ul").addClass("dropDown-not-visible");
                }, delay);
            }
        );

        $('.dropDown-container ul').hover(
            function () {
                clearTimeout(timeOutConstUl);
                $(this).addClass("dropDown-visible");
                $(this).removeClass("dropDown-not-visible");
                    
            }, function () {      
                timeOutConstUl = setTimeout(() => {
                    $(this).removeClass("dropDown-visible");
                    $(this).addClass("dropDown-not-visible");
                }, delay);
            }
        );

        $('.book-sub-list').hover(
            function () {
                //clearTimeout(timeOutConstUl);
                $(this).find("ul").css("display", "inline-block");
                    
            }, function () {      
                //timeOutConstUl = setTimeout(() => {
                    $(this).find("ul").css("display", "none");
                //}, delay);
            }
        );
    }
    else{
        $(".mainDropdown").click(() =>{
            console.log("hey")
            visibility = !(visibility);
        })
        $(".book-sub-list").css("display", "none")
        var visibility = false;
        var subVisibility = false;
        var isClicked = false;
        var clickedObject;
        
        $('.book-list').click((event) =>{
            // console.log(event);
            event.preventDefault();
            document.querySelectorAll('.book-sub-list').forEach(element => {
                $(element).find(".dropDown-mainContainer").click(()=>{
                    visibility = true;
                    isClicked = true;
                    clickedObject = element;        
                })
            });
            if (visibility == true && isClicked == true) {
                // console.log($(this).html())
                
                $(clickedObject).find("ul").toggle(50);
                $(clickedObject).find("div").toggleClass("rotate");
                isClicked = false;
            }else{
                //visibility = !(visibility);
                if(visibility){
                    $(".book-sub-list").css("display", "block");
                    $(".mainDropdown").css("transform","rotate(-90deg)");
                }else{
                    $(".book-sub-list").css("display", "none");
                    $(".mainDropdown").css("transform","rotate(0deg)");
                }
                
            }
        })
    }
}

$(".menu-icon-container").click(() =>{
    $(".menu-list").fadeIn(500);
    $(".menu-list").css("right","0px");
});


$("#book_3d").animate({
    opacity: 1,
    paddingLeft: 0
}, 600);

$(".close-menu-icon-container").click(() =>{
    $(".menu-list").fadeOut(500);
    $(".menu-list").css("right","-500px");
});

dropDown();
$(".dropDown-mainContainer").click(() => {
    //alert("hey")
    $(this).find("span").toggleClass("fa-chevron-down fa-chevron-up")
})

addEventListener("resize", () =>{
    dropDown();
})

$(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();
    $('.learn-more div.section-2').css({
        'background-position-y': - (scrollPosition*0.07) + 'px' // Adjust multiplier for subtle effect
    });
    $('.about-author').css({
        'background-position-y': - (scrollPosition*0.07) + 'px' // Adjust multiplier for subtle effect
    });
    $('.extras').css({
        'background-position-y': - (scrollPosition*0.07) + 'px' // Adjust multiplier for subtle effect
    });
    $('.signup-form').css({
        'background-position-y': - (scrollPosition*0.07) + 'px' // Adjust multiplier for subtle effect
    });
    $('.page-title').css({
        'background-position-y': - (scrollPosition*0.07) + 'px' // Adjust multiplier for subtle effect
    });
});


// ***************************Carousel 

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            "slidesPerView": 1,
            "slidesPerGroup": 1
        },
        767: {
            "slidesPerView": 1,
            "slidesPerGroup": 1
        },
        880: {
            "slidesPerView": 1,
            "slidesPerGroup": 1
        },
        1025: {
            "slidesPerView": 2,
            "slidesPerGroup": 1
        },
        1366: {
            "slidesPerView": 2,
            "slidesPerGroup": 1
        }
    },
    // autoplay: true,
})

AOS.init();
$(".books-text").click(() =>{
    window.location = 'books.html';
})