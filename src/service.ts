import { ApexOptions } from "apexcharts";
export function getChartPerformace() {
  return {
    series: [
      {
        name: "Performace",
        type: "column",
        data: [60, 45, 41, 58, 65, 80, 88, 98],
      },
      {
        name: "Histórico",
        type: "line",
        data: [45, 88, 86, 95, 93, 81, 59, 77],
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
      dataLabels: {
        enabled: true,
        enabledOnSeries: [3],
      },
      labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
      legend: {
        show: false,
      },
      xaxis: {
        type: "text",
      },
      yaxis: [
        {
          title: {
            text: "Performace",
          },
        },
        {
          opposite: true,
          title: {
            text: "Histórico",
          },
        },
      ],
    },
  } as ApexOptions;
}

export function getChartBar(data: any[], categories: any[]) {
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
  } as ApexOptions;
}
export function getChartPie() {
  return {
    series: [1.2, 1.5],
    options: {
      chart: {
        width: 380,
      },
      labels: ["Risco", "Limite"],
      legend: {
        show: false,
      },
    } as ApexOptions,
  };
}

export function getDatabank() {
  return {
    dataBarBank: [0, 100, 200, 300, 400, 500, 750, 1000, 1500],
    categoriesBarBank: [
      "05/2022",
      "08/2022",
      "09/2022",
      "12/2022",
      "04/2023",
      "05/2023",
    ],
  };
}
