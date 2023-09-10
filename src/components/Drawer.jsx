import ReactDOM from "react-dom";

import styles from "./Drawer.module.css";

const Backdrop = ({ onClose }) => {
	return <div className={styles.backdrop} onClick={onClose} />;
};

const DrawerOverlay = ({ children }) => {
	return <div className={styles.container__drawer}>{children}</div>;
};

const Drawer = ({ onClose, children }) => {
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
