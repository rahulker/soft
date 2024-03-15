document.addEventListener("DOMContentLoaded", function () {
  var editButtons = document.querySelectorAll("#edit");
  var overlay = document.querySelector(".overlay");
  var crossButton = document.querySelector(".cross-button");
  var body = document.body;
  var boxModal = document.querySelector(".box-modal");

  // Iterate over each edit button and attach event listener
  editButtons.forEach(function (editButton) {
    editButton.addEventListener("click", function () {
      body.classList.add("active-modal");
      boxModal.classList.add("modal-show");
    });
  });

  overlay.addEventListener("click", function () {
    body.classList.remove("active-modal");
    boxModal.classList.remove("modal-show");
  });

  crossButton.addEventListener("click", function () {
    body.classList.remove("active-modal");
    boxModal.classList.remove("modal-show");
  });
});
