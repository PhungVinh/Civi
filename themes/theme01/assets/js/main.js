window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  $("#single_item").slick({
    dots: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 4000,
  });
    $('#lazySanPhamNoiBat').slick({
    dots: false ,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
       
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ],
  });
  
});