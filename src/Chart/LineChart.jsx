/* eslint-disable react/prop-types */

import { Line } from "react-chartjs-2";

function LineChart({ data }) {
  return (
    <div className="chart">
      <Line
        data={{
          labels: data?.map((individualData) => individualData.title),

          datasets: [
            {
              label: "DiscountPercentage",

              data: data?.map(
                (individualData) => individualData.discountPercentage
              ),

              fill: true,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              pointBackgroundColor: "rgb(255, 99, 132)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
            },
            {
              label: "Stock",

              data: data?.map((individualData) => individualData.stock),
              fill: true,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgb(54, 162, 235)",
              pointBackgroundColor: "rgb(54, 162, 235)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(54, 162, 235)",
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 1,
          title: { text: "THICCNESS SCALE", display: true },
        }}
      />
    </div>
  );
}

export default LineChart;
