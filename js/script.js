window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('btnBackToTop').style.display = "block";
    } else {
        document.getElementById('btnBackToTop').style.display = "none";
    }
}

function returnToTop() {
    document.documentElement.scrollTop = 0; // For chrome browser
    document.body.scrollTop = 0; // For Safari
}