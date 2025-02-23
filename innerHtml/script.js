
const commentContainer = document.getElementById("comment-container");
document
  .getElementById("submit-btn")
  .addEventListener("click", function () {
    const clickEvent = document.getElementById("comment-text");
    const p = document.createElement("p");
    p.innerText = clickEvent.value;
    commentContainer.appendChild(p);
    clickEvent.value = "";
  });