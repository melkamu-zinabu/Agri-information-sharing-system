
import React from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto"
function Linechart({chartData,options}) {
  return (
    <div>
      <Bar data={chartData}  options={options}/>
    </div>
  )
}

export default Linechart
