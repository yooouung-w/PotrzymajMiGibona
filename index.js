
document.querySelector(".go").addEventListener('click', () => {
    var firstname = document.querySelector(".firstname");
    var surname = document.querySelector(".surname");
    var pesel = document.querySelector(".pesel")
    var urodzin = document.querySelector(".urodzin")
    var image = document.querySelector(".image");
    
    var params = new URLSearchParams();
    params.set("firstname", firstname.value);
    params.set("surname", surname.value);
    params.set("image", image.value);
    params.set("pesel", pesel.value)
    params.set("urodzin", urodzin.value)
    
     location.href = "id.html?" + params;

});
