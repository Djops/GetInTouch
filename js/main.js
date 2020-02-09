
$(document).ready(function () {
    $("#basic-form").validate({
        rules: {
            name: {
                required: true,

            },
            lastName: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            phoneNumber: {
                required: true,
                number: true,
            },
        },
        messages: {
            name: {
                minlength: "Name should be at least 3 characters"
            },
            number: {
                required: "Please enter your phone nubmer",
                number: "Please enter your phone number as a numerical value",

            },
            email: {
                email: "The email should be in the format: abc@domain.tld"
            },
        }
    });
});


window.addEventListener('DOMContentLoaded', function () {

    let sendBtn = document.getElementById("sendBtn");
    let checkBoxOne = document.getElementById("checkboxOne");
    let checkBoxTwo = document.getElementById("checkboxTwo");


    sendBtn.addEventListener("click", () => {
        function postToGoogle() {
            let firstName = $("#firstName").val();
            let lastName = $("#lastName").val();
            let email = $("#email").val();
            let phoneNumber = $("#phoneNumber").val();
            let country = $("#country option:selected").text();
            let subject = $("#subject option:selected").text();
            let company = $("#company").val();
            let message = $("#message").val();

            if (checkBoxOne.checked == true && checkBoxTwo.checked == true) {
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSeXIF_SmjAFXVVMj0hgTDgx4Rypf7ECMDNGN0EicrbJ7O5Vtg/formResponse?",
                    data: {
                        "entry.1181121771": firstName, "entry.1564172378": lastName, "entry.760688583": email, "entry.488104186": phoneNumber, "entry.45235122": country
                        , "entry.1208686214": subject, "entry.518622280": company, "entry.267195901": message
                    },
                    type: "POST",
                    dataType: "xml",
                    success: function (d) {
                    },
                    error: function (x, y, z) {

                        $('#success-msg').show();
                        $('#form').hide();
                    }
                });
            } else {
                alert("you forgot to agree to the rules (checkbox)")
            }
            return false;
        }
        postToGoogle();
    })
});


