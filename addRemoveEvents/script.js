document
  .getElementById("list-items")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.remove();
    }
  });

document.getElementById("add-item-btn").addEventListener("click", function () {
  const ol = document.getElementById("list-items");
  const li = document.createElement("li");
  li.classList.add("items");
  li.innerText = "New item added";
  ol.appendChild(li);
});
