/* eslint-disable react/prop-types */
import { Doughnut } from "react-chartjs-2";

Doughnut;

function DoughnutChart({ data }) {
  return (
    <div className="chart">
      <Doughnut
        data={{
          labels: data?.map((individualData) => individualData.title),
          datasets: [
            {
              label: "discountPercentage",
              data: data?.map(
                (individualData) => individualData.discountPercentage
              ),
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "#CDFADB",
                "#176B87",
                "#5EAAA8",
                "#684184",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "#CDFADB",
                "#176B87",
                "#5EAAA8",
                "#684184",
              ],
              hoverOffset: 4,
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

export default DoughnutChart;
