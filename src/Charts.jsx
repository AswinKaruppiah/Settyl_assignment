/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  defaults,
} from "chart.js/auto";

import add from "./asset/pngwing.com.png";
import Dynamic from "./DynamicChart";
import { useDispatch, useSelector } from "react-redux";
import { setComponent } from "./state/dataslice";
import LineChart from "./Chart/LineChart";
import DoughnutChart from "./Chart/DoughnutChart";
import BarChart from "./Chart/BarChart";
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

export default function Charts({ data }) {
  const dispatch = useDispatch();
  const Component = useSelector((state) => state.api.components);

  function addComponent() {
    dispatch(setComponent());
  }

  defaults.font.family = "Poppins";
  return (
    <>
      <BarChart data={data} />
      <DoughnutChart data={data} />
      <LineChart data={data} />
      <BarChart data={data} />
      {Component.map((item, i) => (
        <Dynamic key={i} index={i} data={data} Type={item} />
      ))}
      <div className="add" onClick={() => addComponent()}>
        <img src={add} />
      </div>
    </>
  );
}
