var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Hauteur du barrage",
        },
      },
    },
  },
});
