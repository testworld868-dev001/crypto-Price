import { BarLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Spinner = () => {
  return (
    <div>
      <BarLoader
        color="#5717e1ff"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        CSSProperties={override}
      />
    </div>
  );
};

export default Spinner;
