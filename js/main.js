
 



window.addEventListener('DOMContentLoaded', function () {

    $("#basic-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            age: {
                required: true,
                number: true,
                min: 18
            },
            email: {
                required: true,
                email: true
            },
            weight: {
                required: {
                    depends: function (elem) {
                        return $("#age").val() > 50
                    }
                },
                number: true,
                min: 0
            }
        },
        messages: {
            name: {
                minlength: "Name should be at least 3 characters"
            },
            age: {
                required: "Please enter your age",
                number: "Please enter your age as a numerical value",
                min: "You must be at least 18 years old"
            },
            email: {
                email: "The email should be in the format: abc@domain.tld"
            },
            weight: {
                required: "People with age over 50 have to enter their weight",
                number: "Please enter your weight as a numerical value"
            }
        }
    });

    let sendBtn = document.getElementById("sendBtn");

    let checkBoxOne = document.getElementById("checkboxOne");
    let checkBoxTwo = document.getElementById("checkboxTwo");


    sendBtn.addEventListener("click", () => {


        function postToGoogle() {
            let field1 = $("#firstName").val();
            let field2 = $("#lastName").val();
            let field3 = $("#email").val();
            let field4 = $("#phoneNumber").val();
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



