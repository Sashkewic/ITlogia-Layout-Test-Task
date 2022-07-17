let clientForm = document.querySelector('#client-form');

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