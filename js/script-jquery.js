$(document).ready(function() {

  $("form").submit(function(event) {

    var str = $("#str").val();
    var result = cryptosquareEncoder(str);

    $("#result").text(result);

    event.preventDefault();

    $('.ui.basic.modal')
      .modal('show')
    ;
  });

});
