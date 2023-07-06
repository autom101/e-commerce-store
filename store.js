const removeBtn = document.querySelectorAll(".btn-remove-item");

removeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const item = btn.parentElement.parentElement;
    console.log(item);
    item.remove();
  });
});
