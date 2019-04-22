$(function(){
  $("[data-toggle='tooltip']").tooltip();
  $("[data-toggle='popover']").popover();
  $('.carousel').carousel({
    interval : 3500
  });
  $('#contacto').on('show.bs.modal', function(e){
    console.log("el modal se muestra");
  });
  $('#contacto').on('shown.bs.modal', function(e){
    console.log("el modal se mostro");
    $("#btnSend").on("click", function() {
      $(this).prop("disabled", true);
    });
  });
  $('#contacto').on('hide.bs.modal', function(e){
    console.log("el modal se oculta");
  });
  $('#contacto').on('hidden.bs.modal', function(e){
    console.log("el modal se oculto");
    $("#btnSend").prop("disabled", false);
  });
});
   