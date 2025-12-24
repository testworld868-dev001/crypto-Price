const SortSelector = ({ sortBy, setSortBy }) => {
  return (
    <div className="Controls">
      <label htmlFor="sort">Sort By:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="market_cap_desc">Mark Cap(High to Low)</option>
        <option value="market_cap_asc">Mark Cap(low to high)</option>
        <option value="price_desc">Mark Cap(High to Low)</option>
        <option value="price_asc">Mark Cap(low to high)</option>
        <option value="change_desc">24 Mark Cap(High to Low)</option>
        <option value="change_asc">24 Mark Cap(low to high)</option>
      </select>
    </div>
  );
};

export default SortSelector;
