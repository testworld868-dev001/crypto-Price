import { Link } from "react-router";
const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>
        OOO! The Page you're looking for are not found
      </p>
      <Link to="/" style={styles.link}>
        Go to Home Page
      </Link>
    </div>
  );
};
const styles = {
  container: {
    textAlign: "center",
    padding: "80px 20px",
    color: "#fff",
  },
  title: {
    fontsize: "72px",
    marginBottom: "20px",
  },
  message: {
    fontsize: "18px",
    marginBottom: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#6746deff",
  },
};

export default NotFoundPage;
