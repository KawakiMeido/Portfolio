document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("SearchForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        let inputValue = document.getElementById("SearchFormInput").value.toLowerCase();

        if (inputValue === "minh duy" || inputValue === "minhduy" || inputValue === "minh dui" || inputValue === "minhdui" || inputValue === "dui") {
            window.location.href = "../minh_duy/minh_duy.html"; // Redirect to admin page
        } else if (inputValue === "minh huy" || inputValue === "minhhuy" || inputValue === "kawakimeido" || inputValue === "athirstymaid") {
            window.location.href = "../minh_huy/minh_huy.html"; // Redirect to user page
        } else if (inputValue === "thành tài" || inputValue === "thanh tai" || inputValue === "thanhtai" || inputValue === "tài smile" || inputValue === "tai smile" || inputValue === "taismile") {
            window.location.href = "../thanh_tai/thanh_tai.html"; // Redirect to user page
        } else if (inputValue === "vân kha" || inputValue === "van kha" || inputValue === "vankha" || inputValue === "vaka") {
            window.location.href = "../van_kha/van_kha.html"; // Redirect to user page
        } else if (inputValue === "james aluner" || inputValue === "jamesaluner") {
            window.location.href = "Sus.html"; // Redirect to user page
        } else {
            alert("Trang không tồn tại.");
        }
    });
})