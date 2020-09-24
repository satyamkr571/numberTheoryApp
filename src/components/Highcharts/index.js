import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { set, isEqual } from "lodash";
import Highcharts from "highcharts/highstock";
import { getChartConfigs } from "./config";

const Charts = props => {
  //Ref...
  const chartContainer = useRef(null);
  const { chartsData, height, yAxisData, xAxisData, chartType } = props;
  let chart = null;
  useEffect(() => {
    updateChart(chartsData);
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartsData]);
  // Method to clear the chart data...
  const clearChart = () => {
    const chartConfigs = getChartConfigs();
    set(
      chartConfigs.yAxis,
      ["title", "text"],
      yAxisData.title || "Dummy YAxis Title"
    );
    set(
      chartConfigs.xAxis,
      ["title", "text"],
      xAxisData.title || "Dummy XAxis Title"
    );
    chartConfigs.series = [];
    console.log("chartConfigs: ", chartConfigs);
    //creating chart...
    if (isEqual(chartType, "bar")) {
      chart = Highcharts.chart(chartContainer.current, chartConfigs);
    } else {
      chart = Highcharts.stockChart(chartContainer.current, chartConfigs);
    }
  };
  // Method to update the chart with data...
  const updateChart = series => {
    console.log(series);
    clearChart();
    if (series && series.length > 0 && Array.isArray(series)) {
      series.forEach((seriesItem, index) =>
        chart.addSeries({
          id: seriesItem.id,
          type: seriesItem.type || "line",
          yAxis: index,
          seriesId: seriesItem.id,
          data: seriesItem.seriesData || [],
          name: seriesItem.name,
          fillOpacity: 1,
          boostThreshold: 50000,
        })
      );
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ position: "relative", width: "100%", height: height }}
        ref={chartContainer}
      />
    </div>
  );
};

Charts.propTypes = {
  height: PropTypes.string,
  chartsData: PropTypes.array,
};

Charts.defaultProps = {
  height: "300px",
  chartsData: [],
  xAxisData: {},
  yAxisData: {},
};

export default Charts;
