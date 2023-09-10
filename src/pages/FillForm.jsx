import { useState, useEffect } from "react";

import mockData from "../mockData";

const FillForm = () => {
	// Define state variables for form input values
	const initialState = mockData;
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [data, setData] = useState(initialState);

	useEffect(() => {
		console.log("Checking..", firstName);

		const identifier = setTimeout(() => {
			if (!firstName.trim() == "") {
				console.log("Going to fetch");
			}
		}, 2000);

		return () => {
			console.log("CLEANUP");
			clearTimeout(identifier);
		};
	}, [firstName]);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Form submitted with data:", {
			firstName,
			lastName,
			email,
		});
	};

	return (
		<div>
			<h2>Simple Form Example</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};
export default FillForm;
