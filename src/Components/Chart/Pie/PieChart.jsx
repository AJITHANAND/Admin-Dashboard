import React from 'react'
import { Chart } from "react-google-charts";
import { data } from "../../../Constants/tempData";

export const options = {
  // title: "Visit by Traffic Types",
  legend: "none",
  pieSliceText: "label",
  chartArea: {
    width: '95%', 
    height: '90%'
  },
  is3D: true,
};

function PieChart() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop:'0' }}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"20rem"}
      />
    </div>
  )
}

export default PieChart