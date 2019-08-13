$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');
});

var myform = $("form#myform");
myform.submit(function (event) {
    event.preventDefault();

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";
    var template_id = "template_EDCZ87Gs";
    var result = document.getElementById("formResult")

    result.style.color = "#007bff";
    result.innerText = "Enviando..."
    emailjs.sendForm(service_id, template_id, myform[0])
        .then(function () {
            result.style.color = "green";
            result.innerText = "Contato enviado!"
            document.getElementById("myform").reset()
        }, function (err) {
            result.style.color = "crimson";
            result.innerText = "Houve um erro ao enviar, tente novamente!"
        });
    return false;
});