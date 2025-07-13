
function toggleWindow(id) {
  const win = document.getElementById(id);
  if (win.style.display === "block") {
    win.style.display = "none";
  } else {
    win.style.display = "block";
  }
}
