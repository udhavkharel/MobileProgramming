$(document).ready(function () {

    // Toggle navbar for mobile
    $("#hamburger").click(function () {
        $("#nav-links").slideToggle(300);
    });

    // Open login popup
    $("#loginBtn").click(function () {
        $("#overlay").fadeIn(200);
        $("#loginBox").fadeIn(200);
    });

    // Close login popup
    $("#closeLogin, #overlay").click(function () {
        $("#overlay").fadeOut(200);
        $("#loginBox").fadeOut(200);
    });

});
