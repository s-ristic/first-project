window.onload = function () {
    "use strict";

    function setItem() {
        var name = document.getElementById('name').value;
        sessionStorage.setItem('Korisnik', name);
    }

    function onSubmit() {
        var button = document.getElementById('submit');
        button.addEventListener('click', setItem, false);
    }

    onSubmit();
};
