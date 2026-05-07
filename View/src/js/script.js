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

// ===== GRÁFICO MÊS =====
const labelsMes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago','Set','Out','Nov','Dez'];

const dataMes = {
  labels: labelsMes,
  datasets: [{
    label: 'Cadastro por mês (2026)',
    data: [65, 59, 80, 81],
    fill: false,
    borderColor: '#1ba8ff',
    tension: 0.1
  }]
};

const configMes = {
  type: 'line',
  data: dataMes,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          boxWidth: 0
        }
      }
    }
  }
};

const ctxMes = document.getElementById('meuGraficoMes').getContext('2d');
new Chart(ctxMes, configMes);


// ===== GRÁFICO ANO =====
const labelsAno = ['2020', '2021', '2022', '2023','2024','2025','2026'];

const dataAno = {
  labels: labelsAno,
  datasets: [{
    label: 'Cadastro por ano',
    data: [680, 550, 500, 550, 570, 500, 600],
    fill: false,
    borderColor: '#026402',
    tension: 0.1
  }]
};

const configAno = {
  type: 'line',
  data: dataAno,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          boxWidth: 0
        }
      }
    }
  }
};

const ctxAno = document.getElementById('meuGraficoAno').getContext('2d');
new Chart(ctxAno, configAno);