export function getChartPerformace() {
  return {
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: "Traffic Sources",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001",
      ],
      xaxis: {
        type: "datetime",
      },
      yaxis: [
        {
          title: {
            text: "Website Blog",
          },
        },
        {
          opposite: true,
          title: {
            text: "Social Media",
          },
        },
      ],
    },
  };
}

export function getChartBar(data, categories) {
  return {
    series: [
      {
        data: data,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: categories,
      },
    },
  };
}
export function getChartPie() {
  return {
    series: [1.2, 1.5],
    options: {
      chart: {
        width: 6000,
      },
      labels: ["Risco", "Limite"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
}
