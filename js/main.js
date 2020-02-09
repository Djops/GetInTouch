



window.addEventListener('DOMContentLoaded', function () {

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


            // simple validation

            if (field1 == "") {
                alert('Please Fill Your Name');
                document.getElementById("firstName").focus();
                return false;
            }
            if (field2 == "") {
                alert('Please Fill Your Last name');
                document.getElementById("lastName").focus();
                return false;
            }
            if (field3 == "") {
                alert('Please Fill Your Email');
                document.getElementById("email").focus();
                return false;
            }

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
