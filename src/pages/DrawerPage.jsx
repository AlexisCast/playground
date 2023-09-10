import { useState } from "react";
import Drawer from "../components/Drawer";

import styles from "./DrawerPage.module.css";

function DrawerPage() {
	const [activateDrawer, setActivateDrawer] = useState(false);

	const closeDrawerHandler = () => {
		console.log("close");
		setActivateDrawer(false);
	};

	const errorHandler = () => {
		// setError(null);
		console.log("click");
	};

	console.log(activateDrawer);

	return (
		<>
			<h1>To activate Drawer</h1>
			{activateDrawer && (
				<Drawer onClose={closeDrawerHandler} onConfirmn={errorHandler}>
					<div className={styles.drawer_content}>
						<h1>Title</h1>
						<button>Boton 1</button>
						<button>Boton 2</button>
						<button>Boton 3</button>
					</div>
				</Drawer>
			)}
			{/* <Drawer isOpen={activateDrawer} onClose={closeDrawerHandler}>Content</Drawer> */}
			<button onClick={() => setActivateDrawer(!activateDrawer)}>
				Activate Drawer
			</button>
		</>
	);
	// return <RouterProvider router={router} />;
}

export default DrawerPage;
