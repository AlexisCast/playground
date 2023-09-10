import { useEffect } from "react";
import ReactDOM from "react-dom";

import styles from "./Drawer.module.css";

const Backdrop = ({ onClose }) => {
	return <div className={styles.backdrop} onClick={onClose} />;
};

const DrawerOverlay = ({ children }) => {
	return <div className={styles.container__drawer}>{children}</div>;
};

const Drawer = ({ onClose, children }) => {
	useEffect(() => {
		// Disable vertical scrolling when the Drawer is open
		document.body.style.overflowY = "hidden";

		// Re-enable vertical scrolling when the Drawer is closed
		return () => {
			document.body.style.overflowY = "auto";
		};
	}, []);

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={onClose} />,
				document.getElementById("backdrop-root")
			)}

			{ReactDOM.createPortal(
				<DrawerOverlay>{children}</DrawerOverlay>,
				document.getElementById("overlay-root")
			)}
		</>
	);
};

export default Drawer;
