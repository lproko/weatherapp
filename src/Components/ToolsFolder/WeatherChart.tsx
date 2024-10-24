import { Line } from "react-chartjs-2";
import { Box, Flex, Text } from "@mantine/core";
import Clock from "../../assets/dailyweathericons/Clock.svg";
import Icon1 from "../../assets/charticons/117.png";
import Icon2 from "../../assets/charticons/113.png";
import Icon3 from "../../assets/charticons/200 386.png";
import Icon4 from "../../assets/charticons/389.png";
import Icon5 from "../../assets/charticons/390.png";
import Icon6 from "../../assets/charticons/392.png";
import Icon7 from "../../assets/charticons/icon.png";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// Register required components from Chart.js
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);
const weatherIcons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7];

const data = {
  labels: ["Now", "22:00", "00:00", "2:00", "4:00", "6:00", "8:00"],
  datasets: [
    {
      label: "Temperature",
      data: [26, 26, 22, 16, 20, 22, 16],
      fill: false,
      borderColor: "#FFA500",
      pointBorderColor: "#ffffff",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  layout: {
    padding: {
      top: 25,
      bottom: 35,
      left: 10,
      right: 10,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
      min: 10,
      max: 30,
    },
  },
  elements: {
    point: {
      radius: 2,
      backgroundColor: "#fff",
      border: "none",
    },
  },
};

const WeatherChart = () => {
  return (
    <Box style={{ height: "100%", width: "100%" }}>
      <Flex>
        <img src={Clock} alt="" />{" "}
        <Text className="font-inter text-white text-sm">24-hour forecast</Text>
      </Flex>
      <Box className="h-[180px]">
        <Line
          data={data}
          options={options}
          plugins={[
            {
              id: "custom_labels",
              afterDraw: (chart) => {
                const ctx = chart.ctx;
                const dataset = chart.data.datasets[0];
                const meta = chart.getDatasetMeta(0);
                // const chartArea = chart.chartArea;

                if (chart.data.labels) {
                  dataset.data.forEach((value, index) => {
                    const point = meta.data[index].getProps(["x", "y"], true);

                    ctx.font = "bold 12px Inter";
                    ctx.fillStyle = "#ffffff";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";

                    const x = point.x;
                    const y = point.y - 15;

                    ctx.fillText(`${value}°`, x, y);

                    const timeLabel = chart.data.labels![index];
                    ctx.font = "normal 12px Inter";
                    ctx.fillStyle = "#ffffff";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";

                    const timeLabelY = point.y + 60;
                    ctx.fillText(timeLabel as any, x, timeLabelY);
                    const img = new Image();
                    img.src = weatherIcons[index];

                    const iconSize = 20;
                    const iconX = x - iconSize / 2;
                    const iconY = point.y + 25;

                    img.onload = () => {
                      ctx.drawImage(img, iconX, iconY, iconSize, iconSize);
                    };
                  });
                }
              },
            },
          ]}
          height={100} // Control chart height
        />
      </Box>
    </Box>
  );
};

export default WeatherChart;
