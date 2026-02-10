// =====================================================
// DASHBOARD JAVASCRIPT
// =====================================================

// ----------------
// Sidebar Toggle
// ----------------
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const menuToggle = document.getElementById("menuToggle");
const sidebarToggle = document.getElementById("sidebarToggle");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    if (sidebar) sidebar.classList.add("is-open");
    if (sidebarOverlay) sidebarOverlay.classList.add("is-open");
  });
}

if (sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    if (sidebar) sidebar.classList.remove("is-open");
    if (sidebarOverlay) sidebarOverlay.classList.remove("is-open");
  });
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", () => {
    if (sidebar) sidebar.classList.remove("is-open");
    sidebarOverlay.classList.remove("is-open");
  });
}

// ----------------
// Stats Cards Slider
// ----------------
const statsSlider = document.getElementById("statsSlider");
const statsPrevBtn = document.getElementById("statsPrev");
const statsNextBtn = document.getElementById("statsNext");

if (statsSlider && statsPrevBtn && statsNextBtn) {
  const cardWidth = 280; // 256px (card) + 16px (gap) + padding
  const scrollAmount = cardWidth;

  console.log("Stats slider initialized");

  statsPrevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    statsSlider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
    console.log("Prev clicked");
  });

  statsNextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    statsSlider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    console.log("Next clicked");
  });
} else {
  console.log("Stats slider elements not found", {
    slider: statsSlider,
    prev: statsPrevBtn,
    next: statsNextBtn,
  });
}

// ----------------
// Tabs
// ----------------
const tabButtons = document.querySelectorAll(".tabs__button");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove("tabs__button--active"));

    // Add active class to clicked button
    button.classList.add("tabs__button--active");

    // Get tab name
    const tabName = button.getAttribute("data-tab");
    console.log("Tab selected:", tabName);

    // Here you can add logic to show/hide tab content
  });
});

// ----------------
// Charts
// ----------------
const chartColors = {
  primary: "#0066FF",
  success: "#4CAF50",
  danger: "#DC3545",
  warning: "#FFC107",
  info: "#17A2B8",
  gray: "#6C757D",
  dark: "#1E3A5F",
};

// Chart 1: Resumen de Máquinas (Bar Chart)
const ctx1 = document.getElementById("chartMaquinas");
if (ctx1) {
  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: [
        "Totales",
        "Jugando",
        "Asignadas",
        "Incognito",
        "En pausa",
        "No asignar",
      ],
      datasets: [
        {
          label: "Máquinas",
          data: [40, 0, 1, 0, 0, 0],
          backgroundColor: [
            chartColors.dark,
            chartColors.primary,
            chartColors.success,
            chartColors.warning,
            chartColors.danger,
            chartColors.gray,
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 11,
            },
          },
        },
      },
    },
  });
}

// Chart 2: Resumen de Impresión (Bar Chart)
const ctx2 = document.getElementById("chartImpresion");
if (ctx2) {
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Asignadas", "Pendientes"],
      datasets: [
        {
          label: "Cupones",
          data: [3.0, 3.0],
          backgroundColor: [chartColors.primary, chartColors.info],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 4.0,
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });
}

// Chart 3: Resumen de Asignación (Doughnut Chart)
const ctx3 = document.getElementById("chartAsignacion");
if (ctx3) {
  new Chart(ctx3, {
    type: "doughnut",
    data: {
      labels: ["Asignadas"],
      datasets: [
        {
          data: [100],
          backgroundColor: [chartColors.primary],
          borderWidth: 0,
          cutout: "80%",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  });
}

console.log("Dashboard loaded successfully!");
