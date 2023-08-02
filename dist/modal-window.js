var openModal = document.querySelector(".open-modal");
var modal = document.querySelector(".modal");
openModal === null || openModal === void 0 ? void 0 : openModal.addEventListener("click", function () {
    console.log("click");
    modal === null || modal === void 0 ? void 0 : modal.showModal();
});
