const openModal = document.querySelector(".btn-open-window-modal");
const modal = document.querySelector(".modal") as any
openModal?.addEventListener("click", () => {
  console.log("click");
  modal?.showModal();
});
