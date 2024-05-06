import React, { useState, useEffect, useRef } from "react";

const EditableCell = ({
	value: initialValue,
	row,
	column,
	onValueChange,
	type,
}) => {
	const [value, setValue] = useState(initialValue);
	const [editing, setEditing] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	useEffect(() => {
		if (editing) {
			inputRef.current.focus();
		}
	}, [editing]);

	const handleChange = (event) => {
		const newValue =
			type === "checkbox" ? event.target.checked : event.target.value;
		setValue(newValue);
	};

	const handleBlur = () => {
		onValueChange(row, column, value);
		setEditing(false);
	};

	return editing ? (
		<input
			ref={inputRef}
			type={type || "text"}
			checked={type === "checkbox" ? value : undefined}
			value={type !== "checkbox" ? value : undefined}
			onChange={handleChange}
			onBlur={handleBlur}
			className="input input-bordered input-sm w-full"
		/>
	) : (
		<div
			className="px-2 py-1 cursor-pointer hover:bg-gray-100"
			onDoubleClick={() => setEditing(true)}
		>
			{type === "checkbox" ? (
				<input
					type="checkbox"
					checked={value}
					className="checkbox checkbox-xs"
					readOnly
				/>
			) : (
				value
			)}
		</div>
	);
};

export default EditableCell;
