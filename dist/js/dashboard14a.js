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
// Dashboard 13 Tabs
// ----------------
const d13Tabs = document.querySelectorAll(".d13-listado-tabs");

d13Tabs.forEach((tabsContainer) => {
  const buttons = tabsContainer.querySelectorAll(".d13-listado-tabs__tab");
  const contents = tabsContainer.querySelectorAll(".d13-listado-tabs__content");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabName = button.getAttribute("data-tab");

      buttons.forEach((btn) =>
        btn.classList.remove("d13-listado-tabs__tab--active"),
      );
      contents.forEach((content) =>
        content.classList.remove("d13-listado-tabs__content--active"),
      );

      button.classList.add("d13-listado-tabs__tab--active");

      const target = tabsContainer.querySelector(`#${tabName}`);
      if (target) {
        target.classList.add("d13-listado-tabs__content--active");
      }
    });
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
  accent: "#46B5E8",
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

// Chart 4: Analítica de Visitantes (Line Chart)
const ctx4 = document.getElementById("chartVisitantes");
if (ctx4) {
  new Chart(ctx4, {
    type: "line",
    data: {
      labels: [
        "Oct 25",
        "1st Oct",
        "25 Oct",
        "Nov 25",
        "1st Mar",
        "20 Mar",
        "25 Mar",
        "25",
        "10 Oct",
      ],
      datasets: [
        {
          label: "Clientes Únicos",
          data: [25, 40, 35, 30, 45, 35, 40, 30, 35],
          borderColor: chartColors.primary,
          backgroundColor: "rgba(0, 102, 255, 0.05)",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: chartColors.primary,
          pointBorderColor: chartColors.primary,
          pointBorderWidth: 2,
        },
        {
          label: "Visitas en sala",
          data: [15, 25, 20, 18, 30, 22, 25, 20, 22],
          borderColor: "#4db8ff",
          backgroundColor: "rgba(77, 184, 255, 0.05)",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#4db8ff",
          pointBorderColor: "#4db8ff",
          pointBorderWidth: 2,
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
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 10,
          cornerRadius: 4,
          titleFont: {
            size: 12,
            weight: "bold",
          },
          bodyFont: {
            size: 11,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 60,
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.08)",
            drawBorder: false,
          },
          ticks: {
            stepSize: 20,
            font: {
              size: 11,
            },
            color: "rgba(0, 0, 0, 0.6)",
          },
        },
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            font: {
              size: 11,
            },
            color: "rgba(0, 0, 0, 0.6)",
          },
        },
      },
    },
  });
}

// Chart 5: Resumen de Cupones (Bar Chart)
const summaryChart = document.getElementById("summaryChart");
if (summaryChart) {
  new Chart(summaryChart, {
    type: "bar",
    data: {
      labels: ["Totales", "Impresos", "Pendientes"],
      datasets: [
        {
          label: "PRUEBAS 2",
          data: [6, 1, 5],
          backgroundColor: chartColors.accent,
          borderColor: chartColors.accent,
          borderRadius: 4,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            font: { size: 12, weight: "600" },
            padding: 16,
            usePointStyle: true,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 8,
          ticks: {
            stepSize: 2,
            font: { size: 11 },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
        x: {
          ticks: {
            font: { size: 11 },
          },
          grid: {
            display: false,
          },
        },
      },
    },
  });
}

// Chart 6: Dashboard4 Summary Chart (Horizontal Bar Chart)
const chartSummary = document.getElementById("chartSummary");
if (chartSummary) {
  new Chart(chartSummary, {
    type: "bar",
    data: {
      labels: [
        "Totales",
        "Impresos",
        "Pendientes",
        "Asignados",
        "Otorgados",
        "Virtuales",
        "Físico",
      ],
      datasets: [
        {
          label: "PRUEBA 1",
          data: [45, 30, 5, 0, 0, 43, 0],
          backgroundColor: chartColors.accent,
          borderRadius: 2,
          borderSkipped: false,
        },
        {
          label: "PRUEBA 2",
          data: [30, 20, 8, 15, 5, 0, 30],
          backgroundColor: "#1e3a5f",
          borderRadius: 2,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            font: { size: 12, weight: "600" },
            padding: 16,
            usePointStyle: true,
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleFont: { size: 12 },
          bodyFont: { size: 11 },
          padding: 10,
          borderRadius: 4,
        },
      },
      scales: {
        y: {
          ticks: {
            font: { size: 11 },
            color: "rgba(0, 0, 0, 0.7)",
          },
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.05)",
            drawBorder: false,
          },
        },
        x: {
          beginAtZero: true,
          max: 50,
          ticks: {
            stepSize: 10,
            font: { size: 11 },
            color: "rgba(0, 0, 0, 0.7)",
          },
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.08)",
            drawBorder: false,
          },
        },
      },
    },
  });
}

