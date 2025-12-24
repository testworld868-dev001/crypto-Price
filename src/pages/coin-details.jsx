import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Spinner from "../componets/Spinner";
import CoinChart from "../componets/CoinChart";
const API_URL = "https://api.coingecko.com/api/v3/coins";
//import.meta.env.VITE_API_URL;
const CoinDetailsPage = () => {
  const { id } = useParams();
  const [coin, setCoins] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchcoins();
  }, [id]);
  return (
    <div className="coin-details-container">
      <Link to="/"> back to home</Link>
      <h1 className="coin-details-title">
        {coin ? `${coin.name} (${coin.symbol})` : "Coin Details"}
      </h1>

      {loading && <Spinner />}
      {error && <div className="error">{error}</div>}
      {!loading && !error && (
        <>
          <img
            src={coin.image.large}
            alt={coin.name}
            className="coin-details-image"
          />
          <p> {coin.description.en.split(".")[0] + "."}</p>

          <div className="coin-details-info">
            <h3> Rank : #{coin.market_cap_rank}</h3>
            <h3>
              Current Price: ${" "}
              {coin.market_data.current_price.usd.toLocaleString()}
            </h3>
            <h3>
              Market Cap : ${coin.market_data.market_cap.usd.toLocaleString()}
            </h3>

            <h3>
              <p
                className={
                  coin.price_change_percentage_24h >= 0
                    ? "positive"
                    : "negative"
                }
              >
                24 hr change:{" "}
                {coin.market_data.price_change_percentage_24h.toLocaleString()}
              </p>
            </h3>
            <CoinChart coinId={coin.id} />
            <div className="coin-details-links">
              {coin.links.homepage[0] && (
                <p>
                  @{" "}
                  <a
                    href={coin.links.homepage[0]}
                    target="_bank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CoinDetailsPage;
