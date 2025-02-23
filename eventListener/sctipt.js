document.getElementById("blue-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

document.getElementById("update-btn").addEventListener("click", function () {
  const titleUpdate = document.getElementById("title");
  titleUpdate.innerText = "Text change kore feleci";
});

document.getElementById("submit-btn").addEventListener("click", function () {
  const changeItem = document.getElementById("input-name");
  const need = changeItem.value;
  if (need !== "") {
    document.getElementById("name-of-user").innerText = need;
    changeItem.value = "";
  }
});
