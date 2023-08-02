const openModal = document.querySelector(".open-modal");
const modal = document.querySelector(".modal") as any
openModal?.addEventListener("click", () => {
  console.log("click");
  modal?.showModal();
});
