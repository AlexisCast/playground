import { useState, useEffect } from "react";

import {
	RouterProvider,
	createBrowserRouter,
	useParams,
} from "react-router-dom";

import Root from "./components/Root";
import Characters from "./pages/Characters";
import FillForm from './pages/FillForm'
import DrawerPage from "./pages/DrawerPage";


const Home = () => {
	return <div>Home Content</div>;
};

const Other = () => {
	return <div>Other Componentsss</div>;
};

const CharacterProfile = () => {
	const [profile, setProfile] = useState(null);

	let { characterId } = useParams();
	useEffect(() => {
		console.log("test");
		getRickMortyProfile();
	}, []);

	const getRickMortyProfile = async () => {
		try {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character/${characterId}`
			);
			if (!response.ok) {
        const errorMessage = await response.json();
				throw new Error(errorMessage.error);
			}
			const data = await response.json();
			setProfile(data);
		} catch (error) {
			console.log(error);
			setProfile({ name: error });
		}
	};

	console.log("id", characterId);
	return <div>Name: {profile ? `${profile.name}` : "Loading..."}</div>;
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <div>Error!</div>,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "characters",
				element: <Characters />,
			},
			{
				path: "characters/:characterId",
				element: <CharacterProfile />,
			},
			{ path: "fillform", element: <FillForm /> },
			{ path: "other", element: <Other /> },
			{ path: "drawer", element: <DrawerPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
