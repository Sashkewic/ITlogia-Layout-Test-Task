let clientForm = document.querySelector('#client-form');
let clientname = document.querySelector('#clientname').value;
let address = document.querySelector('#address').value;
let telephone = document.querySelector('#telephone').value;

let alertBlock = document.getElementById('form-alert');

$(document).ready(() => {
    $(clientForm).submit((e) => {
        e.preventDefault();

        $.ajax({
            url: $(this).attr('action'),
            cache: false,

            success: () => {
                $(alertBlock).css("display", "block");
            }
        })
    })
})