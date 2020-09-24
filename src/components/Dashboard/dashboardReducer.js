import {
  costPerCustomerChartData,
  costPerLeadChartData,
  costPerMQLChartData,
  costPerSQLChartData,
  mockData,
  usersChartData,
  leadsChartData,
  SQLChartsData,
  MQLChartsData,
  CustomerChartData,
} from "./mockData";

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
  {
    title: "Users",
    chart: usersChartData,
    chartDetails: [
      {
        id: 1,
        type: "column",
        seriesData: mockData,
      },
    ],
  },
  {
    title: "Leads",
    chart: leadsChartData,
    chartDetails: [
      {
        id: 1,
        type: "column",
        seriesData: mockData,
      },
    ],
  },
  {
    title: "MQL",
    chart: MQLChartsData,
    chartDetails: [
      {
        id: 1,
        type: "column",
        seriesData: mockData,
      },
    ],
  },
  {
    title: "SQL",
    chart: SQLChartsData,
    chartDetails: [
      {
        id: 1,
        type: "column",
        seriesData: mockData,
      },
    ],
  },
  {
    title: "Customer",
    chart: CustomerChartData,
    chartDetails: [
      {
        id: 1,
        type: "column",
        seriesData: mockData,
      },
    ],
  },
];

const initialState = {
  moneyDetails,
  chartData,
  periodData,
};
export function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA": {
      const currState = { ...state, ...action.payload };
      return currState;
    }
    case "GET_DATA":
      return state;

    default:
      return state;
  }
}
