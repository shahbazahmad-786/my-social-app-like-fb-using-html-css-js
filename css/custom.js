// <For Tooltip> //

$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});

// <For Tooltip/> //


// <Class add and remove of class overflowCat> //

var seeMoreC = document.getElementById("seemoreC");

seeMoreC.onclick = function () {
    var sidebarcat = document.getElementById("side-category");

    sidebarcat.classList.toggle("overflowCat");
};

// </Class add and remove of class overflowCat> //



// <Class add and remove of class overflowAcount> //

var seeMoreA = document.getElementById("seemoreA");

seeMoreA.onclick = function () {
    var sidebarac = document.getElementById("side-acount");

    sidebarac.classList.toggle("overflowAc");
};

// </Class add and remove of class overflowAcount> //



// <For add post form> //

(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

})();

// <For add post form/> //