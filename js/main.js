




window.addEventListener('DOMContentLoaded', function () {

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
            phoneNumber: {
                required: "Please enter your phone number",
                number: "Please enter your phone number as a numerical value",
            },
            email: {
                email: "The email should be in the format: abc@domain.tld"
            }
        }
    });


    let sendBtn = document.getElementById("sendBtn");
    let checkBoxOne = document.getElementById("checkboxOne");
    let checkBoxTwo = document.getElementById("checkboxTwo");


    sendBtn.addEventListener("click", () => {


        function postToGoogle() {
            let name = $("#firstName").val();
            let lastName = $("#lastName").val();
            let email = $("#email").val();
            let phoneNumber = $("#phoneNumber").val();
            let field5 = $("#country option:selected").text();
            let field6 = $("#subject option:selected").text();
            let field7 = $("#company").val();
            let field8 = $("#message").text();







            if (checkBoxOne.checked == true && checkBoxTwo.checked == true) {
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSeXIF_SmjAFXVVMj0hgTDgx4Rypf7ECMDNGN0EicrbJ7O5Vtg/formResponse?",
                    data: {
                        "entry.1181121771": field1, "entry.1564172378": field2, "entry.760688583": field3, "entry.488104186": field4, "entry.45235122": field5
                        , "entry.1208686214": field6, "entry.518622280": field7, "entry.267195901": field8
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



