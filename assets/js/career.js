(function () {
  //Show Modal
  $("#exampleModalLong").on("show.bs.modal", function (e) {
    console.log("show");
    $(".firstBlur").addClass("modalBlur");
  });

  //Remove modal
  $("#exampleModalLong").on("hide.bs.modal", function (e) {
    console.log("hide");
    $(".firstBlur").removeClass("modalBlur");
  });
})();
