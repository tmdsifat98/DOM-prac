const updatedInfo = document.getElementById("updated-info");
document.getElementById("submit-btn").addEventListener("click", function () {
  const userMail = document.getElementById("email-box").value;
  document.getElementById("email-box").value = "";
  const userPass = document.getElementById("pass-box").value;
  document.getElementById("pass-box").value = "";
  const userFile = document.getElementById("file-box").value;
  document.getElementById("file-box").value = "";
  const div = document.createElement("div");
  div.innerHTML = `
      <p>${userMail}</p>
      <p>${userPass}</p>
      <p>${userFile}</p>`;
  updatedInfo.appendChild(div);
});
