/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js/auto";
import close from "./asset/pngwing.com (1).png";
import LineChart from "./Chart/LineChart";
import DoughnutChart from "./Chart/DoughnutChart";
import BarChart from "./Chart/BarChart";

import { useState } from "react";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

export default function Dynamic({ data, Type, index }) {
  const [show, setshow] = useState(true);

  function DynamicRender() {
    switch (Type) {
      case "line":
        return <LineChart data={data} />;
      case "bar":
        return <BarChart data={data} />;
      case "Doughnut":
        return <DoughnutChart data={data} />;

      default:
        return <LineChart data={data} />;
    }
  }

  return (
    <div>
      <h1>Chart {index + 1}</h1>
      {show ? (
        <div style={{ position: "relative" }}>
          {DynamicRender()}

          <img onClick={() => setshow(false)} src={close} className="exit" />
        </div>
      ) : (
        <div className="hide_box">
          <button onClick={() => setshow(true)} className="btn" role="button">
            Show
          </button>
        </div>
      )}
    </div>
  );
}
