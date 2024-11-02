document.addEventListener("DOMContentLoaded", function() {
    const backToHomeButton = document.querySelector(".back-home-button");

    backToHomeButton.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent the default anchor behavior
        window.location.href = "index.html";  // Redirect to the homepage
    });
});
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is loaded and ready to go!");
});
