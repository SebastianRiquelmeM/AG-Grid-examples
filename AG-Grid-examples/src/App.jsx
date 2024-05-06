import React from "react";
import PeopleTable from "./components/PeopleTable";

const App = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8 text-center">
				People Management System
			</h1>
			<PeopleTable />
		</div>
	);
};

export default App;
