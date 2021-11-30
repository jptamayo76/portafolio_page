$(function () {

  $('[data-bs-toggle="popover"]').popover();

  $('[data-bs-toggle="tooltip"]').tooltip();

  $("a").click(function () {
    var gato = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(gato).offset().top - 65
      },
      1000
    )
  });



  /*
    pruebas


  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });

  $("u").on("dblclick", function () {
    $(this).addClass("text-danger");
  });

  $(".recipe-card-title-custom").click(function () {
    $("#recetas .card").toggle("slow");
    $("#recetas .card").toggle("slow");
  });

  pruebas
  
    $("a").click(function (event) {

      $(".recipe-card-title-custom").toggle();

      alert(this.hash);

      alert($(this).text());
  });

  */

});