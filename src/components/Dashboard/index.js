import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import "./styles.scss";
import Card from "../Cards";
import Charts from "../Highcharts";
import {
  costPerCustomerChartData,
  costPerLeadChartData,
  costPerMQLChartData,
  costPerSQLChartData,
  mockData,
} from "./mockData";
const Dashboard = (props) => {
  const moneyDetails = [
    { title: "Revenue", value: "590333" },
    { title: "Costs", value: "393194" },
    { title: "Net Income", value: "197139" },
    { title: "Net Income Customer", value: "432" },
  ];
  const chartData = [
    {
      title: "Cost Per Lead",
      chart: costPerLeadChartData.data,
      chartDetails: [
        {
          id: "1",
          type: "area",
          seriesData: mockData,
        },
      ],
    },
    {
      title: "Cost Per MQL",
      chart: costPerMQLChartData.data,
      chartDetails: [
        {
          id: "1",
          type: "area",
          seriesData: mockData,
        },
      ],
    },
    {
      title: "Cost Per SQL",
      chart: costPerSQLChartData.data,
      chartDetails: [
        {
          id: "1",
          type: "area",
          seriesData: mockData,
        },
      ],
    },
    {
      title: "Cost Per Customer",
      chart: costPerCustomerChartData.data,
      chartDetails: [
        {
          id: "1",
          type: "area",
          seriesData: mockData,
        },
      ],
    },
  ];
  const periodData = [
    { title: "Users" },
    { title: "Leads" },
    { title: "MQL" },
    { title: "SQL" },
    { title: "Customer" },
  ];

  // const dispatch = useDispatch();

  const getxAxisData = (chartData) => {
    return (chartData && chartData.xAxis) || {};
  };
  const renderChart = (data, chartHeight = "300px") => {
    const { chartDetails, chart } = data;
    const xAxisData = getxAxisData(chart);
    return (
      <div className="chart-container">
        <Charts
          height={chartHeight}
          chartsData={chartDetails}
          xAxisData={xAxisData}
        />
      </div>
    );
  };
  return (
    <div className="dashboard-container">
      <div className="section-left">
        <div className="dashboard-header">CMO Dashboard</div>
        <div className="dashboard-body">
          <div className="card-row">
            {moneyDetails.map((money, index) => (
              <Card
                key={index}
                classNames=" money-cards"
                header={money.title}
                body={`$${money.value}`}
              />
            ))}
          </div>
          <div className="card-row">
            {chartData.map((data) => (
              <Card
                classNames=" chart-cards"
                body={renderChart(data, "200px")}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="section-right">
        <div className="header">Selected Period:</div>
        <div className="body">
          {periodData.map((period) => (
            <Card
              classNames=" chart-cards"
              header={period.title}
              body={renderChart(period, "100px")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};
export default Dashboard;
