/* eslint-disable react/prop-types */
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import arrow from "../asset/pngwing.com (2).png";

function BarChart({ data }) {
  const tag = ["rating", "discountPercentage", "price", "stock"];
  const [tagOption, settagOption] = useState(tag[0]);
  const [show, setshow] = useState(false);

  return (
    <div className="bar">
      <div className="popup">
        <div onClick={() => setshow(!show)} className="popupholder">
          <p>{tagOption}</p>
          <img src={arrow} className={show ? "arrow_up" : "arrow_down"} />
        </div>
        {show && (
          <div className="item">
            {tag.map((item, index) => (
              <p
                onClick={() => {
                  settagOption(item);
                  setshow(!show);
                }}
                key={index}
                value={item}
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="chart_bar">
        <div className="popup">
          {/* <select
          className="select_id"
         
        >
          {tag.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select> */}
        </div>

        <Bar
          data={{
            // labels: data?.map((individualData) => individualData.title),
            datasets: [
              {
                label: tagOption,
                data: data,
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
                parsing: {
                  xAxisKey: "title",
                  yAxisKey: tagOption,
                },
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
    </div>
  );
}

export default BarChart;
