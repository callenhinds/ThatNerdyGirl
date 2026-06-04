$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()

        var name = $('#name').val()
        var email = $('#email').val()
        var phone = $('#phone').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(name.length > 2) {
            statusElm.append('<div>Name is valid</div>')
        } else {
            statusElm.append('<div>Name is not valid</div>')
        }
            
        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            statusElm.append('<div>Email is not valid</div>')
        }

         if(phone.length >== 10) {
            statusElm.append('<div>Name is valid</div>')
        } else {
            statusElm.append('<div>Name is not valid</div>')
        }

        if(topic !== "") {
            statusElm.append('<div>Topic is valid</div>');
        } else {
            statusElm.append('<div>Please select a topic.</div>');
        }
    })
})
