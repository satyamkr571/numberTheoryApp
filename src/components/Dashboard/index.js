import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import "./styles.scss";
import Card from "../Cards";
const Dashboard = (props) => {
  const moneyDetails = [
    { title: "Revenue", value: "590333" },
    { title: "Costs", value: "393194" },
    { title: "Net Income", value: "197139" },
    { title: "Net Income Customer", value: "432" },
  ];
  const chartData = [
    { title: "Chart 1" },
    { title: "Chart 2" },
    { title: "Chart 3" },
    { title: "Chart 4" },
  ];
  const periodData = [
    { title: "Users" },
    { title: "Leads" },
    { title: "MQL" },
    { title: "SQL" },
    { title: "Customer" },
  ];
  const dispatch = useDispatch();
  const renderChart = (chartDetails) => {
    return (
      <div className="chart-container">Hi Chart Will be rendered here...</div>
    );
  };
  return (
    <div className="dashboard-container">
      <div className="section-left">
        <div className="dashboard-header">CMO Dashboard</div>
        <div className="dashboard-body">
          <div className="card-row">
            {moneyDetails.map((money) => (
              <Card
                classNames=" money-cards"
                header={money.title}
                body={`$${money.value}`}
              />
            ))}
          </div>
          <div className="card-row">
            {chartData.map((data) => (
              <Card classNames=" chart-cards" body={renderChart(data)} />
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
              body={renderChart(period.data)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};
export default Dashboard;
