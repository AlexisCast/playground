import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import styles from "./index.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<div className={styles.root}>
		<App />
	</div>
);
