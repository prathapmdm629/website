function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "1234") {
    alert("🔥 Welcome Rider!");
  } else {
    document.getElementById("error").innerText = "❌ Wrong Login";
  }
}
