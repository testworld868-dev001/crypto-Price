import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale
);

const API_URLS =
  "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=7";
const CoinChart = ({ coinId }) => {
  const [chartData, SetChartData] = useState({
    datasets: [],
  });
  //const [loading, setLoading] = useState(null);
  useEffect(() => {
    const fetchcoins = async () => {
      const res = await fetch(`${API_URLS}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      const prices = data.prices.map((price) => ({
        x: price[0],
        y: price[1],
      }));
      SetChartData({
        datasets: [
          {
            lable: "Price (USD)",
            data: prices,
            fill: true,
            borderColor: "#007bff",
            pointRadius: 0,
            tensions: 0.3,
          },
        ],
      });

      // setLoading(false);
    };
    fetchcoins();
  }, [coinId]);
  return (
    <div style={{ marginTop: "30px" }}>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { mode: "index", intersect: false },
          },
          scales: {
            x: {
              type: "time",
              time: { unit: "day" },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 7,
              },
            },
            y: {
              ticks: {
                callback: (value) => `$${value.toLocaleString()}`,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CoinChart;
