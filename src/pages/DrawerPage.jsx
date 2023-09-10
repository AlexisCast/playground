import { useState } from "react";
import Drawer from "../components/Drawer";

import styles from "./DrawerPage.module.css";
import { lorem10 } from "../mockData";

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
			<button onClick={() => setActivateDrawer(!activateDrawer)}>
				Activate Drawer
			</button>
			<div>
				<p>{lorem10}</p>
				<p>{lorem10}</p>
				<p>{lorem10}</p>
				<p>{lorem10}</p>
				<p>{lorem10}</p>
			</div>
			{activateDrawer && (
				<Drawer onClose={closeDrawerHandler} onConfirmn={errorHandler}>
					<div className={styles.drawer_content}>
						<h1>Title</h1>
						<p>Click outside to close Drawer</p>
						<button>Boton 1</button>
						<button>Boton 2</button>
						<button onClick={closeDrawerHandler}>
							Close Drawer
						</button>
						<button>Boton 3</button>
					</div>
				</Drawer>
			)}
			{/* <Drawer isOpen={activateDrawer} onClose={closeDrawerHandler}>Content</Drawer> */}
		</>
	);
	// return <RouterProvider router={router} />;
}

export default DrawerPage;
