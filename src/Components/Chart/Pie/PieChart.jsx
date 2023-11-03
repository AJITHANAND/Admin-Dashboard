import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
  ["Source", "Order"],
  ["Referral", 600],
  ["Organic",300],
  ["Direct", 500],
  ["Youtube", 200],
  ["Instagram", 200],
  ["Other", 68],
];

export const options = {
  title: "Visit by Traffic Types",
  legend: "none",
  pieSliceText: "label",
};



function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  )
}

export default PieChart