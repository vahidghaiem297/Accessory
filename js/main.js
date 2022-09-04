
$('#main').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
});

$('#blog').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('#all-products').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
});


$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

var openSideBar = document.getElementById("mobile");
openSideBar.onclick = function(){
    document.getElementById("sidebar").classList.add("active");
}
var closeSideBar = document.getElementById("close");
closeSideBar.onclick = function(){
    document.getElementById("sidebar").classList.remove("active");
} 