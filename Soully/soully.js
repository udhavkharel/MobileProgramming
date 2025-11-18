$(document).ready(function () {

    // Toggle navbar for mobile
    $("#hamburger").click(function () {
        $("#nav-links").slideToggle(1500);
    });

    // Open login popup
    $("#loginBtn").click(function () {
        $("#overlay").fadeIn(1000);
        $("#loginBox").fadeIn(1000);
    });

    // Close login popup
    $("#closeLogin, #overlay").click(function () {
        $("#overlay").fadeOut(200);
        $("#loginBox").fadeOut(200);
    });

});
