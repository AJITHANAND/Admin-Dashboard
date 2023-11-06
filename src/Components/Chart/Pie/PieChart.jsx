import React from 'react'
import { Chart } from "react-google-charts";
import { data } from "../../../Constants/tempData";

export const options = {
  // title: "Visit by Traffic Types",
  legend: "none",
  pieSliceText: "label",
  backgroundColor: 'transparent',
  chartArea: {
    width: '95%', 
    height: '90%',
  },
  is3D: true,
};

function PieChart() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop:'0',backgroundColor:'transparent' }}>
      <Chart
        chartType="PieChart"
        backgroundColor="transparent"
        data={data}
        options={options}
        width={"100%"}
        height={"20rem"}
      />
    </div>
  )
}

export default PieChart