// ====================================
// DASHBOARD 7: Cupones
// ====================================

// Chart: TOP 10 fechas de impresión (Bar Chart)
const ctxTopFechas = document.getElementById("chartTopFechas");
if (ctxTopFechas) {
  new Chart(ctxTopFechas, {
    type: "bar",
    data: {
      labels: ["2025-11-24"],
      datasets: [
        {
          label: "PRUEBA 2",
          data: [5],
          backgroundColor: chartColors.primary,
          borderWidth: 0,
        },
        {
          label: "PRUEBA 1",
          data: [3],
          backgroundColor: chartColors.dark,
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            font: {
              size: 12,
            },
            padding: 15,
            usePointStyle: true,
            boxWidth: 8,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 6,
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            stepSize: 1,
            font: {
              size: 11,
            },
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

// Chart: Resumen de Cupones (Grouped Bar Chart)
const ctxResumenCupones = document.getElementById("chartResumenCupones");
if (ctxResumenCupones) {
  new Chart(ctxResumenCupones, {
    type: "bar",
    data: {
      labels: ["Impresos", "Manual", "Automático"],
      datasets: [
        {
          label: "PRUEBA 2",
          data: [5, 2, 3],
          backgroundColor: chartColors.primary,
          borderWidth: 0,
          barPercentage: 0.7,
          categoryPercentage: 0.8,
        },
        {
          label: "PRUEBA 1",
          data: [3, 1, 2],
          backgroundColor: chartColors.dark,
          borderWidth: 0,
          barPercentage: 0.7,
          categoryPercentage: 0.8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            font: {
              size: 12,
            },
            padding: 15,
            usePointStyle: true,
            boxWidth: 8,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 6,
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            stepSize: 1,
            font: {
              size: 11,
            },
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

// ----------------
// Dashboard 12 - Gráfica de Apuesta del Cliente
// ----------------
const apuestaClienteChart = document.getElementById("apuestaClienteChart");
if (apuestaClienteChart) {
  new Chart(apuestaClienteChart, {
    type: "line",
    data: {
      labels: ["2025-07-01", "2025-11-12", "2025-11-15", "2025-11-16"],
      datasets: [
        {
          label: "Apuesta del cliente",
          data: [82.5, 765.0, 100.0, 50.0],
          borderColor: "#0066ff",
          backgroundColor: "rgba(0, 102, 255, 0.1)",
          borderWidth: 3,
          fill: false,
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: "#0066ff",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointHoverRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.5,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 12,
          titleFont: {
            size: 13,
          },
          bodyFont: {
            size: 12,
          },
          displayColors: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 1000,
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)",
            drawBorder: false,
          },
          ticks: {
            stepSize: 200,
            font: {
              size: 11,
            },
            color: "#666",
          },
        },
        x: {
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)",
            drawBorder: false,
          },
          ticks: {
            font: {
              size: 11,
            },
            color: "#666",
          },
        },
      },
    },
  });
}
