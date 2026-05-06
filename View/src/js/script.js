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

//TABS
  const tabs = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));
  
  const tabClicked = (tab) => {
      tabs.forEach(tab => tab.classList.remove('active'));
      tab.classList.add('active');
  
      const contents = document.querySelectorAll('.content');
      contents.forEach(content => content.classList.remove('show'));
  
      const contentId = tab.getAttribute('content-id');
      const content = document.getElementById(contentId);
  
      content.classList.add('show');
  }
  
  const currentActiveTab = document.querySelector('.tab-btn.active');
  tabClicked(currentActiveTab);