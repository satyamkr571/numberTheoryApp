import React, { useEffect } from "react";
//import PropTypes from "prop-types";
import { useDispatch, useSelector, connect } from "react-redux";
import "./styles.scss";
import Card from "../Cards";
import Charts from "../Highcharts";

import { getData } from "./action";
const Dashboard = (props) => {
  const dispatch = useDispatch();
  const selectDashboardData = useSelector((state) => state.dashboardData);
  const { moneyDetails, chartData, periodData } = selectDashboardData;

  useEffect(() => {
    dispatch(getData());
    // props.dispatch(getData());
  }, []);

  // When Connect used 
  // useEffect(() => { // Effect body whatever changes you want to do... }, [props.dashboardData]);
  const getxAxisData = (chartData) => {
    return (chartData && chartData.xAxis) || {};
  };

  const renderChart = (data, chartHeight = "300px", chartType) => {
    const { chartDetails, chart } = data;
    const xAxisData = getxAxisData(chart);
    return (
      <div className="chart-container">
        <Charts
          height={chartHeight}
          chartsData={chartDetails}
          xAxisData={xAxisData}
          chartType={chartType}
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
            {moneyDetails &&
              moneyDetails.map((money, index) => (
                <Card
                  key={index}
                  classNames=" money-cards"
                  header={money.title}
                  body={`$${money.value}`}
                />
              ))}
          </div>
          <div className="card-row">
            {chartData &&
              chartData.map((data, index) => (
                <Card
                  key={index}
                  classNames=" chart-cards"
                  header={data.title}
                  body={renderChart(data, "200px")}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="section-right">
        <div className="header">Selected Period:</div>
        <div className="body">
          {periodData &&
            periodData.map((period, index) => (
              <Card
                key={index}
                classNames=" chart-cards"
                header={period.title}
                body={renderChart(period, "100px", "bar")}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  dashboardData: PropTypes.object,
};

// map state to props provides you store's state as props by the key you create here...
/*
const mapStateToProps = state => ({
  dashboardData: state.dashboardData
  // kuchv: state.reducerKeyCombineReducerWaala,
});

const mapDispatchToProps = (dispatch) => {
  return dispatch;
};

export default connect(mapSateToProps, mapDispatchToProps)(Dashboard);

*/
export default Dashboard;

