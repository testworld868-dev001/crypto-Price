import CoinCard from "../componets/CoinCard";
import LimitSelector from "../componets/LimitSelector";
import FilterInput from "../componets/FilterInput";
import SortSelector from "../componets/SortSelector";
import Spinner from "../componets/Spinner";
const HomePage = ({
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  loading,
  error,
  filteredCoins,
}) => {
  return (
    <div>
      <h1>Crypto Dash</h1>
      {loading && <Spinner />}
      {error && <div className="error">{error}</div>}
      <div className="top-controls">
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <LimitSelector limit={limit} setLimiter={setLimit} />
        <SortSelector sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      {!loading && !error && (
        <main className="grid">
          {filteredCoins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </main>
      )}
    </div>
  );
};

export default HomePage;
