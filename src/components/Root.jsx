import { Link, NavLink, Outlet } from "react-router-dom";

const Root = () => {
	return (
		<>
			<header className="p-8 flex justify-center">
				<nav>
					<ul className="flex gap-4">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive
										? "color1"
										: "color2"
								}
								end
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/characters"
								className={({ isActive }) =>
									isActive
										? "color1"
										: "color2"
								}
							>
								Characters
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/fillform"
								className={({ isActive }) =>
									isActive
										? "color1"
										: "color2"
								}
							>
								Fill Form
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/other"
								className={({ isActive }) =>
									isActive
										? "color1"
										: "color2"
								}
							>
								Other
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
      <Outlet/>
		</>
	);
};

export default Root;
