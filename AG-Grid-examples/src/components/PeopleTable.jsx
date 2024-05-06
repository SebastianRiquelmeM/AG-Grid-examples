import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import EditableCell from "./EditableCell";

const PeopleTable = () => {
	const [peopleList, setPeopleList] = useState([
		{
			id: 1,
			name: "John Doe",
			age: 28,
			email: "john@example.com",
			phone: "123456789",
			dateOfBirth: "1993-05-15",
			salary: 5000,
			active: true,
		},
		{
			id: 2,
			name: "Jane Smith",
			age: 35,
			email: "jane@example.com",
			phone: "987654321",
			dateOfBirth: "1988-09-20",
			salary: 7500,
			active: false,
		},
		// Add more people as needed
	]);

	const handleCellValueChange = (row, column, value) => {
		const updatedList = peopleList.map((person) => {
			if (person.id === row.id) {
				return { ...person, [column.colId]: value };
			}
			return person;
		});

		setPeopleList(updatedList);
	};

	const columnDefs = useMemo(
		() => [
			{
				field: "name",
				headerName: "Name",
				cellRenderer: (params) => (
					<EditableCell
						value={params.value}
						row={params.data}
						column={params.column}
						onValueChange={handleCellValueChange}
					/>
				),
			},
			{
				field: "age",
				headerName: "Age",
				cellRenderer: (params) => (
					<EditableCell
						value={params.value}
						row={params.data}
						column={params.column}
						onValueChange={handleCellValueChange}
						type="number"
					/>
				),
			},
			{
				field: "email",
				headerName: "Email",
				cellRenderer: (params) => (
					<EditableCell
						value={params.value}
						row={params.data}
						column={params.column}
						onValueChange={handleCellValueChange}
						type="email"
					/>
				),
			},
			{
				field: "phone",
				headerName: "Phone",
				cellRenderer: (params) => (
					<EditableCell
						value={params.value}
						row={params.data}
						column={params.column}
						onValueChange={handleCellValueChange}
						type="tel"
					/>
				),
			},
			{
				field: "dateOfBirth",
				headerName: "Date of Birth",
				cellRenderer: (params) => (
					<EditableCell
						value={params.value}
						row={params.data}
						column={params.column}
						onValueChange={handleCellValueChange}
						type="date"
					/>
				),
			},
			{
				field: "salary",
				headerName: "Salary",
				valueFormatter: (params) => `$${params.value.toLocaleString()}`,
				cellRenderer: (params) => (
					<EditableCell
						value={params.value}
						row={params.data}
						column={params.column}
						onValueChange={handleCellValueChange}
						type="number"
					/>
				),
			},
			{
				field: "active",
				headerName: "Active",
				cellRenderer: (params) => (
					<EditableCell
						value={params.value}
						row={params.data}
						column={params.column}
						onValueChange={handleCellValueChange}
						type="checkbox"
					/>
				),
			},
		],
		[]
	);

	return (
		<div className="mx-auto w-full">
			<h2 className="my-10 text-xl text-center font-semibold mb-4">
				People Table
			</h2>
			<div className="ag-theme-alpine mx-10">
				<AgGridReact
					rowData={peopleList}
					columnDefs={columnDefs}
					domLayout="autoHeight"
					animateRows={true}
					rowSelection="multiple"
					pagination={true}
					paginationPageSize={10}
				/>
			</div>
		</div>
	);
};

export default PeopleTable;
