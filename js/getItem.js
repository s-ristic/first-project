window.onload = function () {
    "use strict";

    var get = sessionStorage.getItem('Korisnik');
    var user = document.getElementById('user');

    user.innerHTML = get + ',';

};
