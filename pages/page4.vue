<template>
  <div>
    <div class="d-flex justify-content-center py-5">
      <div class="title-head w-75 w-md-50 text-center">
        <h1>Data Ketinggian Air</h1>
      </div>
    </div>
    <canvas id="myChart"></canvas>
    <div class="d-flex mt-5">
      <div class="w-50">
      <div class="n-bg-secondary card  border-0 p-3 n-card">
        <p class="text-center">
          Graifk menunjukan dalam 7 hari PH tanah bernilai 5,2
        </p>
      </div>

      </div>
      <div class="w-50">
        <canvas id="dChart"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
export default {
  mounted() {
    const data = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Grafik PH Tanah",
          data: [5.5, 4.8, 5.3, 4.9, 5.1, 5.3, 4.9],
          backgroundColor: "#712DDF",
          borderWidth: 0,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          max: 7,
          beginAtZero: true,
        },
      },
    };

    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    // D CHART

    const DATA_COUNT = 5;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const dataD = {
      datasets: [
        {
          label: "Dataset 1",
          data: [30, 70],
          backgroundColor: ["#A536E9", "#712DDF"],
          borderWidth: 0,

        },
      ],
    };
    const ctxD = document.getElementById("dChart").getContext("2d");
    const dChart = new Chart(ctxD, {
      type: "doughnut",
      data: dataD,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: false,
            text: "Chart.js Doughnut Chart",
          },
        },
      },
    });
  },
};
</script>