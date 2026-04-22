// Menu NavBar
document.getElementById('open_btn').addEventListener('click', function () { 
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

// Menu DropDown
const dropdownToggle = document.getElementById("navbarDropdown");
  const dropdownMenu = dropdownToggle.nextElementSibling;

  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });