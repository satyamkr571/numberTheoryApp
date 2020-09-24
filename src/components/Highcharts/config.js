import Highcharts from "highcharts";
import { mockData } from "../Dashboard/mockData";
export const getChartConfigs = () => {
  const chartConfigs = {
    chart: {
      zoomType: "x",
      panning: true,
      panKey: "shift",
    },
    rangeSelector: {
      enabled: false,
    },
    scrollbar: {
      enabled: false,
    },
    navigator: {
      enabled: false,
    },
    credits: {
      enabled: true,
    },
    title: {
      text: "",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Exchange rate",
      },
      opposite: false,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      align: "center",
      floating: true,
      verticalAlign: "bottom",
      backgroundColor:
        (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
        "#ffffff",
    },

    series: [],
  };
  return chartConfigs;
};

export const dummyData = [
  {
    name: "AAPL Stock Price",
    data: mockData,
    type: "areaspline",
    threshold: null,
    tooltip: {
      valueDecimals: 2,
    },
    fillColor: {
      linearGradient: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
      },
      stops: [
        [0, Highcharts.getOptions().colors[0]],
        [
          1,
          Highcharts.color(Highcharts.getOptions().colors[0])
            .setOpacity(0)
            .get("rgba"),
        ],
      ],
    },
  },
];
